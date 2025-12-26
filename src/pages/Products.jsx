import Header from '../components/Header.jsx'
import ProductList from '../components/ProductList.jsx'

function Products() {
  return (
    <div>
      <Header />
      <main className="container">
        <h2>Houseplants</h2>
        <ProductList />
      </main>
    </div>
  )
}

export default Products
