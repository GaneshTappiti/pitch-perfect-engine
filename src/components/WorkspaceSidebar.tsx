
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Lightbulb, 
  FileText, 
  Calendar, 
  Code, 
  Users, 
  Search, 
  BarChart, 
  BookOpen,
  MessageSquare
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive: boolean;
}

const SidebarItem = ({ icon: Icon, label, path, isActive }: SidebarItemProps) => {
  return (
    <Link
      to={path}
      className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors ${
        isActive 
          ? "bg-sidebar-accent text-sidebar-primary" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
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
  
  const modules = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard, path: "/workspace" },
    { id: "idea-vault", name: "Idea Vault", icon: Lightbulb, path: "/workspace/idea-vault" },
    { id: "blueprint-zone", name: "Blueprint Zone", icon: FileText, path: "/workspace/blueprint-zone" },
    { id: "task-planner", name: "Task Planner", icon: Calendar, path: "/workspace/task-planner" },
    { id: "mvp-studio", name: "MVP Studio", icon: Code, path: "/workspace/mvp-studio" },
    { id: "docs-decks", name: "Docs & Decks", icon: FileText, path: "/workspace/docs-decks" },
    { id: "teamspace", name: "TeamSpace", icon: Users, path: "/workspace/teamspace" },
    { id: "investor-radar", name: "Investor Radar", icon: Search, path: "/workspace/investor-radar" },
    { id: "traction-board", name: "Traction Board", icon: BarChart, path: "/workspace/traction-board" },
    { id: "idea-wiki", name: "Idea Wiki", icon: BookOpen, path: "/workspace/idea-wiki" }
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border fixed h-screen z-10">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-custom w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-white text-sm">SW</span>
          </div>
          <span className="font-bold text-lg">StartWise</span>
        </div>
      </div>
      
      <div className="px-2 py-4">
        <nav className="space-y-1">
          {modules.map((module) => (
            <SidebarItem 
              key={module.id}
              icon={module.icon}
              label={module.name}
              path={module.path}
              isActive={
                module.path === "/workspace" 
                  ? currentPath === "/workspace"
                  : currentPath.startsWith(module.path)
              }
            />
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="p-4 glass-effect rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <div className="p-1.5 bg-primary/20 rounded">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
            <h4 className="text-sm font-medium">Founder's GPT</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Get advice on your startup journey from your AI co-founder
          </p>
          <button className="w-full bg-white/5 hover:bg-white/10 px-3 py-2 rounded text-xs text-left transition-colors">
            Ask Founder's GPT...
          </button>
        </div>
      </div>
    </aside>
  );
};

export default WorkspaceSidebar;
