import React from 'react';
import { Package, Plus, Search, MoreVertical, Eye, Edit, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Luxury Dubai Silk Abaya', price: 45000, stock: 24, status: 'Active', img: '🧕', rating: 4.8, orders: 86 },
  { id: 2, name: 'Oud Wood Premium Perfume', price: 12000, stock: 8, status: 'Active', img: '🌸', rating: 4.6, orders: 142 },
  { id: 3, name: 'Gold Embroidered Kaftan Set', price: 68000, stock: 3, status: 'Low Stock', img: '✨', rating: 4.9, orders: 31 },
  { id: 4, name: 'Premium Prayer Mat - Velvet', price: 15000, stock: 0, status: 'Out of Stock', img: '🕌', rating: 4.7, orders: 67 },
  { id: 5, name: 'Silk Chiffon Hijab Pack (5pc)', price: 18500, stock: 42, status: 'Active', img: '🧣', rating: 4.5, orders: 215 },
];

export default function VendorProducts() {
  const statusColor = (s) => s === 'Active' ? { bg: '#ecfdf5', color: 'var(--accent-emerald)' } : s === 'Low Stock' ? { bg: '#fef3c7', color: '#d97706' } : { bg: '#fef2f2', color: '#ef4444' };
  
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Products</h1>
          <p style={{ color: 'var(--text-secondary)' }}>{products.length} products in your catalog</p>
        </div>
        <button style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input placeholder="Search products..." className="input-field" style={{ paddingLeft: '2.5rem', width: '100%' }} />
        </div>
        <select className="input-field" style={{ width: '150px' }}>
          <option>All Status</option><option>Active</option><option>Low Stock</option><option>Out of Stock</option>
        </select>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PRODUCT</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PRICE</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STOCK</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>RATING</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ORDERS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => {
              const sc = statusColor(p.status);
              return (
                <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '45px', height: '45px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{p.img}</div>
                      <span style={{ fontWeight: 500 }}>{p.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>₦{p.price.toLocaleString()}</td>
                  <td style={{ padding: '1rem' }}>{p.stock}</td>
                  <td style={{ padding: '1rem' }}><span style={{ backgroundColor: sc.bg, color: sc.color, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{p.status}</span></td>
                  <td style={{ padding: '1rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} />{p.rating}</div></td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{p.orders}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}><Eye size={16} /></button>
                      <button style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}><Edit size={16} /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
