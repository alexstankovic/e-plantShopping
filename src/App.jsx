import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import AboutUs from './pages/AboutUs.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
