import React, { useEffect, useRef } from 'react';
import { Users, Building2, CreditCard, DollarSign, TrendingUp, MoreVertical, Search, Filter } from 'lucide-react';
import { Button } from '../components/Button';
import gsap from 'gsap';

const vendors = [
  { id: 1, name: 'Grand Hotel & Spa', type: 'Hotel', city: 'New York', plan: 'Premium', status: 'Active' },
  { id: 2, name: 'Sunset Banquet Hall', type: 'Banquet', city: 'Los Angeles', plan: 'Basic', status: 'Active' },
  { id: 3, name: 'Lakeside Resort', type: 'Resort', city: 'Chicago', plan: 'Elite', status: 'Pending' },
  { id: 4, name: 'The Glasshouse', type: 'Venue', city: 'Miami', plan: 'Premium', status: 'Active' },
];

const recentPayments = [
  { id: 'INV-001', vendor: 'Grand Hotel & Spa', amount: '$99.00', date: 'Oct 12, 2026', status: 'Paid' },
  { id: 'INV-002', vendor: 'Sunset Banquet Hall', amount: '$49.00', date: 'Oct 11, 2026', status: 'Paid' },
  { id: 'INV-003', vendor: 'Lakeside Resort', amount: '$199.00', date: 'Oct 10, 2026', status: 'Failed' },
  { id: 'INV-004', vendor: 'The Glasshouse', amount: '$99.00', date: 'Oct 09, 2026', status: 'Paid' },
];

export function AdminDashboard() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.admin-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Admin Overview</h1>
          <p className="text-gray-600">Monitor platform growth, vendors, and revenue.</p>
        </div>
        <Button variant="gradient">
          <TrendingUp className="w-4 h-4 mr-2" /> Generate Report
        </Button>
      </div>

      {/* Stat Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Vendors', value: '452', icon: Building2, color: 'text-party-blue', bg: 'bg-party-blue/10' },
          { title: 'Total Leads Generated', value: '12,480', icon: Users, color: 'text-party-pink', bg: 'bg-party-pink/10' },
          { title: 'Active Subscriptions', value: '385', icon: CreditCard, color: 'text-green-500', bg: 'bg-green-500/10' },
          { title: 'Monthly Recurring Revenue', value: '$42,500', icon: DollarSign, color: 'text-party-purple', bg: 'bg-party-purple/10' },
        ].map((stat, i) => (
          <div key={i} className="admin-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8%
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
            <div className="text-3xl font-display font-bold text-party-dark">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Vendors Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-xl font-bold">Recent Vendors</h2>
            <div className="flex gap-2">
              <button className="p-2 text-gray-400 hover:text-party-dark bg-white rounded-lg border border-gray-200 shadow-sm transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-party-dark bg-white rounded-lg border border-gray-200 shadow-sm transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Vendor Name</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Plan</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {vendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-party-dark">{vendor.name}</td>
                    <td className="px-6 py-4 text-gray-600">{vendor.type}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        vendor.plan === 'Elite' ? 'bg-party-purple/10 text-party-purple' :
                        vendor.plan === 'Premium' ? 'bg-party-blue/10 text-party-blue' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {vendor.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        vendor.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-party-dark transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 bg-gray-50/50 text-center">
            <button className="text-sm font-medium text-party-purple hover:underline">View All Vendors</button>
          </div>
        </div>

        {/* Payments Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-xl font-bold">Recent Payments</h2>
            <button className="text-sm font-medium text-party-purple hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Vendor</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{payment.id}</td>
                    <td className="px-6 py-4 text-gray-600">{payment.vendor}</td>
                    <td className="px-6 py-4 font-bold text-party-dark">{payment.amount}</td>
                    <td className="px-6 py-4 text-gray-500">{payment.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
