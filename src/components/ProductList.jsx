import ProductCard from './ProductCard.jsx'
import { products, categories } from '../data/products.js'

function ProductList() {
  const grouped = categories.map(cat => ({
    category: cat,
    items: products.filter(p => p.category === cat)
  }))

  return (
    <div>
      {grouped.map(group => (
        <section key={group.category} className="category">
          <h3>{group.category}</h3>
          <div className="grid">
            {group.items.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
