
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  PlusCircle,
  MessageSquare
} from "lucide-react";

const Workspace = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const modules = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "idea-vault", name: "Idea Vault", icon: Lightbulb },
    { id: "ai-roadmap", name: "AI Roadmap", icon: FileText },
    { id: "task-planner", name: "Task Planner", icon: Calendar },
    { id: "mvp-studio", name: "MVP Studio", icon: Code },
    { id: "docs-decks", name: "Docs & Decks", icon: FileText },
    { id: "teamspace", name: "TeamSpace", icon: Users },
    { id: "investor-radar", name: "Investor Radar", icon: Search },
    { id: "traction-board", name: "Traction Board", icon: BarChart },
    { id: "idea-wiki", name: "Idea Wiki", icon: BookOpen },
  ];
  
  const recentProjects = [
    { id: 1, name: "HealthTrack App", description: "Fitness tracking for seniors", lastUpdated: "2 hours ago" },
    { id: 2, name: "EcoMarket", description: "Sustainable goods marketplace", lastUpdated: "Yesterday" },
    { id: 3, name: "CodeBuddy", description: "AI pair programming assistant", lastUpdated: "3 days ago" }
  ];
  
  const tasks = [
    { id: 1, title: "Complete competitor analysis", dueDate: "Today", priority: "High" },
    { id: 2, title: "Draft investor pitch deck", dueDate: "Tomorrow", priority: "Medium" },
    { id: 3, title: "Set up analytics", dueDate: "Next week", priority: "Low" },
  ];
  
  const insights = [
    "Your 'HealthTrack App' has higher market potential than 78% of similar startups",
    "Consider adding social features to increase user retention",
    "Based on your roadmap, you're on track to launch in 6 weeks"
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-sidebar border-r border-sidebar-border transition-all duration-300 fixed h-screen z-40`}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-custom w-8 h-8 flex items-center justify-center">
              <span className="font-bold text-white text-sm">SW</span>
            </div>
            {sidebarOpen && <span className="font-bold text-lg">StartWise</span>}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
          >
            {sidebarOpen ? "←" : "→"}
          </button>
        </div>
        
        <div className="px-2 py-4">
          <nav className="space-y-1">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors
                  ${activeTab === module.id ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'}
                  ${!sidebarOpen && 'justify-center'}`}
              >
                <module.icon className="h-5 w-5" />
                {sidebarOpen && <span>{module.name}</span>}
              </button>
            ))}
          </nav>
        </div>
        
        {sidebarOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <Button className="w-full flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              New Project
            </Button>
          </div>
        )}
      </aside>
      
      {/* Main content */}
      <main className={`flex-1 p-6 ml-${sidebarOpen ? '64' : '20'} transition-all duration-300`}>
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{modules.find(m => m.id === activeTab)?.name}</h1>
            <p className="text-muted-foreground">
              {activeTab === "dashboard" && "Your startup command center with all the tools you need"}
              {activeTab === "idea-vault" && "Collect, organize and validate your startup ideas"}
              {activeTab === "ai-roadmap" && "AI-generated roadmaps for your startup journey"}
              {activeTab === "task-planner" && "Plan and organize your tasks efficiently"}
              {activeTab === "mvp-studio" && "Build your MVP with AI and no-code tools"}
              {activeTab === "docs-decks" && "Generate pitch decks and documents for investors"}
              {activeTab === "teamspace" && "Collaborate with your team members"}
              {activeTab === "investor-radar" && "Find and connect with potential investors"}
              {activeTab === "traction-board" && "Track your metrics and growth"}
              {activeTab === "idea-wiki" && "Build a knowledge base for your startup"}
            </p>
          </header>
          
          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Founder's GPT Card */}
              <div className="glass-effect p-6 col-span-full flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 text-4xl">🪄</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Founder's GPT</h3>
                  <p className="text-muted-foreground mb-4">Your startup mentor, therapist, co-founder, and investor rolled into one</p>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center gap-2 mb-3">
                    <Input 
                      placeholder="Ask anything about startups..." 
                      className="bg-transparent border-white/10"
                    />
                    <Button size="icon" variant="ghost">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">Try asking: "How do I validate a 2-sided marketplace?"</div>
                </div>
              </div>
              
              {/* Recent Projects */}
              <div className="workspace-card col-span-1 lg:col-span-2">
                <h3 className="text-lg font-medium mb-4">Recent Projects</h3>
                <div className="space-y-3">
                  {recentProjects.map(project => (
                    <div key={project.id} className="flex justify-between p-3 bg-white/5 rounded-md">
                      <div>
                        <h4 className="font-medium">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="text-xs text-muted-foreground self-end">{project.lastUpdated}</div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full justify-center">View all projects</Button>
              </div>
              
              {/* Tasks */}
              <div className="workspace-card">
                <h3 className="text-lg font-medium mb-4">Upcoming Tasks</h3>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-md">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <div className="flex gap-2 mt-1">
                          <span className="text-xs bg-white/10 px-2 py-1 rounded">{task.dueDate}</span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            task.priority === 'High' ? 'bg-red-500/20 text-red-300' : 
                            task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 
                            'bg-green-500/20 text-green-300'
                          }`}>{task.priority}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-4 w-full justify-center">View all tasks</Button>
              </div>
              
              {/* AI Insights */}
              <div className="workspace-card col-span-full">
                <h3 className="text-lg font-medium mb-4">AI Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-md">
                      <p className="text-sm">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== "dashboard" && (
            <div className="flex items-center justify-center h-64 border border-dashed border-white/10 rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">{modules.find(m => m.id === activeTab)?.name} Coming Soon</h3>
                <p className="text-muted-foreground mb-4">This module is currently in development</p>
                <Button asChild>
                  <Link to="/">
                    Return to Homepage
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Workspace;
