
import React from 'react';
import { 
  Settings, 
  Share2, 
  HelpCircle, 
  LayoutDashboard,
  CalendarDays,
  ChartBar,
  Bell,
  ChevronLeft
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", isActive: true },
    { icon: CalendarDays, text: "Cobertura días", isActive: false },
    { icon: ChartBar, text: "Venta proyectada", isActive: false },
    { icon: Bell, text: "Notificaciones", isActive: false },
  ];

  const supportItems = [
    { icon: HelpCircle, text: "Helps", isActive: false },
    { icon: Share2, text: "Integration", isActive: false },
    { icon: Settings, text: "Settings", isActive: false },
  ];

  return (
    <Sidebar>
      {/* Logo */}
      <SidebarHeader className="flex items-center p-4">
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="ml-2">
          <div className="font-medium text-white">Finemic</div>
        </div>
        <SidebarTrigger className="ml-auto">
          <ChevronLeft className="h-4 w-4" />
        </SidebarTrigger>
      </SidebarHeader>
      
      <SidebarContent>
        {/* Menu Items */}
        <SidebarGroup>
          <SidebarGroupLabel>MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.text}>
                  <SidebarMenuButton data-active={item.isActive} tooltip={item.text}>
                    <item.icon size={18} className="mr-2" />
                    <span>{item.text}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Support Section */}
        <SidebarGroup>
          <SidebarGroupLabel>SUPPORT</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.text}>
                  <SidebarMenuButton tooltip={item.text}>
                    <item.icon size={18} className="mr-2" />
                    <span>{item.text}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
