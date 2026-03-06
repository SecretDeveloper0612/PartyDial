import React from 'react';
import { Download, Search, Filter, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Button } from '../components/Button';

const payments = [
  { id: 'INV-001', vendor: 'Grand Hotel & Spa', plan: 'Premium', amount: '$99.00', date: 'Oct 12, 2026', status: 'Paid' },
  { id: 'INV-002', vendor: 'Sunset Banquet Hall', plan: 'Basic', amount: '$49.00', date: 'Oct 11, 2026', status: 'Paid' },
  { id: 'INV-003', vendor: 'Lakeside Resort', plan: 'Elite', amount: '$199.00', date: 'Oct 10, 2026', status: 'Failed' },
  { id: 'INV-004', vendor: 'The Glasshouse', plan: 'Premium', amount: '$99.00', date: 'Oct 09, 2026', status: 'Paid' },
  { id: 'INV-005', vendor: 'Royal Palace', plan: 'Elite', amount: '$199.00', date: 'Oct 08, 2026', status: 'Pending' },
  { id: 'INV-006', vendor: 'Oceanview Resort', plan: 'Premium', amount: '$99.00', date: 'Oct 07, 2026', status: 'Paid' },
];

export function Payments() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Payments & Invoices</h1>
          <p className="text-gray-600">Track vendor subscription payments and revenue.</p>
        </div>
        <Button variant="outline" className="bg-white">
          <Download className="w-4 h-4 mr-2" /> Export CSV
        </Button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Filters */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by invoice ID or vendor..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-party-purple transition-all"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <select className="bg-white border border-gray-200 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-party-purple transition-all flex-1 md:flex-none">
              <option>All Statuses</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
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
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">Vendor</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-party-purple">{payment.id}</td>
                  <td className="px-6 py-4 font-bold text-party-dark">{payment.vendor}</td>
                  <td className="px-6 py-4 text-gray-600">{payment.plan}</td>
                  <td className="px-6 py-4 font-medium">{payment.amount}</td>
                  <td className="px-6 py-4 text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center w-max ${
                      payment.status === 'Paid' ? 'bg-green-100 text-green-700' :
                      payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {payment.status === 'Paid' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {payment.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                      {payment.status === 'Failed' && <XCircle className="w-3 h-3 mr-1" />}
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-party-purple hover:text-party-dark font-medium transition-colors opacity-0 group-hover:opacity-100">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
