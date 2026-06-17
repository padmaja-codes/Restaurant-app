import {useState} from 'react'
import './DishCard.css'

const DishCard = ({dish, setCartCount}) => {
  const [count, setCount] = useState(0)

  const isVeg = dish.dish_Type === 1

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)

    setCartCount(prevCount => prevCount + 1)
  }

  const onDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)

      setCartCount(prevCount => prevCount - 1)
    }
  }

  return (
    <li className="dish-card">
      <div className="dish-left-section">
        <div className={isVeg ? 'veg-indicator' : 'nonveg-indicator'}>
          <div className={isVeg ? 'veg-circle' : 'nonveg-circle'} />
        </div>

        <h3 className="dish-name">{dish.dish_name}</h3>

        <p className="dish-price">
          {dish.dish_currency} {dish.dish_price}
        </p>

        <p className="dish-description">{dish.dish_description}</p>

        {dish.dish_Availability ? (
          <div className="counter-container">
            <button type="button" onClick={onDecrement}>
              -
            </button>

            <span>{count}</span>

            <button type="button" onClick={onIncrement}>
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not Available</p>
        )}

        {dish.addonCat?.length > 0 && (
          <p className="customization-text">Customizations available</p>
        )}
      </div>

      <div className="dish-middle-section">
        <p className="calories-text">{dish.dish_calories} calories</p>
      </div>

      <div className="dish-right-section">
        <img
          src={dish.dish_image}
          alt={dish.dish_name}
          className="dish-image"
        />
      </div>
    </li>
  )
}

export default DishCard
