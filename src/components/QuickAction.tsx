
import React from 'react';
import { Send, Download } from 'lucide-react';

const QuickAction: React.FC = () => {
  return (
    <div className="bg-finance-card p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="font-medium">Quick Action</div>
        <div className="text-xs text-blue-400">Manage</div>
      </div>
      
      {/* Send Money Button */}
      <div className="bg-finance-accent hover:bg-finance-accent/80 rounded-lg p-3 mb-2 cursor-pointer flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-md p-1.5 mr-3">
            <Send size={16} className="text-white" />
          </div>
          <span className="text-sm">Send Money</span>
        </div>
        <div className="bg-black/30 rounded-md px-1.5 text-xs">N</div>
      </div>
      
      {/* Request Money Button */}
      <div className="bg-finance-accent hover:bg-finance-accent/80 rounded-lg p-3 cursor-pointer flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-purple-500 rounded-md p-1.5 mr-3">
            <Download size={16} className="text-white" />
          </div>
          <span className="text-sm">Request Money</span>
        </div>
        <div className="bg-black/30 rounded-md px-1.5 text-xs">R</div>
      </div>
    </div>
  );
};

export default QuickAction;
