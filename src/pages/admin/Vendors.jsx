import React from 'react';
import { Search, ShieldCheck, Star, Eye, Ban } from 'lucide-react';

const vendors = [
  { name: 'Elegance Store', category: "Women's Fashion", products: 24, revenue: '₦1.45M', rating: 4.8, status: 'Verified', joined: 'Jan 2025' },
  { name: 'Halal Scents', category: 'Perfumes & Oil', products: 18, revenue: '₦890K', rating: 4.6, status: 'Verified', joined: 'Mar 2025' },
  { name: 'Sunnah Wear', category: "Men's Wear", products: 31, revenue: '₦2.1M', rating: 4.9, status: 'Verified', joined: 'Dec 2024' },
  { name: 'Home & Deen', category: 'Home Decor', products: 45, revenue: '₦1.8M', rating: 4.7, status: 'Verified', joined: 'Feb 2025' },
  { name: 'Deen Kids', category: 'Children', products: 12, revenue: '₦420K', rating: 4.5, status: 'Under Review', joined: 'Apr 2026' },
  { name: 'Halal Glow', category: 'Skincare', products: 22, revenue: '₦670K', rating: 4.4, status: 'Verified', joined: 'Jun 2025' },
];

export default function AdminVendors() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Vendor Directory</h1>
          <p style={{ color: 'var(--text-secondary)' }}>{vendors.length} registered vendors</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input placeholder="Search vendors..." className="input-field" style={{ paddingLeft: '2.5rem', width: '100%' }} />
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>VENDOR</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CATEGORY</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PRODUCTS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>REVENUE</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>RATING</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div><div style={{ fontWeight: 600 }}>{v.name}</div><div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Since {v.joined}</div></div>
                </td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{v.category}</td>
                <td style={{ padding: '1rem' }}>{v.products}</td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>{v.revenue}</td>
                <td style={{ padding: '1rem' }}><div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} fill="var(--gold-primary)" style={{ color: 'var(--gold-primary)' }} /> {v.rating}</div></td>
                <td style={{ padding: '1rem' }}><span style={{ backgroundColor: v.status === 'Verified' ? '#ecfdf5' : '#fef3c7', color: v.status === 'Verified' ? 'var(--accent-emerald)' : '#d97706', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{v.status}</span></td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}><Eye size={16} /></button>
                    <button style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}><Ban size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
