import React from 'react';
import { DollarSign, Eye, AlertTriangle, UserCheck, ShieldCheck } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem', color: '#0f172a' }}>Platform Analytics</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Centralized control for Shop With Hayaa marketplace.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ backgroundColor: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>Export Report</button>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '2.5rem' }}>
         <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
             <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '50%', color: '#0f172a' }}><DollarSign size={24} /></div>
               <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Total GMV (Month)</p>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>₦42,500,000</h3>
               </div>
             </div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
             <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ backgroundColor: '#ecfdf5', padding: '1rem', borderRadius: '50%', color: 'var(--accent-emerald)' }}><ShieldCheck size={24} /></div>
               <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Verified Vendors</p>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>342</h3>
               </div>
             </div>
         </div>
         <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
             <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '50%', color: '#ef4444' }}><AlertTriangle size={24} /></div>
               <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Active Disputes</p>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>14</h3>
               </div>
             </div>
         </div>
      </div>

      {/* Moderation Queue */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Pending Vendor Moderation</h3>
      <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
               <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>BUSINESS NAME</th>
               <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CATEGORY</th>
               <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>DATE APPLIED</th>
               <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {[
              { n: "Modesty House", c: "Men's Wear", d: "Today, 10:45 AM" },
              { n: "Halal Cosmetics", c: "Skincare", d: "Yesterday" },
              { n: "Kids Sunnah", c: "Children", d: "Oct 12, 2026" },
            ].map((v, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>{v.n}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)' }}>{v.c}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{v.d}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ backgroundColor: 'black', color: 'white', padding: '0.4rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', fontWeight: 600 }}>Review</button>
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
