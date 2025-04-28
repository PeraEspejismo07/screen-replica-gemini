
import React from 'react';
import { 
  Settings, 
  Share2, 
  HelpCircle, 
  LayoutDashboard,
  CalendarDays,
  ChartBar,
  Bell
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  isActive?: boolean;
  hasArrow?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, text, isActive, hasArrow }) => {
  return (
    <div className={`flex items-center px-4 py-2 rounded-lg text-sm mb-1 ${isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-finance-accent hover:text-white'}`}>
      <Icon size={18} className="mr-2" />
      <span className="flex-grow">{text}</span>
      {hasArrow && <span className="text-gray-600">{'>'}</span>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-52 bg-finance-dark border-r border-gray-800 flex flex-col h-screen">
      {/* Logo */}
      <div className="px-4 py-5 flex items-center">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <Share2 size={16} className="text-white" />
        </div>
        <div className="ml-2">
          <div className="font-medium text-white">Finemic</div>
          <div className="text-xs text-gray-400">Financial Assistant</div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="px-4 py-1">
        <div className="text-xs font-medium text-gray-500 mb-2">MENU</div>
      </div>
      
      {/* Menu Items */}
      <div className="px-2">
        <SidebarItem icon={LayoutDashboard} text="Dashboard" isActive={true} />
        <SidebarItem icon={CalendarDays} text="Cobertura días" />
        <SidebarItem icon={ChartBar} text="Venta proyectada" />
        <SidebarItem icon={Bell} text="Notificaciones" />
      </div>
      
      {/* Support Section */}
      <div className="mt-8 px-4 py-1">
        <div className="text-xs font-medium text-gray-500 mb-2">SUPPORT</div>
      </div>
      
      <div className="px-2">
        <SidebarItem icon={HelpCircle} text="Helps" />
        <SidebarItem icon={Share2} text="Integration" />
        <SidebarItem icon={Settings} text="Settings" />
      </div>

      {/* Removed the Upgrade Section since it wasn't requested */}
    </div>
  );
};

export default Sidebar;
