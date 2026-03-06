import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import gsap from 'gsap';

const leadsData = [
  { name: 'Jan', leads: 40 },
  { name: 'Feb', leads: 30 },
  { name: 'Mar', leads: 20 },
  { name: 'Apr', leads: 27 },
  { name: 'May', leads: 18 },
  { name: 'Jun', leads: 23 },
  { name: 'Jul', leads: 34 },
];

const conversionData = [
  { name: 'Jan', rate: 12 },
  { name: 'Feb', rate: 15 },
  { name: 'Mar', rate: 22 },
  { name: 'Apr', rate: 18 },
  { name: 'May', rate: 25 },
  { name: 'Jun', rate: 30 },
  { name: 'Jul', rate: 28 },
];

const sourceData = [
  { name: 'Organic Search', value: 400 },
  { name: 'Social Media', value: 300 },
  { name: 'Referrals', value: 300 },
  { name: 'Direct Traffic', value: 200 },
];

const COLORS = ['#FF2D8D', '#7B3CFF', '#00BFFF', '#0F172A'];

export function Analytics() {
  const chartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.chart-card', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, chartsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your venue's performance and lead generation metrics.</p>
        </div>
        <select className="bg-white border border-gray-200 text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-party-purple/20 shadow-sm">
          <option>Last 30 Days</option>
          <option>This Quarter</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Leads', value: '1,248', icon: Users, color: 'text-party-blue', bg: 'bg-party-blue/10' },
          { title: 'Conversion Rate', value: '24.8%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
          { title: 'Revenue Estimate', value: '$124k', icon: DollarSign, color: 'text-party-purple', bg: 'bg-party-purple/10' },
          { title: 'Events Booked', value: '342', icon: Calendar, color: 'text-party-pink', bg: 'bg-party-pink/10' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-2xl ${stat.bg}`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
              <div className="text-2xl font-display font-bold text-party-dark">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div ref={chartsRef} className="grid lg:grid-cols-2 gap-6">
        {/* Leads per Month */}
        <div className="chart-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Leads Generated</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f9fafb' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="leads" fill="#00BFFF" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="chart-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Conversion Rate Trend (%)</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                />
                <Line type="monotone" dataKey="rate" stroke="#FF2D8D" strokeWidth={3} dot={{ r: 4, fill: '#FF2D8D', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="chart-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">Lead Sources Breakdown</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="h-[300px] w-full md:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {sourceData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                    <span className="font-medium text-gray-700">{entry.name}</span>
                  </div>
                  <span className="font-bold text-party-dark">{entry.value} Leads</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
