
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare,
  PlusCircle,
  ArrowRight,
  Brain
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const Workspace = () => {
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
  
  const modules = [
    {
      id: "idea-vault",
      name: "Idea Vault",
      description: "Store and validate your startup ideas",
      icon: "💡",
      path: "/workspace/idea-vault"
    },
    {
      id: "ideaforge",
      name: "IdeaForge",
      description: "Transform ideas into structured blueprints",
      icon: "🧠",
      path: "/workspace/ideaforge"
    },
    {
      id: "task-planner",
      name: "Task Planner",
      description: "Organize and prioritize your tasks",
      icon: "📆",
      path: "/workspace/task-planner"
    },
    {
      id: "mvp-studio",
      name: "MVP Studio",
      description: "Build your product with AI assistance",
      icon: "🧱",
      path: "/workspace/mvp-studio"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 transition-all duration-300 md:ml-64">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Your startup command center with all the tools you need
            </p>
          </header>
          
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
            
            {/* Quick Access Modules */}
            <div className="workspace-card col-span-full">
              <h3 className="text-lg font-medium mb-4">StartWise OS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {modules.map(module => (
                  <Link key={module.id} to={module.path} className="workspace-card p-4 hover:shadow-lg flex flex-col items-start">
                    <div className="text-3xl mb-2">{module.icon}</div>
                    <h4 className="font-medium mb-1">{module.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                    <Button variant="ghost" size="sm" className="mt-auto px-0 hover:bg-transparent hover:text-primary">
                      <span>Open</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                ))}
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
                        <span className={`text-xs px-2 py-1 rounded priority-${task.priority.toLowerCase()}`}>
                          {task.priority}
                        </span>
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
            
            {/* Create New Project */}
            <div className="workspace-card col-span-full border-dashed border-2 flex flex-col items-center justify-center p-8">
              <div className="rounded-full bg-primary/20 p-3 mb-4">
                <PlusCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Start a New Project</h3>
              <p className="text-center text-muted-foreground mb-6 max-w-md">
                Create a new startup project and get access to all the tools and resources you need
              </p>
              <Button>Create Project</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workspace;
