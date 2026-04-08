import React from 'react';
import { Search, Eye, Truck, CheckCircle } from 'lucide-react';

const orders = [
  { id: '#ORD-9452', customer: 'Aisha Mohammed', items: 'Dubai Silk Abaya × 1', total: 47500, status: 'Processing', date: 'Today, 10:45 AM' },
  { id: '#ORD-9451', customer: 'Fatimah Bello', items: 'Velvet Prayer Mat × 2', total: 30000, status: 'Shipped', date: 'Yesterday' },
  { id: '#ORD-9450', customer: 'Khadijah Usman', items: 'Oud Premium Oil × 1', total: 12000, status: 'Delivered', date: 'Apr 5, 2026' },
  { id: '#ORD-9449', customer: 'Maryam Adamu', items: 'Silk Hijab Set × 3', total: 25500, status: 'Delivered', date: 'Apr 4, 2026' },
  { id: '#ORD-9448', customer: 'Zainab Yusuf', items: 'Gold Kaftan × 1', total: 68000, status: 'Processing', date: 'Apr 4, 2026' },
];

export default function VendorOrders() {
  const statusIcon = (s) => s === 'Processing' ? '🔄' : s === 'Shipped' ? '🚚' : '✅';
  const statusColor = (s) => s === 'Processing' ? { bg: 'var(--gold-light)', color: 'var(--gold-primary)' } : s === 'Shipped' ? { bg: '#dbeafe', color: '#2563eb' } : { bg: '#ecfdf5', color: 'var(--accent-emerald)' };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Orders</h1>
          <p style={{ color: 'var(--text-secondary)' }}>{orders.length} total orders</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input placeholder="Search by order ID or customer..." className="input-field" style={{ paddingLeft: '2.5rem', width: '100%' }} />
        </div>
        <select className="input-field" style={{ width: '150px' }}>
          <option>All Status</option><option>Processing</option><option>Shipped</option><option>Delivered</option>
        </select>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ORDER</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CUSTOMER</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ITEMS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>TOTAL</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>DATE</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => {
              const sc = statusColor(o.status);
              return (
                <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--gold-primary)' }}>{o.id}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{o.customer}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{o.items}</td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>₦{o.total.toLocaleString()}</td>
                  <td style={{ padding: '1rem' }}><span style={{ backgroundColor: sc.bg, color: sc.color, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{o.status}</span></td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{o.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
