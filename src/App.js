import {useState, useEffect} from 'react'
import Header from './components/Headercom/Header'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import DishList from './components/DishList/DishList'

import './App.css'

const App = () => {
  const [restaurantData, setRestaurantData] = useState(null)
  const [activeCategory, setActiveCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [cartCount, setcartCount] = useState(0)

  const getRestaurantData = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      setRestaurantData(data[0])
    } catch {
      console.log('error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getRestaurantData()
  }, [])

  useEffect(() => {
    if (restaurantData) {
      setActiveCategory(restaurantData.table_menu_list[0].menu_category_id)
    }
  }, [restaurantData])

  if (loading) {
    return <p>Loading.....</p>
  }

  if (!restaurantData) <h1>No Data Available</h1>

  return (
    <div className="app-container">
      <Header
        restaurantName={restaurantData.restaurant_name}
        cartCount={cartCount}
      />
      <CategoryTabs
        categories={restaurantData.table_menu_list}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <DishList
        dishes={
          restaurantData.table_menu_list.find(
            cat => cat.menu_category_id === activeCategory,
          )?.category_dishes || []
        }
        setcartCount={setcartCount}
      />
    </div>
  )
}

export default App
