import React from 'react';
import { Heart, Bell, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Elyx Health
              </h1>
              <p className="text-sm text-gray-500">Your Personal Health Journey</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="font-semibold text-gray-800">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Member since Jan 2024</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <Settings size={20} />
              </button>
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              SJ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;