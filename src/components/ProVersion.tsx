
import React from 'react';
import { Crown } from 'lucide-react';

const ProVersion: React.FC = () => {
  return (
    <div className="bg-finance-card p-4 rounded-lg">
      <div className="flex justify-between mb-5">
        <div className="font-medium">Pro Version</div>
        <div className="text-xs text-gray-400">Details</div>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="bg-amber-500 p-1 rounded-md mr-2">
          <Crown size={16} className="text-black" />
        </div>
        <div className="text-sm font-medium">More with Premium</div>
      </div>
      
      <div className="text-xs text-gray-400 mb-4">
        Our premium subscription enhances your experience and unlock of benefits.
      </div>
      
      <div className="text-xs text-gray-500 mb-1">YOUR PLAN</div>
      <div className="flex items-end mb-5">
        <div className="text-2xl font-bold">$19.99</div>
        <div className="text-xs text-gray-500 mb-1">/Month</div>
      </div>
      
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm">
        Learn More
      </button>
    </div>
  );
};

export default ProVersion;
