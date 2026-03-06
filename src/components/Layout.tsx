import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  CreditCard, 
  Settings,
  Search,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from './Button';

const VENDOR_LINKS = [
  { name: 'Dashboard', href: '/vendor', icon: LayoutDashboard },
  { name: 'Leads', href: '/vendor/leads', icon: Users },
  { name: 'My Venue', href: '/vendor/venue', icon: Building2 },
  { name: 'Quotation Generator', href: '/vendor/quote', icon: FileText },
  { name: 'Analytics', href: '/vendor/analytics', icon: BarChart3 },
  { name: 'Messages', href: '/vendor/messages', icon: MessageSquare },
  { name: 'Subscription', href: '/vendor/subscription', icon: CreditCard },
  { name: 'Settings', href: '/vendor/settings', icon: Settings },
];

const ADMIN_LINKS = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'Vendors', href: '/admin/vendors', icon: Building2 },
  { name: 'Payments', href: '/admin/payments', icon: CreditCard },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export function DashboardLayout({ role = 'vendor' }: { role?: 'vendor' | 'admin' }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const links = role === 'admin' ? ADMIN_LINKS : VENDOR_LINKS;

  return (
    <div className="min-h-screen bg-party-light flex font-sans text-party-dark">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-50 transition-transform duration-300 lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <Link to="/" className="text-2xl font-display font-bold text-gradient">
            PartyDial
          </Link>
          <button className="lg:hidden text-gray-500 hover:text-party-dark" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  'flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors',
                  isActive 
                    ? 'bg-party-purple/10 text-party-purple' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-party-dark'
                )}
              >
                <link.icon className={cn("mr-3 h-5 w-5", isActive ? "text-party-purple" : "text-gray-400")} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-colors">
            <LogOut className="mr-3 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen w-full">
        {/* Top Navbar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 px-4 md:px-8 flex items-center justify-between gap-4">
          <button className="lg:hidden text-gray-500 hover:text-party-dark" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search leads, venues..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full text-sm focus:ring-2 focus:ring-party-purple/20 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3 md:space-x-4 ml-auto">
            <button className="relative p-2 text-gray-400 hover:text-party-dark transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-party-pink rounded-full"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-party p-[2px] cursor-pointer">
              <div className="h-full w-full rounded-full border-2 border-white bg-white overflow-hidden">
                <img src="https://picsum.photos/seed/avatar/100/100" alt="Profile" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
