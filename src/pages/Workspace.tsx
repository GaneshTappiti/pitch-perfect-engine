import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  PlusCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Users
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import FounderGPT from "@/components/FounderGPT";

const Workspace = () => {
  const recentProjects = [
    { id: 1, name: "HealthTrack App", description: "Fitness tracking for seniors", lastUpdated: "2 hours ago", progress: 75 },
    { id: 2, name: "EcoMarket", description: "Sustainable goods marketplace", lastUpdated: "Yesterday", progress: 45 },
    { id: 3, name: "CodeBuddy", description: "AI pair programming assistant", lastUpdated: "3 days ago", progress: 90 }
  ];
  
  const tasks = [
    { id: 1, title: "Complete competitor analysis", dueDate: "Today", priority: "High", status: "in-progress" },
    { id: 2, title: "Draft investor pitch deck", dueDate: "Tomorrow", priority: "Medium", status: "pending" },
    { id: 3, title: "Set up analytics", dueDate: "Next week", priority: "Low", status: "pending" },
  ];
  
  const insights = [
    { 
      title: "Market Potential", 
      description: "Your 'HealthTrack App' has higher market potential than 78% of similar startups",
      trend: "up"
    },
    { 
      title: "Feature Suggestion", 
      description: "Consider adding social features to increase user retention by 35%",
      trend: "up"
    },
    { 
      title: "Timeline Update", 
      description: "Based on your roadmap, you're on track to launch in 6 weeks",
      trend: "neutral"
    }
  ];
  
  const modules = [
    {
      id: "idea-vault",
      name: "Idea Vault",
      description: "Store and validate your startup ideas",
      icon: "💡",
      path: "/workspace/idea-vault",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ideaforge",
      name: "IdeaForge",
      description: "Transform ideas into structured blueprints",
      icon: "🧠",
      path: "/workspace/ideaforge",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "task-planner",
      name: "Task Planner",
      description: "Organize and prioritize your tasks",
      icon: "📆",
      path: "/workspace/task-planner",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "mvp-studio",
      name: "MVP Studio",
      description: "Build your product with AI assistance",
      icon: "🧱",
      path: "/workspace/mvp-studio",
      color: "from-orange-500 to-red-500"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 transition-all duration-300 md:ml-64">
        <div className="container mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Your startup command center with all the tools you need
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Access Modules */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">StartWise OS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {modules.map(module => (
                    <Link 
                      key={module.id} 
                      to={module.path} 
                      className="group p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 bg-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center text-2xl`}>
                          {module.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{module.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                          <div className="flex items-center mt-3 text-blue-600 text-sm font-medium">
                            <span>Open</span>
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Recent Projects */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Recent Projects</h3>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View all
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentProjects.map(project => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {project.lastUpdated}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-blue-600 transition-all duration-300"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-600">{project.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">AI Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                      <div className="flex items-start gap-3">
                        <div className="p-1 bg-blue-100 rounded">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Founder's GPT */}
              <FounderGPT />
              
              {/* Tasks */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Upcoming Tasks</h3>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View all
                  </Button>
                </div>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <input 
                        type="checkbox" 
                        className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500">{task.dueDate}</span>
                          <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Team Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Sarah updated the pitch deck</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Mike completed user research</p>
                      <p className="text-xs text-gray-500">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Alex scheduled investor meeting</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Create New Project CTA */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlusCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Start a New Project</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Create a new startup project and get access to all the tools and resources you need
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workspace;