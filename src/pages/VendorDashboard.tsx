import React, { useEffect, useRef } from 'react';
import { Users, CheckCircle2, Clock, DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import gsap from 'gsap';

const data = [
  { name: 'Jan', leads: 40, conversions: 24 },
  { name: 'Feb', leads: 30, conversions: 13 },
  { name: 'Mar', leads: 20, conversions: 98 },
  { name: 'Apr', leads: 27, conversions: 39 },
  { name: 'May', leads: 18, conversions: 48 },
  { name: 'Jun', leads: 23, conversions: 38 },
  { name: 'Jul', leads: 34, conversions: 43 },
];

const recentLeads = [
  { id: 1, name: 'Sarah Johnson', event: 'Wedding Reception', date: 'Oct 15, 2026', budget: '$15k - $20k', status: 'New' },
  { id: 2, name: 'Michael Chen', event: 'Corporate Gala', date: 'Nov 02, 2026', budget: '$25k - $30k', status: 'Contacted' },
  { id: 3, name: 'Emily Davis', event: 'Birthday Party', date: 'Sep 28, 2026', budget: '$5k - $8k', status: 'Quoted' },
  { id: 4, name: 'James Wilson', event: 'Anniversary', date: 'Dec 10, 2026', budget: '$10k - $15k', status: 'Converted' },
];

export function VendorDashboard() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
      
      // Number counter animation
      gsap.utils.toArray('.counter').forEach((el: any) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const obj = { val: 0 };
        
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            el.innerHTML = prefix + Math.floor(obj.val).toLocaleString();
          }
        });
      });
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Welcome back, Grand Hotel</h1>
          <p className="text-gray-600">Here's what's happening with your venue today.</p>
        </div>
        <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
          Last updated: Just now
        </div>
      </div>

      {/* Stat Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Leads Received', value: '1,248', target: 1248, icon: Users, color: 'text-party-blue', bg: 'bg-party-blue/10' },
          { title: 'Converted Leads', value: '342', target: 342, icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-500/10' },
          { title: 'Pending Leads', value: '56', target: 56, icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
          { title: 'Revenue Generated', value: '$124k', target: 124000, prefix: '$', icon: DollarSign, color: 'text-party-purple', bg: 'bg-party-purple/10' },
        ].map((stat, i) => (
          <div key={i} className="stat-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="flex items-center text-sm font-medium text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12%
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
            <div className="text-3xl font-display font-bold text-party-dark counter" data-target={stat.target} data-prefix={stat.prefix || ''}>
              0
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Lead Conversion Overview</h2>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-party-purple/20">
              <option>Last 7 months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00BFFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00BFFF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7B3CFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7B3CFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ stroke: '#e5e7eb', strokeWidth: 2, strokeDasharray: '4 4' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#00BFFF" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                <Area type="monotone" dataKey="conversions" stroke="#7B3CFF" strokeWidth={3} fillOpacity={1} fill="url(#colorConversions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Leads</h2>
            <button className="text-sm font-medium text-party-purple hover:text-party-dark transition-colors flex items-center">
              View All <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="p-4 rounded-xl border border-gray-100 hover:border-party-purple/30 hover:shadow-md transition-all group cursor-pointer bg-gray-50/50 hover:bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-party-dark group-hover:text-party-purple transition-colors">{lead.name}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                    lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                    lead.status === 'Quoted' ? 'bg-purple-100 text-purple-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {lead.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{lead.event}</div>
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {lead.date}</span>
                  <span className="flex items-center"><DollarSign className="w-3 h-3 mr-1" /> {lead.budget}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
