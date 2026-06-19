import {useState, useEffect} from 'react'

import Header from '../../components/Header/Header'
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs'
import DishList from '../../components/DishList/DishList'

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(null)
  const [activeCategory, setActiveCategory] = useState('')
  const [loading, setLoading] = useState(true)

  const getRestaurantData = async () => {
    setLoading(true)

    try {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )

      const data = await response.json()

      setRestaurantData(data[0])
    } catch (error) {
      console.log(error)
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

  if (!restaurantData) {
    return <h1>No Data Available</h1>
  }

  const activeDishes =
    restaurantData.table_menu_list.find(
      eachCategory => eachCategory.menu_category_id === activeCategory,
    )?.category_dishes || []

  console.log(restaurantData)

  return (
    <div className="home-container">
      <Header restaurantName={restaurantData.restaurant_name} />

      <CategoryTabs
        categories={restaurantData.table_menu_list}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <DishList dishes={activeDishes} />
    </div>
  )
}

export default Home
