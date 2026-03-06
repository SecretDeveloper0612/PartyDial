import React, { useState } from 'react';
import { Search, Filter, MoreVertical, CheckCircle2, XCircle, Edit, Trash2, Clock } from 'lucide-react';
import { Button } from '../components/Button';

const vendorsData = [
  { id: 1, name: 'Grand Hotel & Spa', type: 'Hotel', city: 'New York', plan: 'Premium', status: 'Active', leads: 145, revenue: '$14,500' },
  { id: 2, name: 'Sunset Banquet Hall', type: 'Banquet', city: 'Los Angeles', plan: 'Basic', status: 'Active', leads: 89, revenue: '$4,361' },
  { id: 3, name: 'Lakeside Resort', type: 'Resort', city: 'Chicago', plan: 'Elite', status: 'Pending', leads: 0, revenue: '$0' },
  { id: 4, name: 'The Glasshouse', type: 'Venue', city: 'Miami', plan: 'Premium', status: 'Suspended', leads: 234, revenue: '$23,166' },
  { id: 5, name: 'Royal Palace', type: 'Banquet', city: 'Las Vegas', plan: 'Elite', status: 'Active', leads: 512, revenue: '$101,888' },
  { id: 6, name: 'Oceanview Resort', type: 'Resort', city: 'Malibu', plan: 'Premium', status: 'Active', leads: 120, revenue: '$11,880' },
];

export function VendorsManagement() {
  const [vendors, setVendors] = useState(vendorsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (id: number, newStatus: string) => {
    setVendors(vendors.map(v => v.id === id ? { ...v, status: newStatus } : v));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Vendor Management</h1>
          <p className="text-gray-600">Manage vendor accounts, approvals, and subscriptions.</p>
        </div>
        <Button variant="gradient">Add New Vendor</Button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by vendor name or city..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-party-purple transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="bg-white border border-gray-200 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-party-purple transition-all flex-1 md:flex-none">
              <option value="">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
            <select className="bg-white border border-gray-200 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-party-purple transition-all flex-1 md:flex-none">
              <option value="">All Plans</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Elite">Elite</option>
            </select>
            <button className="p-2 text-gray-500 hover:text-party-dark bg-white rounded-xl border border-gray-200 shadow-sm transition-colors flex-shrink-0">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Business Name</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Plan Type</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vendors.filter(v => v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.city.toLowerCase().includes(searchTerm.toLowerCase())).map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-party-dark">{vendor.name}</div>
                    <div className="text-xs text-gray-500">{vendor.type}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{vendor.city}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      vendor.plan === 'Elite' ? 'bg-party-purple/10 text-party-purple' :
                      vendor.plan === 'Premium' ? 'bg-party-blue/10 text-party-blue' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {vendor.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{vendor.leads} Leads</div>
                    <div className="text-xs text-gray-500">{vendor.revenue} Rev.</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center w-max ${
                      vendor.status === 'Active' ? 'bg-green-100 text-green-700' :
                      vendor.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {vendor.status === 'Active' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {vendor.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                      {vendor.status === 'Suspended' && <XCircle className="w-3 h-3 mr-1" />}
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {vendor.status === 'Pending' && (
                        <button onClick={() => handleStatusChange(vendor.id, 'Active')} className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      )}
                      {vendor.status === 'Active' && (
                        <button onClick={() => handleStatusChange(vendor.id, 'Suspended')} className="p-1.5 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors" title="Suspend">
                          <XCircle className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
          <span className="text-sm text-gray-500">Showing 1 to {vendors.length} of {vendors.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-white transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm bg-party-purple text-white transition-colors">1</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
