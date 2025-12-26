import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      <div className="hero">
        <h1 className="brand">Paradise Nursery</h1>
        <p className="tagline">
          Discover beautiful, low-maintenance houseplants curated for every home.
          Healthy plants, transparent pricing, and friendly guidance.
        </p>
        <Link to="/products" className="btn primary">Get Started</Link>
      </div>
    </main>
  )
}

export default Landing
