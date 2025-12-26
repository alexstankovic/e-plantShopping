import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalItems } from '../store/cartSlice.js'

function Header() {
  const totalItems = useSelector(selectTotalItems)
  return (
    <header className="header">
      <Link to="/" className="brand">Paradise Nursery</Link>
      <nav className="nav">
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>
          <span className="cart-icon" aria-label="Shopping Cart">🛒</span>
          <span className="cart-count" aria-live="polite">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
