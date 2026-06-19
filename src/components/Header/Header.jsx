import {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './Header.css'

const Header = ({restaurantName}) => {
  const history = useHistory()

  const {cartList} = useContext(CartContext)

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="header-component">
      <Link to="/" className="restaurant-link">
        <h1 className="restaurant-name">{restaurantName}</h1>
      </Link>

      <div className="cart-container">
        <p className="orders-text">My Orders</p>

        <Link to="/cart">
          <button type="button" data-testid="cart" className="cart-button">
            <span className="cart-count">{cartList.length}</span>

            <AiOutlineShoppingCart size={32} />
          </button>
        </Link>

        <button className="logout-btn" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
