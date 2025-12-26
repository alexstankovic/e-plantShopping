# Paradise Nursery (React + Vite + Redux)

A simple shopping app frontend for browsing houseplants and managing a cart.

## Features
- Landing page with background, company info, and Get Started button
- Product listing page with categories, thumbnails, names, prices, and Add to Cart buttons
- Header on Products/Cart pages with dynamic cart item count and navigation
- Shopping cart page showing items, unit prices, per-item totals, overall total, and quantity controls (+/−) with delete option
- Redux Toolkit for state management, React Router for navigation

## Get Started

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

## Project Structure
- `src/pages` – `Landing`, `Products`, `Cart`
- `src/components` – `Header`, `ProductCard`, `CartItem`
- `src/store` – Redux store and `cartSlice`
- `src/data/products.js` – sample product catalog
- `src/assets` – placeholder SVG images

## Deploy to GitHub Pages
This project uses `gh-pages` and Vite `base` configured for `paradise-nursery`.

1. Create a public GitHub repository (ideally named `paradise-nursery`).
2. Push this project to the repo.
3. Ensure `vite.config.js` has `base: '/<your-repo-name>/'`.
4. Run:

```powershell
npm run build
npm run deploy
```

Then enable Pages in the repository settings, serving from the `gh-pages` branch. Your app will be available at:
`https://<your-username>.github.io/<your-repo-name>/`.

## Notes
- All components are function-based.
- Images are local SVG placeholders to avoid copyright concerns.

