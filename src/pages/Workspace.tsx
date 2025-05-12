
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Plus,
  Sparkles,
  Map,
  Presentation,
  Palette,
  Rocket,
  Library,
  Star,
  Clock,
  PanelLeft
} from "lucide-react";

// Recent projects data
const recentProjects = [
  {
    id: "1",
    name: "SaaS Marketing Platform",
    type: "Idea Vibes",
    lastUpdated: "2 hours ago",
    progress: 65,
    icon: "✨"
  },
  {
    id: "2",
    name: "Mobile App Roadmap",
    type: "Blueprint Zone",
    lastUpdated: "Yesterday",
    progress: 40,
    icon: "🗺️"
  },
  {
    id: "3",
    name: "Investor Pitch Deck",
    type: "Pitch Perfect",
    lastUpdated: "3 days ago",
    progress: 90,
    icon: "🎤"
  }
];

// Function to determine which icon to show based on workspace type
const getWorkspaceIcon = (type: string) => {
  switch (type) {
    case "Idea Vibes":
      return <Sparkles className="h-4 w-4" />;
    case "Blueprint Zone":
      return <Map className="h-4 w-4" />;
    case "Pitch Perfect":
      return <Presentation className="h-4 w-4" />;
    case "Visual Craft":
      return <Palette className="h-4 w-4" />;
    case "Code Forge":
      return <Rocket className="h-4 w-4" />;
    case "Founder Hub":
      return <Library className="h-4 w-4" />;
    default:
      return <Sparkles className="h-4 w-4" />;
  }
};

// Workspace modules
const workspaceModules = [
  {
    id: "idea-vibes",
    title: "Idea Vibes",
    description: "Validate your startup ideas and get market insights.",
    icon: <Sparkles className="h-5 w-5" />,
    color: "bg-violet-500/20",
    textColor: "text-violet-400",
    link: "/workspace/idea-vibes"
  },
  {
    id: "blueprint-zone",
    title: "Blueprint Zone",
    description: "Create detailed roadmaps and strategic plans.",
    icon: <Map className="h-5 w-5" />,
    color: "bg-blue-500/20",
    textColor: "text-blue-400",
    link: "/workspace/blueprint-zone"
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    description: "Generate compelling pitch scripts and presentations.",
    icon: <Presentation className="h-5 w-5" />,
    color: "bg-pink-500/20",
    textColor: "text-pink-400",
    link: "/workspace/pitch-perfect"
  },
  {
    id: "visual-craft",
    title: "Visual Craft",
    description: "Design beautiful UI mockups and wireframes.",
    icon: <Palette className="h-5 w-5" />,
    color: "bg-green-500/20",
    textColor: "text-green-400",
    link: "/workspace/visual-craft"
  },
  {
    id: "code-forge",
    title: "Code Forge",
    description: "Build your MVP with AI-powered code assistance.",
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-orange-500/20",
    textColor: "text-orange-400",
    link: "/workspace/code-forge"
  },
  {
    id: "founder-hub",
    title: "Founder Hub",
    description: "Access resources for legal, marketing, and fundraising.",
    icon: <Library className="h-5 w-5" />,
    color: "bg-red-500/20",
    textColor: "text-red-400",
    link: "/workspace/founder-hub"
  }
];

const Workspace = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      {showSidebar && (
        <aside className="w-64 border-r border-white/10 bg-sidebar fixed left-0 top-0 bottom-0 pt-16 hidden md:block">
          <div className="p-4 space-y-6 h-full flex flex-col">
            <div className="flex items-center gap-2 px-2 py-1">
              <div className="rounded-full bg-gradient-custom w-8 h-8 flex items-center justify-center">
                <span className="font-bold text-white text-sm">IV</span>
              </div>
              <span className="font-bold text-lg">Startify OS</span>
            </div>
            
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search workspace" 
                className="pl-9 bg-white/5 border-white/10"
              />
            </div>
            
            <div className="space-y-1 flex-grow">
              <p className="text-xs text-muted-foreground px-4 py-2">MODULES</p>
              {workspaceModules.map((module) => (
                <Link
                  key={module.id}
                  to={module.link}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors ${
                    module.id === 'idea-vibes' ? 'sidebar-active' : ''
                  }`}
                >
                  <div className={`p-1.5 rounded-md ${module.color}`}>
                    {module.icon}
                  </div>
                  <span className={module.id === 'idea-vibes' ? 'font-medium' : ''}>{module.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Upgrade to Pro</h4>
                <p className="text-sm text-muted-foreground mb-3">Get access to all features and remove limitations</p>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </aside>
      )}
      
      {/* Main content */}
      <main className={`flex-grow pt-16 ${showSidebar ? 'md:ml-64' : ''}`}>
        <div className="p-6">
          {/* Mobile sidebar toggle */}
          <Button 
            variant="outline" 
            size="icon"
            className="fixed bottom-6 right-6 md:hidden z-10 bg-muted shadow-lg"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
          
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
            <p className="text-muted-foreground">Continue working on your startup projects</p>
          </header>
          
          {/* Tabs navigation */}
          <Tabs defaultValue="dashboard" className="mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="pt-6">
              {/* Quick actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Button className="bg-muted/50 hover:bg-muted flex items-center justify-start gap-3 h-auto py-3 px-4 border border-white/10">
                  <div className="p-2 rounded-md bg-primary/20 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium block">Validate New Idea</span>
                    <span className="text-xs text-muted-foreground">Check market potential</span>
                  </div>
                </Button>
                
                <Button className="bg-muted/50 hover:bg-muted flex items-center justify-start gap-3 h-auto py-3 px-4 border border-white/10">
                  <div className="p-2 rounded-md bg-blue-500/20 text-blue-400">
                    <Map className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium block">Create Roadmap</span>
                    <span className="text-xs text-muted-foreground">Plan your execution</span>
                  </div>
                </Button>
                
                <Button className="bg-muted/50 hover:bg-muted flex items-center justify-start gap-3 h-auto py-3 px-4 border border-white/10">
                  <div className="p-2 rounded-md bg-pink-500/20 text-pink-400">
                    <Presentation className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <span className="font-medium block">Build Pitch</span>
                    <span className="text-xs text-muted-foreground">Create presentations</span>
                  </div>
                </Button>
              </div>
              
              {/* Recent projects */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Recent Projects</h2>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <div className="flex items-center text-xs text-muted-foreground gap-2">
                            <span className="flex items-center gap-1">
                              {getWorkspaceIcon(project.type)}
                              {project.type}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {project.lastUpdated}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right hidden md:block">
                          <div className="text-xs text-muted-foreground">Progress</div>
                          <div className="font-medium">{project.progress}%</div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Workspace modules */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Workspace Modules</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {workspaceModules.map((module) => (
                    <Link 
                      key={module.id}
                      to={module.link}
                      className="p-4 bg-muted/50 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className={`w-8 h-8 rounded-md ${module.color} flex items-center justify-center mb-3 ${module.textColor}`}>
                        {module.icon}
                      </div>
                      <h3 className="font-medium mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="py-8 text-center text-muted-foreground">
                Projects tab content will be displayed here
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="py-8 text-center text-muted-foreground">
                Settings tab content will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Workspace;
