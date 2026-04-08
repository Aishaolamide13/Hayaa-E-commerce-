import React from 'react';
import { AlertTriangle, MessageSquare, Clock } from 'lucide-react';

const disputes = [
  { id: 'DSP-1024', buyer: 'Aisha M.', vendor: 'Elegance Store', reason: 'Item not as described', amount: '₦45,000', status: 'Open', date: 'Today' },
  { id: 'DSP-1023', buyer: 'Fatimah B.', vendor: 'Halal Scents', reason: 'Item not delivered', amount: '₦12,000', status: 'Under Review', date: 'Yesterday' },
  { id: 'DSP-1022', buyer: 'Zainab Y.', vendor: 'Sunnah Wear', reason: 'Wrong size received', amount: '₦32,000', status: 'Open', date: 'Apr 5' },
  { id: 'DSP-1021', buyer: 'Maryam A.', vendor: 'Home & Deen', reason: 'Damaged packaging', amount: '₦15,000', status: 'Resolved', date: 'Apr 3' },
  { id: 'DSP-1020', buyer: 'Khadijah U.', vendor: 'Deen Kids', reason: 'Missing items', amount: '₦22,000', status: 'Resolved', date: 'Apr 1' },
];

export default function AdminDisputes() {
  const statusColor = (s) => s === 'Open' ? { bg: '#fef2f2', color: '#ef4444' } : s === 'Under Review' ? { bg: '#fef3c7', color: '#d97706' } : { bg: '#ecfdf5', color: 'var(--accent-emerald)' };

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Dispute Resolution Center</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Manage buyer-vendor disputes with Escrow mediation</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fef2f2', padding: '0.75rem', borderRadius: '50%', color: '#ef4444' }}><AlertTriangle size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Open Disputes</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>2</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%', color: '#d97706' }}><Clock size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Under Review</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>1</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ecfdf5', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-emerald)' }}><MessageSquare size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Resolved (30d)</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>11</h3></div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ID</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>BUYER</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>VENDOR</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>REASON</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>AMOUNT</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((d, i) => {
              const sc = statusColor(d.status);
              return (
                <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{d.id}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{d.buyer}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{d.vendor}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{d.reason}</td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>{d.amount}</td>
                  <td style={{ padding: '1rem' }}><span style={{ backgroundColor: sc.bg, color: sc.color, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{d.status}</span></td>
                  <td style={{ padding: '1rem' }}>
                    <button style={{ backgroundColor: 'black', color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', fontWeight: 600 }}>
                      {d.status === 'Resolved' ? 'View' : 'Investigate'}
                    </button>
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
