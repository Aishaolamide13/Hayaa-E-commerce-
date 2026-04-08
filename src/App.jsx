import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './index.css';

// Layouts
import CustomerLayout from './layouts/CustomerLayout';
import VendorLayout from './layouts/VendorLayout';
import AdminLayout from './layouts/AdminLayout';
import AuthLayout from './layouts/AuthLayout';

// Customer Pages
import Home from './pages/customer/Home';
import ProductListing from './pages/customer/ProductListing';
import ProductDetail from './pages/customer/ProductDetail';
import Cart from './pages/customer/Cart';
import Checkout from './pages/customer/Checkout';
import Wishlist from './pages/customer/Wishlist';
import Deals from './pages/customer/Deals';
import InfoPage from './pages/customer/InfoPage';

// Auth Pages
import Login from './pages/auth/Login';

// Vendor Pages
import VendorDashboard from './pages/vendor/Dashboard';
import VendorProducts from './pages/vendor/Products';
import VendorOrders from './pages/vendor/Orders';
import VendorEarnings from './pages/vendor/Earnings';
import VendorMessages from './pages/vendor/Messages';
import VendorSettings from './pages/vendor/Settings';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminVendors from './pages/admin/Vendors';
import AdminModeration from './pages/admin/Moderation';
import AdminDisputes from './pages/admin/Disputes';
import AdminCampaigns from './pages/admin/Campaigns';

import { CartProvider } from './contexts/CartContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
      <Routes>
        
        {/* Customer Portal */}
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug" element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="deals" element={<Deals />} />
          {/* Info Pages */}
          <Route path="support" element={<InfoPage />} />
          <Route path="faq" element={<InfoPage />} />
          <Route path="returns" element={<InfoPage />} />
          <Route path="shipping" element={<InfoPage />} />
          <Route path="ethics" element={<InfoPage />} />
          <Route path="vendor-terms" element={<InfoPage />} />
        </Route>

        {/* Auth Portal */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Login />} />
        </Route>

        {/* Vendor Portal */}
        <Route path="/vendor" element={<VendorLayout />}>
          <Route index element={<Navigate to="/vendor/dashboard" replace />} />
          <Route path="dashboard" element={<VendorDashboard />} />
          <Route path="products" element={<VendorProducts />} />
          <Route path="orders" element={<VendorOrders />} />
          <Route path="earnings" element={<VendorEarnings />} />
          <Route path="messages" element={<VendorMessages />} />
          <Route path="settings" element={<VendorSettings />} />
        </Route>

        {/* Admin Portal */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="vendors" element={<AdminVendors />} />
          <Route path="moderation" element={<AdminModeration />} />
          <Route path="disputes" element={<AdminDisputes />} />
          <Route path="campaigns" element={<AdminCampaigns />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
