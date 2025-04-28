
import React from 'react';
import { Target, Award } from 'lucide-react';

interface Goal {
  icon: React.ElementType;
  name: string;
  achieved?: boolean;
  months?: number;
  progress: number;
  amount: string;
  color: string;
}

const GoalsSection: React.FC = () => {
  const goals: Goal[] = [
    {
      icon: Award,
      name: 'Married',
      achieved: true,
      months: 2,
      progress: 100,
      amount: '$12,500.00',
      color: 'bg-amber-500'
    },
    {
      icon: Target,
      name: 'Basketball',
      progress: 70,
      amount: '$4,800.00',
      color: 'bg-blue-500'
    }
  ];
  
  return (
    <div className="bg-finance-card p-4 rounded-lg">
      <div className="font-medium mb-4">MY GOALS</div>
      
      {goals.map((goal, index) => {
        const Icon = goal.icon;
        
        return (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex items-center mb-2">
              <div className={`${goal.color} p-1.5 rounded-md mr-2`}>
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center text-sm">
                  <span>{goal.name}</span>
                  {goal.achieved && (
                    <span className="ml-2 text-xs bg-green-500/20 text-green-500 px-1.5 rounded-sm">
                      Achieved in {goal.months} months!
                    </span>
                  )}
                </div>
              </div>
              <div className="text-sm font-medium">{goal.amount}</div>
            </div>
            
            {/* Progress Bar */}
            <div className="progress-bar mt-2">
              <div 
                className={`progress-fill ${goal.color}`} 
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GoalsSection;
