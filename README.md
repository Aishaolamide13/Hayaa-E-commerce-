# Shop With Hayaa — Frontend

Complete React frontend for a modest fashion e-commerce platform.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          ← Sticky navbar with cart badge
│   ├── Navbar.module.css
│   ├── Footer.jsx          ← 4-column footer
│   ├── Footer.module.css
│   ├── ProductCard.jsx     ← Reusable product card
│   └── ProductCard.module.css
│
├── pages/
│   ├── HomePage.jsx              ← / (landing page)
│   ├── HomePage.module.css
│   ├── BrowsePage.jsx            ← /collections (filter + grid)
│   ├── BrowsePage.module.css
│   ├── ProductDetailPage.jsx     ← /product/:id
│   ├── ProductDetailPage.module.css
│   ├── CartPage.jsx              ← /cart
│   ├── CartPage.module.css
│   ├── CheckoutPage.jsx          ← /checkout (multi-step)
│   ├── CheckoutPage.module.css
│   ├── CheckoutSuccessPage.jsx   ← /checkout/success
│   └── CheckoutSuccessPage.module.css
│
├── contexts/
│   └── CartContext.jsx     ← Global cart state (add/remove/update)
│
├── data/
│   └── products.js         ← 8 mock products with full data
│
├── App.jsx                 ← Routes
├── main.jsx                ← Entry point
└── index.css               ← Design system (CSS variables, fonts)
```

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#C8962E` | Prices, CTAs, accents |
| `--teal` | `#1A6B5C` | Buttons, links, active states |
| `--cream` | `#FAF8F4` | Page background |
| `--charcoal` | `#1C1C1E` | Header backgrounds, footer |
| `--font-serif` | Cormorant Garamond | Headings, product names |
| `--font-sans` | Montserrat | Body, buttons, labels |

## 📱 Pages Included

| Route | Page |
|---|---|
| `/` | Homepage (Hero, Categories, Featured Products, Seasonal Banner, New Arrivals) |
| `/collections` | Browse/Filter Page (search, filters, sort, grid) |
| `/product/:id` | Product Detail (gallery, variants, add to cart, reviews) |
| `/cart` | Cart Page (items, promo codes, order summary) |
| `/checkout` | Checkout (3-step: Delivery → Payment → Review) |
| `/checkout/success` | Order Confirmation |

## 🔧 Adding Real Product Images

In `ProductCard.jsx`, replace the placeholder `<div>` inside `.imagePlaceholder` with:
```jsx
<img src={product.image} alt={product.name} className={styles.image} />
```

Then add an `image` field to each product in `src/data/products.js`:
```js
image: '/src/assets/products/abaya-1.png',
```

## 🧩 Next Steps (Days 3–6)

- Day 3: Wire up `HomePage.jsx` with real images from `/src/assets/`
- Day 4: Add more products to `products.js`, test browse filters
- Day 5: Add product images and refine `ProductDetailPage`
- Day 6: Test full cart → checkout flow end to end

## 💡 Promo Codes (for testing)
- `HAYAA10` — 10% off
- `EID20` — 20% off  
- `WELCOME15` — 15% off
