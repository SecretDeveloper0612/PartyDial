import React from 'react';
import { Button } from '../components/Button';
import { User, Bell, Lock, Globe, CreditCard } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and venue details.</p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Settings Navigation */}
        <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 p-6 space-y-2">
          {[
            { name: 'Profile', icon: User, active: true },
            { name: 'Notifications', icon: Bell, active: false },
            { name: 'Security', icon: Lock, active: false },
            { name: 'Billing', icon: CreditCard, active: false },
            { name: 'Integrations', icon: Globe, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                item.active ? 'bg-white text-party-purple shadow-sm border border-gray-200' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`w-5 h-5 mr-3 ${item.active ? 'text-party-purple' : 'text-gray-400'}`} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                <img src="https://picsum.photos/seed/avatar/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <Button variant="outline" className="mb-2">Change Avatar</Button>
                <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" defaultValue="Jenkins" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" defaultValue="sarah@grandplaza.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Venue Name</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" defaultValue="The Grand Plaza" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Bio / Description</label>
                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-party-purple focus:border-transparent transition-all" rows={4} defaultValue="Experience luxury and elegance at The Grand Plaza. Our stunning ballrooms and lush outdoor gardens provide the perfect backdrop for your dream wedding, corporate gala, or private celebration."></textarea>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button variant="gradient">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
