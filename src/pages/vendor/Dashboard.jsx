import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, Package, ShoppingCart, TrendingUp, Users } from 'lucide-react';

export default function VendorDashboard() {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '0.25rem', color: '#0f172a' }}>Dashboard Overview</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Welcome back! Here's what's happening with your store today.</p>
        </div>
        <Link to="/vendor/products" style={{ backgroundColor: 'var(--gold-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
          + Add New Product
        </Link>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: '3rem' }}>
         
         {[
           { title: "Total Sales", val: "₦1,450,000", trend: "+12.5%", isUp: true, icon: TrendingUp },
           { title: "Active Orders", val: "42", trend: "+5.1%", isUp: true, icon: ShoppingCart },
           { title: "Product Views", val: "12,840", trend: "+24%", isUp: true, icon: Users },
           { title: "Refund/Returns", val: "2", trend: "-1.5%", isUp: false, icon: Package },
         ].map((stat, i) => (
           <div key={i} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.title}</span>
                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: 'var(--radius-md)', color: 'var(--gold-primary)' }}><stat.icon size={20} /></div>
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.val}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem', color: stat.isUp ? 'var(--accent-emerald)' : '#ef4444', fontWeight: 600 }}>
                {stat.isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stat.trend} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>vs last month</span>
              </div>
           </div>
         ))}
      </div>

      <div className="flex-col lg:flex-row" style={{ display: 'flex', gap: '2rem' }}>
        
        {/* Chart Placeholder */}
        <div style={{ flex: 2, backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Revenue Analytics</h3>
          <div style={{ height: '300px', width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
             {/* Fake Bar Chart */}
             {[40, 60, 30, 80, 50, 90, 70, 100].map((h, i) => (
               <div key={i} style={{ flex: 1, backgroundColor: i === 7 ? 'var(--gold-primary)' : 'var(--bg-secondary)', height: `${h}%`, borderRadius: '4px 4px 0 0', position: 'relative' }} className="hover:bg-[var(--gold-secondary)] transition-colors"></div>
             ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
             <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Today</span>
          </div>
        </div>

        {/* Recent Orders List */}
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Recent Orders</h3>
            <Link to="/vendor/orders" style={{ fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: 600 }}>View All</Link>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { id: "#ORD-9452", item: "Dubai Silk Abaya", status: "Processing", color: "var(--gold-primary)", bg: "var(--bg-secondary)" },
              { id: "#ORD-9451", item: "Velvet Prayer Mat", status: "Shipped", color: "var(--accent-emerald)", bg: "#ecfdf5" },
              { id: "#ORD-9450", item: "Oud Premium Oil", status: "Delivered", color: "var(--text-muted)", bg: "#f1f5f9" },
            ].map((ord, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: i === 2 ? 'none' : '1px solid var(--border-color)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{ord.item}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{ord.id}</div>
                </div>
                <span style={{ backgroundColor: ord.bg, color: ord.color, padding: '4px 8px', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 600 }}>{ord.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
