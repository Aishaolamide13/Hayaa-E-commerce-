import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * A wrapper component for protecting routes based on roles.
 * Usage:
 * <Route path="/admin" element={<ProtectedRoute role="admin" />}>
 *   <Route index element={<AdminDashboard />} />
 * </Route>
 */
export default function ProtectedRoute({ role, children }) {
  // Mock authentication check. In a real app, this would use a context or Redux store.
  const isAuthenticated = false; // By default, locked down
  const userRole = null;

  // For purpose of demonstration, we will always allow access if the user bypasses via a local storage flag.
  // In a real app, replace this with actual token validation.
  const isDevBypass = localStorage.getItem('demo_bypass_auth') === 'true';

  if (!isAuthenticated && !isDevBypass) {
    // Optional: Pass the intended destination so they can be redirected back after login
    return <Navigate to="/auth/login" replace />;
  }

  if (userRole && userRole !== role && !isDevBypass) {
    return <Navigate to="/" replace />;
  }

  // Render children if passed, otherwise outlet (for nested routing)
  return children ? children : <Outlet />;
}
