import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Header.css'

const Header = ({restaurantName, cartCount = 0}) => (
  <div className="header-component">
    <div className="restaurant-name-container">
      <h1 className="restaurant-name">{restaurantName}</h1>
    </div>
    <div className="cart-container">
      <p className="orders-text">My Orders</p>
      <div className="cart-icon">
        <span className="cart-count">{cartCount}</span>
        <AiOutlineShoppingCart size={32} color="gray" />
      </div>
    </div>
  </div>
)

export default Header
