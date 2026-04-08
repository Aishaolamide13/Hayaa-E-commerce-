import React from 'react';
import { Flag, Plus, Eye, Calendar, TrendingUp } from 'lucide-react';

const campaigns = [
  { name: 'Ramadan 2026 Sale', type: 'Site-wide Banner', status: 'Active', start: 'Mar 1', end: 'Apr 15', impressions: '245K', clicks: '18.2K' },
  { name: 'Eid Collection Launch', type: 'Homepage Hero', status: 'Scheduled', start: 'Apr 10', end: 'Apr 25', impressions: '—', clicks: '—' },
  { name: 'New Vendor Spotlight', type: 'Category Banner', status: 'Active', start: 'Apr 1', end: 'Apr 30', impressions: '89K', clicks: '6.1K' },
  { name: 'Flash Friday Deals', type: 'Push Notification', status: 'Completed', start: 'Mar 28', end: 'Mar 28', impressions: '312K', clicks: '42.5K' },
];

export default function AdminCampaigns() {
  const statusColor = (s) => s === 'Active' ? { bg: '#ecfdf5', color: 'var(--accent-emerald)' } : s === 'Scheduled' ? { bg: '#dbeafe', color: '#2563eb' } : { bg: '#f1f5f9', color: '#64748b' };

  return (
    <div className="animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem' }}>Campaign Manager</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Create and manage marketing campaigns</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'black', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          <Plus size={18} /> New Campaign
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#ecfdf5', padding: '0.75rem', borderRadius: '50%', color: 'var(--accent-emerald)' }}><Flag size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Active Campaigns</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>2</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#f1f5f9', padding: '0.75rem', borderRadius: '50%', color: '#0f172a' }}><TrendingUp size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Total Impressions</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>646K</h3></div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: 'var(--gold-light)', padding: '0.75rem', borderRadius: '50%', color: 'var(--gold-primary)' }}><Calendar size={24} /></div>
          <div><p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Avg Click Rate</p><h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>8.4%</h3></div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CAMPAIGN</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>TYPE</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>STATUS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>DURATION</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>IMPRESSIONS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CLICKS</th>
              <th style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c, i) => {
              const sc = statusColor(c.status);
              return (
                <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>{c.name}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c.type}</td>
                  <td style={{ padding: '1rem' }}><span style={{ backgroundColor: sc.bg, color: sc.color, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>{c.status}</span></td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{c.start} — {c.end}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{c.impressions}</td>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{c.clicks}</td>
                  <td style={{ padding: '1rem' }}>
                    <button style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)', border: '1px solid #e2e8f0' }}><Eye size={16} /></button>
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
