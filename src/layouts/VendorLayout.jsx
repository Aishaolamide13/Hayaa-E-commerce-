import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut, MessageSquare, DollarSign } from 'lucide-react';

export default function VendorLayout() {
  const location = useLocation();
  const path = location.pathname;

  const getStyle = (route) => {
    return path.includes(route) 
      ? { backgroundColor: 'var(--gold-light)', color: 'var(--gold-primary)', fontWeight: '600' }
      : { color: 'var(--text-secondary)' };
  };

  const getMenuClass = () => {
    return 'flex items-center gap-3 p-3 rounded-lg transition-colors mb-2';
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f5f7' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: 'var(--bg-white)', borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
            HAYAA <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block' }}>Vendor</span>
          </div>
        </div>

        <nav style={{ padding: '1.5rem 1rem', flex: 1 }}>
          <Link to="/vendor/dashboard" className={getMenuClass()} style={{ ...getStyle('/vendor/dashboard'), textDecoration: 'none' }}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/vendor/products" className={getMenuClass()} style={{ ...getStyle('/vendor/products'), textDecoration: 'none' }}>
            <Package size={20} />
            <span>Products</span>
          </Link>
          <Link to="/vendor/orders" className={getMenuClass()} style={{ ...getStyle('/vendor/orders'), textDecoration: 'none' }}>
            <ShoppingCart size={20} />
            <span>Orders</span>
          </Link>
          <Link to="/vendor/earnings" className={getMenuClass()} style={{ ...getStyle('/vendor/earnings'), textDecoration: 'none' }}>
            <DollarSign size={20} />
            <span>Earnings</span>
          </Link>
          <Link to="/vendor/messages" className={getMenuClass()} style={{ ...getStyle('/vendor/messages'), textDecoration: 'none' }}>
            <MessageSquare size={20} />
            <span>Messages</span>
          </Link>
          <Link to="/vendor/settings" className={getMenuClass()} style={{ ...getStyle('/vendor/settings'), textDecoration: 'none' }}>
            <Settings size={20} />
            <span>Shop Settings</span>
          </Link>
        </nav>

        <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <button className="flex items-center gap-3 p-3 w-full rounded-lg text-red-500 hover:bg-red-50 transition-colors" style={{ color: '#ef4444' }}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Header */}
        <header style={{ height: '70px', backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 2rem' }}>
           <div className="flex items-center gap-4">
             <div style={{ textAlign: 'right' }}>
               <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Modest Elegance Shop</div>
               <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Verified Vendor</div>
             </div>
             <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', fontWeight: 'bold' }}>
                ME
             </div>
           </div>
        </header>

        {/* Content Area */}
        <main style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
