import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.items[product.id]
      if (existing) {
        existing.quantity += 1
      } else {
        state.items[product.id] = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      }
    },
    increment: (state, action) => {
      const id = action.payload
      const item = state.items[id]
      if (item) item.quantity += 1
    },
    decrement: (state, action) => {
      const id = action.payload
      const item = state.items[id]
      if (!item) return
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        delete state.items[id]
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    }
  }
})

export const selectCartItems = (state) => Object.values(state.cart.items)
export const selectTotalItems = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0)
export const selectTotalPrice = (state) =>
  Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity * item.price, 0)

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
