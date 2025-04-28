
import React from 'react';

interface CalendarProps {
  month: string;
  year: number;
  activeDay: number;
}

const Calendar: React.FC<CalendarProps> = ({ month, year, activeDay }) => {
  // Array to store the days of the week
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // Generate days grid (for simplicity, we'll use 31 days - adjust as needed)
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      if (i > 28) break; // Just showing 28 days for the example
      days.push(i);
    }
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="calendar bg-finance-card p-4 rounded-lg">
      <div className="text-sm mb-4 flex justify-between">
        <div className="flex">
          <div className="mr-6">
            <div className="text-2xl font-bold">40</div>
            <div className="text-xs text-gray-400">Transaction</div>
          </div>
          <div className="mr-6">
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-gray-400">Income</div>
          </div>
          <div>
            <div className="text-2xl font-bold">16</div>
            <div className="text-xs text-gray-400">Outcome</div>
          </div>
        </div>
        <div className="text-gray-400">{month} {year}</div>
      </div>
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {/* Days of the week */}
        {daysOfWeek.map((day, index) => (
          <div key={index} className="py-1 text-gray-400">{day}</div>
        ))}
        
        {/* Calendar days */}
        {calendarDays.map((day) => (
          <div 
            key={day} 
            className={`p-1 rounded-full ${day === activeDay 
              ? 'bg-amber-400 text-black' 
              : day === 10 
                ? 'bg-finance-accent text-white' 
                : 'text-gray-400'}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
