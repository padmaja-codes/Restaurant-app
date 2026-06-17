import {useState, useEffect} from 'react'
import Header from './components/Headercom/Header'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'

import './App.css'

const App = () => {
  const [restaurantData, setRestaurantData] = useState(null)
  const [activeCategory, setActiveCategory] = useState('')

  const getRestaurantData = async () => {
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      const data = await response.json()
      setRestaurantData(data[0])
    } catch {
      console.log('error')
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

  if (!restaurantData) {
    return <h1>Loading....</h1>
  }

  console.log(restaurantData)
  console.log(activeCategory)

  return (
    <div className="app-container">
      <Header restaurantName={restaurantData.restaurant_name} />
      <CategoryTabs
        categories={restaurantData.table_menu_list}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  )
}

export default App
