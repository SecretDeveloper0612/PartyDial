/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/Layout';
import { Landing } from './pages/Landing';
import { MarketplaceHome } from './pages/MarketplaceHome';
import { VenueSearch } from './pages/VenueSearch';
import { PostRequirement } from './pages/PostRequirement';
import { PublicVenueProfile } from './pages/PublicVenueProfile';
import { VendorRegistration } from './pages/VendorRegistration';
import { VendorDashboard } from './pages/VendorDashboard';
import { LeadsManagement } from './pages/LeadsManagement';
import { QuotationGenerator } from './pages/QuotationGenerator';
import { VenueProfile } from './pages/VenueProfile';
import { Analytics } from './pages/Analytics';
import { Subscription } from './pages/Subscription';
import { AdminDashboard } from './pages/AdminDashboard';
import { Messages } from './pages/Messages';
import { Settings } from './pages/Settings';
import { VendorsManagement } from './pages/VendorsManagement';
import { Payments } from './pages/Payments';
import { MobileAppPreview } from './pages/MobileAppPreview';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Marketplace Routes */}
        <Route path="/" element={<MarketplaceHome />} />
        <Route path="/search" element={<VenueSearch />} />
        <Route path="/venue/:id" element={<PublicVenueProfile />} />
        <Route path="/post-requirement" element={<PostRequirement />} />
        
        {/* Vendor Landing & Registration */}
        <Route path="/vendors" element={<Landing />} />
        <Route path="/register" element={<VendorRegistration />} />
        
        {/* Mobile App Preview */}
        <Route path="/mobile-app" element={<MobileAppPreview />} />
        
        {/* Vendor Routes */}
        <Route path="/vendor" element={<DashboardLayout role="vendor" />}>
          <Route index element={<VendorDashboard />} />
          <Route path="leads" element={<LeadsManagement />} />
          <Route path="venue" element={<VenueProfile />} />
          <Route path="quote" element={<QuotationGenerator />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/vendor" replace />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="leads" element={<LeadsManagement />} />
          <Route path="vendors" element={<VendorsManagement />} />
          <Route path="payments" element={<Payments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
