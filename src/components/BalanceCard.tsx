
import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface BalanceCardProps {
  balance: string;
  currency: string;
  percentageChange: string;
  isPositiveChange: boolean;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, currency, percentageChange, isPositiveChange }) => {
  return (
    <div className="bg-finance-card p-4 rounded-lg">
      <div className="flex justify-between mb-3 items-center">
        <div className="text-gray-400 text-sm">Balance</div>
        <div className="flex items-center bg-finance-accent px-2 py-1 rounded-md">
          <span className="text-xs text-white mr-1">{currency} Dollar</span>
          <span className="ml-1">▼</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">{balance}</div>
        <RefreshCcw size={16} className="text-gray-400" />
      </div>
      
      <div className="text-xs mt-2">
        <span className="text-gray-400">Compared to last month </span>
        <span className={isPositiveChange ? 'text-green-500' : 'text-red-500'}>
          {percentageChange}
        </span>
      </div>
      
      {/* Finance Health Section */}
      <div className="mt-5">
        <div className="text-sm font-medium mb-1">Finance Health</div>
        <div className="text-xs text-gray-400">Based on your spending habits the last 4 weeks</div>
        
        {/* Health Indicator (Placeholder for graph/chart) */}
        <div className="mt-4 bg-finance-accent/30 h-16 rounded-lg"></div>
      </div>
    </div>
  );
};

export default BalanceCard;
