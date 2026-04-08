import React from 'react';
import { DollarSign, TrendingUp, ArrowUpRight, Calendar, Download } from 'lucide-react';

const payouts = [
  { id: 'PAY-2041', amount: 124500, status: 'Completed', date: 'Apr 4, 2026', method: 'Bank Transfer' },
  { id: 'PAY-2040', amount: 89000, status: 'Completed', date: 'Mar 28, 2026', method: 'Bank Transfer' },
  { id: 'PAY-2039', amount: 156200, status: 'Completed', date: 'Mar 21, 2026', method: 'Bank Transfer' },
  { id: 'PAY-2038', amount: 67800, status: 'Completed', date: 'Mar 14, 2026', method: 'Bank Transfer' },
];

export default function VendorEarnings() {
  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Earnings & Payouts</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Track your revenue and view payout history</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', border: '1px solid var(--border-color)', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          <Download size={18} /> Export
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Available Balance</span>
            <div style={{ backgroundColor: '#ecfdf5', padding: '0.4rem', borderRadius: 'var(--radius-sm)', color: 'var(--accent-emerald)' }}><DollarSign size={18} /></div>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>₦437,500</h2>
          <p style={{ color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: '0.5rem' }}><ArrowUpRight size={14} /> +18.2% from last month</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Pending Payout</span>
            <div style={{ backgroundColor: 'var(--gold-light)', padding: '0.4rem', borderRadius: 'var(--radius-sm)', color: 'var(--gold-primary)' }}><Calendar size={18} /></div>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>₦86,000</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Next payout: Friday, Apr 11</p>
        </div>
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Lifetime Earnings</span>
            <div style={{ backgroundColor: '#f1f5f9', padding: '0.4rem', borderRadius: 'var(--radius-sm)', color: '#0f172a' }}><TrendingUp size={18} /></div>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>₦1,450,000</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Since joining in Jan 2025</p>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Payout History</h3>
      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>PAYOUT ID</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>AMOUNT</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>DATE</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>METHOD</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((p, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{p.id}</td>
                <td style={{ padding: '1rem', fontWeight: 600 }}>₦{p.amount.toLocaleString()}</td>
                <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#ecfdf5', color: 'var(--accent-emerald)', padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{p.status}</span></td>
                <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{p.date}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{p.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
