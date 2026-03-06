import React from 'react';
import { MessageSquare, Search, MoreVertical, Phone, Video } from 'lucide-react';

const conversations = [
  { id: 1, name: 'Sarah Johnson', lastMessage: 'That sounds perfect! Can we schedule a visit?', time: '10:30 AM', unread: 2, avatar: 'https://picsum.photos/seed/user1/100/100' },
  { id: 2, name: 'Michael Chen', lastMessage: 'What is the maximum capacity for the ballroom?', time: 'Yesterday', unread: 0, avatar: 'https://picsum.photos/seed/user2/100/100' },
  { id: 3, name: 'Emily Davis', lastMessage: 'Thank you for the quotation.', time: 'Mon', unread: 0, avatar: 'https://picsum.photos/seed/user3/100/100' },
];

export function Messages() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6">
      {/* Conversations List */}
      <div className="w-full md:w-80 lg:w-96 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden flex-shrink-0">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-display font-bold mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-party-purple transition-all" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div key={chat.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-4">
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                {chat.unread > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-party-pink rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-party-dark truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-400">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col overflow-hidden hidden md:flex">
        {/* Chat Header */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={conversations[0].avatar} alt={conversations[0].name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <h3 className="font-bold text-lg">{conversations[0].name}</h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button className="hover:text-party-purple transition-colors"><Phone className="w-5 h-5" /></button>
            <button className="hover:text-party-purple transition-colors"><Video className="w-5 h-5" /></button>
            <button className="hover:text-party-purple transition-colors"><MoreVertical className="w-5 h-5" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50 space-y-6">
          <div className="flex justify-center">
            <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">Today</span>
          </div>
          <div className="flex gap-4 max-w-[80%]">
            <img src={conversations[0].avatar} alt={conversations[0].name} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
              <p className="text-gray-700">Hi, I'm interested in booking your venue for a wedding reception next year. Do you have availability in October?</p>
              <span className="text-xs text-gray-400 mt-2 block">10:15 AM</span>
            </div>
          </div>
          <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-gradient-party p-[2px]">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            <div className="bg-party-purple text-white p-4 rounded-2xl rounded-tr-none shadow-sm">
              <p>Hello Sarah! Yes, we still have a few weekends available in October 2026. What specific dates were you considering?</p>
              <span className="text-xs text-white/70 mt-2 block text-right">10:20 AM</span>
            </div>
          </div>
          <div className="flex gap-4 max-w-[80%]">
            <img src={conversations[0].avatar} alt={conversations[0].name} className="w-8 h-8 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
              <p className="text-gray-700">That sounds perfect! Can we schedule a visit?</p>
              <span className="text-xs text-gray-400 mt-2 block">10:30 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-party-purple/20 focus-within:border-party-purple transition-all">
            <input type="text" placeholder="Type your message..." className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2" />
            <button className="bg-gradient-party text-white p-3 rounded-xl hover:opacity-90 transition-opacity">
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
