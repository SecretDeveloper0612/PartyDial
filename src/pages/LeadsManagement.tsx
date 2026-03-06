import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign, Users, Eye, MessageSquare, FileText, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import gsap from 'gsap';

const leadsData = [
  { id: 1, name: 'Sarah Johnson', event: 'Wedding Reception', guestCount: '250-300', budget: '$15k - $20k', location: 'Downtown Area', date: 'Oct 15, 2026', status: 'New' },
  { id: 2, name: 'Michael Chen', event: 'Corporate Gala', guestCount: '500+', budget: '$25k - $30k', location: 'City Center', date: 'Nov 02, 2026', status: 'Contacted' },
  { id: 3, name: 'Emily Davis', event: 'Birthday Party', guestCount: '50-100', budget: '$5k - $8k', location: 'Suburbs', date: 'Sep 28, 2026', status: 'Quoted' },
  { id: 4, name: 'James Wilson', event: 'Anniversary', guestCount: '100-150', budget: '$10k - $15k', location: 'Downtown Area', date: 'Dec 10, 2026', status: 'Converted' },
  { id: 5, name: 'Amanda Smith', event: 'Kitty Party', guestCount: '20-50', budget: '$1k - $3k', location: 'North Side', date: 'Aug 12, 2026', status: 'New' },
  { id: 6, name: 'Robert Taylor', event: 'Product Launch', guestCount: '300-400', budget: '$20k - $25k', location: 'Business District', date: 'Jan 20, 2027', status: 'Contacted' },
];

export function LeadsManagement() {
  const [filterOpen, setFilterOpen] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lead-card', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Leads Management</h1>
          <p className="text-gray-600">Manage, filter, and respond to your event leads.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all text-sm"
            />
          </div>
          <Button variant="outline" className="bg-white" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
      </div>

      {/* Filters Panel */}
      {filterOpen && (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Event Type</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-party-purple">
              <option>All Types</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Birthday</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">City</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-party-purple">
              <option>All Cities</option>
              <option>Downtown Area</option>
              <option>City Center</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Date</label>
            <input type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-party-purple" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-party-purple">
              <option>Any Budget</option>
              <option>&lt; $5k</option>
              <option>$5k - $15k</option>
              <option>&gt; $15k</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Status</label>
            <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-party-purple">
              <option>All Statuses</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Quoted</option>
              <option>Converted</option>
            </select>
          </div>
        </div>
      )}

      {/* Leads Grid */}
      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {leadsData.map((lead) => (
          <div key={lead.id} className="lead-card bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-party-dark group-hover:text-party-purple transition-colors mb-1">{lead.name}</h3>
                  <span className="text-sm font-medium text-gray-500">{lead.event}</span>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                  lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                  lead.status === 'Quoted' ? 'bg-purple-100 text-purple-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {lead.status}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 text-gray-400" />
                  {lead.guestCount} Guests
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                  {lead.budget}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {lead.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {lead.date}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 bg-white">
                <Eye className="w-4 h-4 mr-1.5" /> View
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-white">
                <MessageSquare className="w-4 h-4 mr-1.5" /> Contact
              </Button>
              <Button variant="gradient" size="sm" className="flex-1">
                <FileText className="w-4 h-4 mr-1.5" /> Quote
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
