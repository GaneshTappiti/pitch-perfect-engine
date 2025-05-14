
import React from "react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

interface WorkspaceLayoutProps {
  children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 transition-all duration-300 md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default WorkspaceLayout;
