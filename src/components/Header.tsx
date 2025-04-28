
import React from 'react';
import { Search, Bell } from 'lucide-react';
import UserInfo from './UserInfo';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-800">
      <UserInfo name="Syarah Adelia" avatarUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
      
      <div className="flex items-center">
        {/* Search Bar */}
        <div className="relative mr-3">
          <div className="flex items-center bg-finance-card rounded-lg px-3 py-1.5">
            <Search size={16} className="text-gray-500 mr-2" />
            <input 
              type="text"
              placeholder="Search or type command"
              className="bg-transparent text-sm border-none outline-none w-40"
            />
            <div className="bg-finance-accent text-xs px-1.5 py-0.5 text-gray-400 rounded-md">⌘K</div>
          </div>
        </div>
        
        {/* Notification Bell */}
        <div className="p-2 bg-finance-card rounded-lg mr-3">
          <Bell size={16} className="text-white" />
        </div>
        
        {/* New Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1.5 px-3 rounded-lg">
          New
        </button>
      </div>
    </div>
  );
};

export default Header;
