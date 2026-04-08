import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck, ShieldAlert, Flag, Bell } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  const path = location.pathname;

  const getStyle = (route) => {
    return path.includes(route) 
      ? { backgroundColor: 'var(--text-primary)', color: 'white', fontWeight: '600' }
      : { color: 'var(--text-secondary)' };
  };

  const getMenuClass = () => {
    return 'flex items-center gap-3 p-3 rounded-lg transition-colors mb-2';
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#e2e8f0' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', backgroundColor: '#0f172a', borderRight: '1px solid #1e293b', display: 'flex', flexDirection: 'column', color: 'white' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #1e293b' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
            HAYAA <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', display: 'block' }}>Admin Control</span>
          </div>
        </div>

        <nav style={{ padding: '1.5rem 1rem', flex: 1 }}>
          <Link to="/admin/dashboard" className={getMenuClass()} style={{ ...getStyle('/admin/dashboard'), textDecoration: 'none' }}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>
          <Link to="/admin/vendors" className={getMenuClass()} style={{ ...getStyle('/admin/vendors'), textDecoration: 'none' }}>
            <Users size={20} />
            <span>Vendors</span>
          </Link>
          <Link to="/admin/moderation" className={getMenuClass()} style={{ ...getStyle('/admin/moderation'), textDecoration: 'none' }}>
            <UserCheck size={20} />
            <span>Moderation Queue</span>
          </Link>
          <Link to="/admin/disputes" className={getMenuClass()} style={{ ...getStyle('/admin/disputes'), textDecoration: 'none' }}>
            <ShieldAlert size={20} />
            <span>Disputes</span>
          </Link>
          <Link to="/admin/campaigns" className={getMenuClass()} style={{ ...getStyle('/admin/campaigns'), textDecoration: 'none' }}>
            <Flag size={20} />
            <span>Campaigns</span>
          </Link>
        </nav>
      </aside>

      {/* Main Container */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Header */}
        <header style={{ height: '70px', backgroundColor: 'white', borderBottom: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 2rem' }}>
           <div className="flex items-center gap-6">
             <button style={{ color: 'var(--text-muted)', position: 'relative' }}>
                <Bell size={24} />
                <span style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', backgroundColor: 'red', borderRadius: '50%' }}></span>
             </button>
             <div className="flex items-center gap-3">
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                  AD
               </div>
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
