import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../store/cartSlice.js'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const { id, name, price, image, quantity } = item

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-thumb" />
      <div className="cart-details">
        <h3 className="cart-name">{name}</h3>
        <p className="cart-unit">Unit: ${price.toFixed(2)}</p>
        <p className="cart-total">Total: ${(price * quantity).toFixed(2)}</p>
      </div>
      <div className="cart-actions">
        <button className="btn" onClick={() => dispatch(decrement(id))}>-</button>
        <span className="qty">{quantity}</span>
        <button className="btn" onClick={() => dispatch(increment(id))}>+</button>
      </div>
      <button className="btn danger" onClick={() => dispatch(removeItem(id))}>Delete</button>
    </div>
  )
}

export default CartItem
