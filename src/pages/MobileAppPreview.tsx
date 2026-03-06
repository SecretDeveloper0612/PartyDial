import React from 'react';
import { Users, CheckCircle2, MessageSquare, Bell, ChevronLeft, Send, X, Check } from 'lucide-react';

export function MobileAppPreview() {
  return (
    <div className="min-h-screen bg-party-dark py-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Vendor Mobile App</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Manage your venue, respond to leads, and chat with clients on the go. Available for iOS and Android.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          
          {/* Screen 1: Dashboard */}
          <div className="w-[320px] h-[650px] bg-gray-50 rounded-[3rem] border-[8px] border-gray-900 overflow-hidden relative shadow-2xl flex flex-col">
            {/* Status Bar */}
            <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-medium text-gray-800">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>LTE</span>
                <span>100%</span>
              </div>
            </div>
            
            {/* Header */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h2 className="font-display font-bold text-lg">Grand Hotel</h2>
                <p className="text-xs text-gray-500">Dashboard</p>
              </div>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-party-pink rounded-full"></span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-gradient-party p-5 rounded-2xl text-white shadow-lg">
                <p className="text-white/80 text-sm mb-1">Total Revenue</p>
                <h3 className="text-3xl font-bold mb-4">$12,450</h3>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-white/80">Active Leads</p>
                    <p className="font-bold">24</p>
                  </div>
                  <div>
                    <p className="text-white/80">Conversion</p>
                    <p className="font-bold">68%</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-6 mb-2">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <Users className="w-5 h-5 text-party-blue mb-2" />
                  <p className="text-xl font-bold">145</p>
                  <p className="text-xs text-gray-500">Total Leads</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mb-2" />
                  <p className="text-xl font-bold">98</p>
                  <p className="text-xs text-gray-500">Converted</p>
                </div>
              </div>

              <h3 className="font-bold text-gray-800 mt-6 mb-2">Recent Activity</h3>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-party-purple/10 flex items-center justify-center text-party-purple">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">New message</p>
                      <p className="text-xs text-gray-500">Sarah asked about capacity.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 pb-2">
              <div className="flex flex-col items-center text-party-purple">
                <div className="w-6 h-6 rounded-full bg-party-purple/10 flex items-center justify-center mb-1">
                  <div className="w-4 h-4 bg-party-purple rounded-sm"></div>
                </div>
                <span className="text-[10px] font-medium">Home</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <Users className="w-5 h-5 mb-1" />
                <span className="text-[10px]">Leads</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <MessageSquare className="w-5 h-5 mb-1" />
                <span className="text-[10px]">Chat</span>
              </div>
            </div>
          </div>

          {/* Screen 2: Leads (Swipe) */}
          <div className="w-[320px] h-[650px] bg-gray-50 rounded-[3rem] border-[8px] border-gray-900 overflow-hidden relative shadow-2xl flex flex-col">
            <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-medium text-gray-800">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>LTE</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-display font-bold text-lg">New Leads</h2>
              <span className="bg-party-pink text-white text-xs px-2 py-1 rounded-full font-bold">3 New</span>
            </div>

            <div className="flex-1 p-4 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Card Stack Effect */}
              <div className="absolute top-8 w-[90%] h-[400px] bg-white rounded-3xl shadow-sm border border-gray-100 scale-95 opacity-50 translate-y-4"></div>
              <div className="absolute top-8 w-[95%] h-[400px] bg-white rounded-3xl shadow-md border border-gray-100 scale-95 opacity-80 translate-y-2"></div>
              
              {/* Top Card */}
              <div className="relative z-10 w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-1">
                <div className="h-32 bg-gray-200 relative">
                  <img src="https://picsum.photos/seed/wedding/400/200" alt="Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-party-purple">
                    Wedding
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Emily & James</h3>
                  <p className="text-sm text-gray-500 mb-4">Oct 15, 2026 • 150 Guests</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Budget</span>
                      <span className="font-bold text-green-600">$15k - $20k</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Requirements</span>
                      <span className="font-medium text-right max-w-[150px] truncate">Catering, Decor, DJ</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-6 mt-4">
                    <button className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center shadow-sm hover:bg-red-100 transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                    <button className="w-14 h-14 rounded-full bg-green-50 text-green-500 flex items-center justify-center shadow-sm hover:bg-green-100 transition-colors">
                      <Check className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-4">Swipe left to reject, right to accept</p>
                </div>
              </div>
            </div>

            <div className="h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4 pb-2">
              <div className="flex flex-col items-center text-gray-400">
                <div className="w-5 h-5 border-2 border-gray-400 rounded-sm mb-1"></div>
                <span className="text-[10px]">Home</span>
              </div>
              <div className="flex flex-col items-center text-party-purple">
                <Users className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-medium">Leads</span>
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <MessageSquare className="w-5 h-5 mb-1" />
                <span className="text-[10px]">Chat</span>
              </div>
            </div>
          </div>

          {/* Screen 3: Chat */}
          <div className="w-[320px] h-[650px] bg-gray-50 rounded-[3rem] border-[8px] border-gray-900 overflow-hidden relative shadow-2xl flex flex-col">
            <div className="h-6 bg-white flex justify-between items-center px-6 text-[10px] font-medium text-gray-800">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>LTE</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-3 shadow-sm z-10">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
              <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h2 className="font-bold text-sm">Sarah Johnson</h2>
                <p className="text-[10px] text-green-500">Online</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50">
              <div className="flex justify-center">
                <span className="text-[10px] text-gray-400 bg-gray-200 px-2 py-1 rounded-full">Today 10:15 AM</span>
              </div>
              
              <div className="flex gap-2 max-w-[85%]">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-6 h-6 rounded-full object-cover mt-auto" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm text-sm">
                  <p className="text-gray-700">Hi, do you have availability for Oct 15th?</p>
                </div>
              </div>

              <div className="flex gap-2 max-w-[85%] ml-auto flex-row-reverse">
                <div className="bg-party-purple text-white p-3 rounded-2xl rounded-br-none shadow-sm text-sm">
                  <p>Hello Sarah! Yes, we currently have the Grand Ballroom available for that date.</p>
                </div>
              </div>

              <div className="flex gap-2 max-w-[85%]">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-6 h-6 rounded-full object-cover mt-auto" referrerPolicy="no-referrer" />
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm text-sm">
                  <p className="text-gray-700">That's great! Can you send over a quotation for 150 guests with catering?</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                <input type="text" placeholder="Message..." className="flex-1 bg-transparent border-none text-sm focus:ring-0 p-0" />
                <button className="w-8 h-8 bg-party-purple text-white rounded-full flex items-center justify-center">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
