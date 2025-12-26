import plant1 from '../assets/plant-1.svg'
import plant2 from '../assets/plant-2.svg'
import plant3 from '../assets/plant-3.svg'
import plant4 from '../assets/plant-4.svg'
import plant5 from '../assets/plant-5.svg'
import plant6 from '../assets/plant-6.svg'

export const products = [
  { id: 'succ-1', name: 'Aloe Vera', price: 12.99, image: plant1, category: 'Succulents' },
  { id: 'succ-2', name: 'Echeveria', price: 9.99, image: plant2, category: 'Succulents' },
  { id: 'trop-1', name: 'Monstera Deliciosa', price: 29.99, image: plant3, category: 'Tropical' },
  { id: 'trop-2', name: 'Peace Lily', price: 19.99, image: plant4, category: 'Tropical' },
  { id: 'air-1', name: 'Tillandsia Ionantha', price: 7.5, image: plant5, category: 'Air Plants' },
  { id: 'air-2', name: 'Tillandsia Xerographica', price: 24.0, image: plant6, category: 'Air Plants' }
]

export const categories = Array.from(new Set(products.map(p => p.category)))
