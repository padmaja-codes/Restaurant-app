import DishCard from '../DishCard/DishCard'
import './DishList.css'

const DishList = ({dishes, setcartCount}) => (
  <ul className="dish-list-container">
    {dishes.map(dish => (
      <DishCard key={dish.dish_id} dish={dish} setcartCount={setcartCount} />
    ))}
  </ul>
)

export default DishList
