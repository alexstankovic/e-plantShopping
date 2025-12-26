import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice.js'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const { name, price, image } = product
  const inCart = useSelector(state => !!state.cart.items[product.id])

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-thumb" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button
        className="btn primary"
        disabled={inCart}
        onClick={() => dispatch(addToCart(product))}
      >
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard
