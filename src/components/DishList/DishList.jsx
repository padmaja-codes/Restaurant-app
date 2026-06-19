import DishCard from '../DishCard/DishCard'
import './DishList.css'

const DishList = ({dishes}) => (
  <ul className="dish-list-container">
    {dishes.map(dish => (
      <DishCard key={dish.dish_id} dish={dish} />
    ))}
  </ul>
)

export default DishList
