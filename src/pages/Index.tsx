
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Calendar from '@/components/Calendar';
import BalanceCard from '@/components/BalanceCard';
import QuickAction from '@/components/QuickAction';
import GoalsSection from '@/components/GoalsSection';
import TransactionsList from '@/components/TransactionsList';
import ProVersion from '@/components/ProVersion';

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-grow flex flex-col">
        <Header />
        
        <div className="p-4 overflow-auto h-full">
          <div className="grid grid-cols-12 gap-4">
            {/* First Column - Calendar & Transactions */}
            <div className="col-span-12 lg:col-span-7">
              <Calendar month="June" year={2024} activeDay={1} />
              
              <div className="mt-4">
                <TransactionsList />
              </div>
            </div>
            
            {/* Second Column - Balance, Quick Actions, Goals */}
            <div className="col-span-12 lg:col-span-5">
              <BalanceCard 
                balance="$20,088.38" 
                currency="US" 
                percentageChange="+24.37%" 
                isPositiveChange={true} 
              />
              
              <div className="mt-4">
                <QuickAction />
              </div>
              
              <div className="mt-4">
                <GoalsSection />
              </div>
              
              <div className="mt-4">
                <ProVersion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
