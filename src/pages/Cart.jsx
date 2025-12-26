import Header from '../components/Header.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectTotalItems, selectTotalPrice, clearCart } from '../store/cartSlice.js'
import CartItem from '../components/CartItem.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const items = useSelector(selectCartItems)
  const totalItems = useSelector(selectTotalItems)
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()

  const checkout = () => {
    alert('Checkout is a demo in this project!')
  }

  return (
    <div>
      <Header />
      <main className="container">
        <h2>Shopping Cart</h2>
        <div className="cart-summary">
          <p>Items: <strong>{totalItems}</strong></p>
          <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
        </div>
        <div className="cart-list">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map(item => <CartItem key={item.id} item={item} />)
          )}
        </div>
        <div className="cart-controls">
          <Link to="/products" className="btn">Continue Shopping</Link>
          <button className="btn primary" onClick={checkout}>Checkout</button>
          <button className="btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </main>
    </div>
  )
}

export default Cart
