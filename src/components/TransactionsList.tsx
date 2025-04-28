
import React from 'react';
import { Search, CreditCard, TrendingUp } from 'lucide-react';

interface Transaction {
  id: number;
  type: string;
  icon: React.ElementType;
  name: string;
  date: string;
  amount: string;
  euro: string;
  status: 'Waiting' | 'Success' | 'Not Now' | 'Disabled';
  method: string;
  cardNumber: string;
}

const TransactionsList: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      type: 'Payment',
      icon: CreditCard,
      name: 'Company',
      date: 'Aug 24, 2024',
      amount: '$1,500.00',
      euro: '€1,375.65 EUR',
      status: 'Waiting',
      method: 'Credit Card',
      cardNumber: '****3455'
    },
    {
      id: 2,
      type: 'Receive',
      icon: TrendingUp,
      name: 'Vera K.',
      date: 'Aug 15, 2024',
      amount: '$800.00',
      euro: '€733.68 EUR',
      status: 'Success',
      method: 'Bank Transfer',
      cardNumber: '****4275'
    },
    {
      id: 3,
      type: 'Payment',
      icon: CreditCard,
      name: 'Birthday',
      date: 'Aug 8, 2024',
      amount: '$240.00',
      euro: '€220.10 EUR',
      status: 'Not Now',
      method: 'Credit Card',
      cardNumber: '****3455'
    },
    {
      id: 4,
      type: 'Receive',
      icon: TrendingUp,
      name: 'Riley A.',
      date: 'Aug 5, 2024',
      amount: '$240.00',
      euro: '€220.10 EUR',
      status: 'Disabled',
      method: 'Bank Transfer',
      cardNumber: '****2053'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Waiting':
        return 'bg-amber-500/20 text-amber-500';
      case 'Success':
        return 'bg-green-500/20 text-green-500';
      case 'Not Now':
        return 'bg-red-500/20 text-red-500';
      case 'Disabled':
        return 'bg-gray-700 text-gray-400';
      default:
        return 'bg-gray-700 text-gray-400';
    }
  };

  return (
    <div className="bg-finance-card p-4 rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="font-medium">Recent Transactions</div>
        <div className="flex items-center">
          <div className="bg-finance-accent hover:bg-finance-accent/80 p-1 rounded-md cursor-pointer mr-2">
            <Search size={16} className="text-gray-400" />
          </div>
          <div className="text-xs text-blue-400">Filter</div>
        </div>
      </div>
      
      {/* Table Headers */}
      <div className="grid grid-cols-5 text-xs text-gray-500 mb-2 px-2">
        <div>TYPE</div>
        <div>AMOUNT</div>
        <div>STATUS</div>
        <div>METHOD</div>
        <div></div>
      </div>
      
      {/* Transaction Items */}
      {transactions.map((transaction) => {
        const Icon = transaction.icon;
        const statusColor = getStatusColor(transaction.status);
        
        return (
          <div key={transaction.id} className="grid grid-cols-5 text-sm py-3 border-t border-gray-800 items-center">
            <div className="flex items-center">
              <div className="bg-finance-accent p-2 rounded-md mr-2">
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <div>{transaction.name}</div>
                <div className="text-xs text-gray-500">
                  {transaction.type} · {transaction.date}
                </div>
              </div>
            </div>
            <div>
              <div>{transaction.amount}</div>
              <div className="text-xs text-gray-500">{transaction.euro}</div>
            </div>
            <div>
              <span className={`status-badge ${statusColor}`}>
                {transaction.status}
              </span>
            </div>
            <div>
              <div>{transaction.method}</div>
              <div className="text-xs text-gray-500">{transaction.cardNumber}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-blue-400">Details</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsList;
