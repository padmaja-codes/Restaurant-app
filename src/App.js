import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useState} from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import CartContext from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => {
  const [cartList, setcartList] = useState([])

  const addCartItem = item => {
    const existingItem = cartList.find(
      eachItem => eachItem.dish_id === item.dish_id,
    )

    if (existingItem) {
      setcartList(
        cartList.map(eachItem =>
          eachItem.dish_id === item.dish_id
            ? {
                ...eachItem,
                quantity: eachItem.quantity + item.quantity,
              }
            : eachItem,
        ),
      )
    } else {
      setcartList([...cartList, item])
    }
  }

  const removeCartItem = id => {
    setcartList(cartList.filter(item => item.dish_id !== id))
  }

  const incrementCartItemQuantity = id => {
    setcartList(
      cartList.map(item =>
        item.dish_id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    setcartList(
      cartList
        .map(item =>
          item.dish_id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const removeAllCartItems = () => {
    setcartList([])
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  )
}
export default App
