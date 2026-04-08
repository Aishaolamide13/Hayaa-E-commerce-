import React from 'react';
import { Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

const queue = [
  { vendor: 'Modesty House', category: "Men's Wear", type: 'New Vendor', submitted: 'Today, 10:45 AM', products: 8 },
  { vendor: 'Halal Cosmetics', category: 'Skincare', type: 'New Vendor', submitted: 'Yesterday', products: 15 },
  { vendor: 'Kids Sunnah', category: 'Children', type: 'New Vendor', submitted: 'Apr 6, 2026', products: 6 },
  { vendor: 'Elegance Store', category: "Women's Fashion", type: 'Product Update', submitted: 'Today, 9:30 AM', products: 3 },
  { vendor: 'Sunnah Wear', category: "Men's Wear", type: 'Product Update', submitted: 'Yesterday', products: 1 },
];

export default function AdminModeration() {
  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Moderation Queue</h1>
        <p style={{ color: 'var(--text-secondary)' }}>{queue.length} items pending review</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%', color: '#d97706' }}><Clock size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Pending</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{queue.length}</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ecfdf5', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-emerald)' }}><CheckCircle size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Approved Today</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>12</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fef2f2', padding: '0.75rem', borderRadius: '50%', color: '#ef4444' }}><XCircle size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Rejected Today</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>3</h3></div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>VENDOR</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CATEGORY</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>TYPE</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ITEMS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>SUBMITTED</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((q, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{q.vendor}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{q.category}</td>
                <td style={{ padding: '1rem' }}><span style={{ backgroundColor: q.type === 'New Vendor' ? '#dbeafe' : '#f1f5f9', color: q.type === 'New Vendor' ? '#2563eb' : '#64748b', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{q.type}</span></td>
                <td style={{ padding: '1rem' }}>{q.products} product{q.products > 1 ? 's' : ''}</td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{q.submitted}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ backgroundColor: 'black', color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', fontWeight: 600 }}>Approve</button>
                    <button style={{ backgroundColor: '#f1f5f9', color: '#0f172a', padding: '0.4rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', fontWeight: 600 }}>Reject</button>
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
