import {useContext} from 'react'

import CartContext from '../../context/CartContext'
import Header from '../../components/Header/Header'

import './index.css'

const Cart = () => {
  const {
    cartList,
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeAllCartItems,
  } = useContext(CartContext)

  if (cartList.length === 0) {
    return (
      <>
        <Header restaurantName="UNI Resto Cafe" />

        <div className="empty-cart-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="empty cart"
            className="empty-cart-image"
          />
          <h1 className="empty-cart-heading">Your Cart Is Empty</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <Header restaurantName="UNI Resto Cafe" />

      <div className="restaurant-cart-page">
        <div className="restaurant-cart-header">
          <button
            type="button"
            className="remove-all-btn"
            onClick={removeAllCartItems}
          >
            Remove All
          </button>
        </div>

        <ul className="restaurant-cart-list">
          {cartList.map(item => (
            <li key={item.dish_id} className="restaurant-cart-item">
              <img
                src={item.dish_image}
                alt={item.dish_name}
                className="restaurant-cart-image"
              />

              <div className="restaurant-cart-details">
                <h3 className="restaurant-cart-name">{item.dish_name}</h3>

                <p className="restaurant-cart-price">
                  {item.dish_currency} {item.dish_price}
                </p>

                <div className="restaurant-quantity-container">
                  <button
                    type="button"
                    className="restaurant-quantity-btn"
                    onClick={() => decrementCartItemQuantity(item.dish_id)}
                  >
                    -
                  </button>

                  <span className="restaurant-quantity">{item.quantity}</span>

                  <button
                    type="button"
                    className="restaurant-quantity-btn"
                    onClick={() => incrementCartItemQuantity(item.dish_id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="restaurant-cart-actions">
                <p className="restaurant-total-price">
                  {item.dish_currency} {item.dish_price * item.quantity}
                </p>

                <button
                  type="button"
                  className="restaurant-remove-btn"
                  onClick={() => removeCartItem(item.dish_id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Cart
