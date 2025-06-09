import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lightbulb, 
  Calendar, 
  Code, 
  Users, 
  Search, 
  BarChart, 
  Brain,
  MessageSquare,
  X,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, path, isActive, onClick }: SidebarItemProps) => {
  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
        isActive 
          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600" 
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );
};

const WorkspaceSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);
  
  const modules = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, path: "/workspace" },
    { id: "idea-vault", name: "Idea Vault", icon: Lightbulb, path: "/workspace/idea-vault" },
    { id: "ideaforge", name: "IdeaForge", icon: Brain, path: "/workspace/ideaforge" },
    { id: "task-planner", name: "Task Planner", icon: Calendar, path: "/workspace/task-planner" },
    { id: "mvp-studio", name: "MVP Studio", icon: Code, path: "/workspace/mvp-studio" },
    { id: "docs-decks", name: "Docs & Decks", icon: FileText, path: "/workspace/docs-decks" },
    { id: "teamspace", name: "TeamSpace", icon: Users, path: "/workspace/teamspace" },
    { id: "investor-radar", name: "Investor Radar", icon: Search, path: "/workspace/investor-radar" },
    { id: "traction-board", name: "Traction Board", icon: BarChart, path: "/workspace/traction-board" }
  ];

  const sidebarContent = (
    <>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-600 w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-white text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-gray-900">StartWise</span>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <nav className="space-y-2">
          {modules.map((module) => (
            <SidebarItem 
              key={module.id}
              icon={module.icon}
              label={module.name}
              path={module.path}
              onClick={handleLinkClick}
              isActive={
                module.path === "/workspace" 
                  ? currentPath === "/workspace"
                  : currentPath.startsWith(module.path)
              }
            />
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <MessageSquare className="h-4 w-4 text-blue-600" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900">Founder's GPT</h4>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Get advice on your startup journey from your AI co-founder
          </p>
          <button className="w-full bg-white hover:bg-gray-50 px-3 py-2 rounded-lg text-xs text-left transition-colors border border-gray-200 text-gray-700">
            Ask Founder's GPT...
          </button>
        </div>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-30 md:hidden bg-white shadow-md"
          onClick={() => setIsOpen(true)}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span className="sr-only">Open Menu</span>
        </Button>
        
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="h-[80vh] max-h-[80vh]">
            <div className="w-full h-full bg-white border-r border-gray-200 relative overflow-y-auto">
              {sidebarContent}
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed h-screen z-10 hidden md:flex flex-col">
      {sidebarContent}
    </aside>
  );
};

export default WorkspaceSidebar;