// src/contexts/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    { id: '1', name: 'Premium Embroidered Linen Abaya', price: 28500, quantity: 1, size: 'M', color: 'Black', emoji: '🧕', vendor: 'Hayaa Collections' },
    { id: '2', name: 'Luxury Silk Hijab Set', price: 8500, quantity: 2, size: 'One Size', color: 'Dusty Rose', emoji: '🧣', vendor: 'Modest & More' },
  ]);

  const addItem = (product, size, color) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size && i.color === color);
      if (existing) return prev.map(i => i.id === existing.id && i.size === size ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1, size, color, emoji: product.emoji, vendor: product.vendor }];
    });
  };

  const removeItem = (id, size) => setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));

  const updateQuantity = (id, size, qty) => {
    if (qty < 1) return removeItem(id, size);
    setItems(prev => prev.map(i => i.id === id && i.size === size ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
