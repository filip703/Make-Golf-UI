
import React from 'react';
import AppSidebar from './AppSidebar';
import FadeIn from './FadeIn';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1C1C1E] flex">
      {/* Sidebar - Fixed width */}
      <AppSidebar />
      
      {/* Main Content - Offset by sidebar width */}
      <div className="flex-1 ml-64 min-h-screen bg-[#F5F5F7]">
        <div className="p-8 md:p-12 max-w-7xl mx-auto">
          <FadeIn>
            {children}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
