
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus,
  Code,
  LucideCode,
  LayoutGrid,
  Webhook,
  Boxes,
  Palette,
  Settings,
  MessageCircle,
  Globe,
  X,
  ChevronRight,
  FlameIcon,
  Zap
} from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toaster";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import { useToast } from "@/hooks/use-toast";

const MVPStudio = () => {
  const [activeTab, setActiveTab] = useState("templates");
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [templateDetailOpen, setTemplateDetailOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(true); // Mock authentication state
  const { toast: showToast } = useToast();
  
  // Check if this is the user's first visit (simulated)
  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('hasVisitedMVPStudio');
    if (!hasVisitedBefore) {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisitedMVPStudio', 'true');
    } else {
      setIsFirstVisit(false);
    }
  }, []);
  
  const templates = [
    {
      id: 1,
      name: "SaaS Dashboard",
      description: "Complete admin dashboard with authentication and analytics",
      icon: LayoutGrid,
      tech: ["React", "Tailwind", "Firebase"],
      complexity: "Medium",
      popular: true,
      features: [
        "User Authentication",
        "Dashboard Analytics",
        "Settings Management",
        "Payment Integration",
        "User Roles & Permissions"
      ]
    },
    {
      id: 2,
      name: "E-commerce Store",
      description: "Product listings, cart, checkout, and payment integration",
      icon: Boxes,
      tech: ["React", "Redux", "Stripe"],
      complexity: "High",
      fastBuild: true,
      features: [
        "Product Listings",
        "Shopping Cart",
        "Checkout Flow",
        "Payment Processing",
        "Order Management"
      ]
    },
    {
      id: 3,
      name: "Landing Page",
      description: "Conversion-optimized landing page with form capture",
      icon: Palette,
      tech: ["HTML", "CSS", "JavaScript"],
      complexity: "Low",
      features: [
        "Hero Section",
        "Features Showcase",
        "Testimonials",
        "Contact Form",
        "SEO Optimization"
      ]
    },
    {
      id: 4,
      name: "Mobile App",
      description: "React Native starter with navigation and basic screens",
      icon: Webhook,
      tech: ["React Native", "Expo"],
      complexity: "Medium",
      features: [
        "Navigation Stack",
        "Authentication Screens",
        "Profile Management",
        "Settings Screen",
        "Push Notifications Setup"
      ]
    }
  ];
  
  const codeSnippets = [
    {
      id: 1,
      name: "Authentication System",
      description: "Email/password and social login with session management",
      language: "JavaScript",
      lines: 120
    },
    {
      id: 2,
      name: "Payment Integration",
      description: "Stripe integration with checkout workflow",
      language: "TypeScript",
      lines: 85
    },
    {
      id: 3,
      name: "Database Schema",
      description: "SQL or NoSQL database structure for users and content",
      language: "SQL",
      lines: 45
    }
  ];

  const recentProjects = [
    { id: 1, name: "HealthTrack App", template: "SaaS Dashboard", lastEdited: "2 days ago" },
    { id: 2, name: "EcoShop", template: "E-commerce Store", lastEdited: "1 week ago" }
  ];

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setTemplateDetailOpen(true);
  };
  
  const handleCreateProject = () => {
    if (!isSignedIn) {
      showToast({
        title: "Authentication Required",
        description: "Please sign in to create a new project",
        variant: "destructive"
      });
      return;
    }
    
    showToast({
      title: "Project Created!",
      description: "Your new project has been set up successfully."
    });
    setNewProjectOpen(false);
  };

  const handleUseTemplate = (template) => {
    if (!isSignedIn) {
      showToast({
        title: "Authentication Required",
        description: "Please sign in to use templates",
        variant: "destructive"
      });
      return;
    }
    
    setSelectedTemplate(template);
    setTemplateDetailOpen(false);
    setNewProjectOpen(true);
  };

  // Show onboarding for first-time users
  useEffect(() => {
    if (isFirstVisit) {
      setTimeout(() => {
        showToast({
          title: "Welcome to MVP Studio!",
          description: "Choose a template to start building your MVP quickly."
        });
      }, 1000);
    }
  }, [isFirstVisit, showToast]);

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">MVP Studio</h1>
            <p className="text-muted-foreground">
              Build your MVP with AI and no-code tools
            </p>
          </header>
          
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Project Builder</h2>
            </div>
            <Button onClick={() => setNewProjectOpen(true)} className="transition-all hover:shadow-glow hover:scale-105">
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
          
          {isSignedIn && recentProjects.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Recent Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentProjects.map(project => (
                  <Card key={project.id} className="workspace-card hover:shadow-lg cursor-pointer transition-all hover:translate-y-[-2px]">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{project.name}</h4>
                          <p className="text-sm text-muted-foreground">Based on {project.template}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{project.lastEdited}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          <Tabs defaultValue="templates" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger 
                value="templates" 
                onClick={() => setActiveTab("templates")}
                className={`transition-all ${activeTab === "templates" ? "tab-active" : ""}`}
              >
                Templates
              </TabsTrigger>
              <TabsTrigger 
                value="code" 
                onClick={() => setActiveTab("code")}
                className={`transition-all ${activeTab === "code" ? "tab-active" : ""}`}
              >
                Code Generator
              </TabsTrigger>
              <TabsTrigger 
                value="nocode" 
                onClick={() => setActiveTab("nocode")}
                className={`transition-all ${activeTab === "nocode" ? "tab-active" : ""}`}
              >
                No-Code Tools
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map(template => (
                  <Card 
                    key={template.id} 
                    className="workspace-card hover:shadow-lg cursor-pointer group transition-all duration-300 hover:translate-y-[-2px]"
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardHeader className="flex flex-row items-center gap-4 relative">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <template.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>
                          {template.name}
                          {template.popular && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400">
                              <FlameIcon className="h-3 w-3 mr-1" /> Popular
                            </span>
                          )}
                          {template.fastBuild && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                              <Zap className="h-3 w-3 mr-1" /> Fast Build
                            </span>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {template.tech.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-white/10 px-2 py-1 rounded-full text-xs group-hover:bg-white/20 transition-colors"
                            title={`Built with ${tech}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Complexity: {template.complexity}
                        </span>
                        <Button 
                          size="sm" 
                          className="transition-all hover:shadow-glow"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUseTemplate(template);
                          }}
                        >
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                <Card className="workspace-card p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">AI Code Generator</h3>
                      <p className="text-muted-foreground mb-6">
                        Describe what you want to build, and our AI will generate production-ready code for your project.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Project Type</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
                            <option>Web Application</option>
                            <option>Mobile App</option>
                            <option>API Backend</option>
                            <option>Database Schema</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Technology Stack</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
                            <option>React + Node.js</option>
                            <option>Vue + Express</option>
                            <option>React Native</option>
                            <option>Flask + Python</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Describe Your Project</label>
                          <textarea 
                            className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 min-h-[120px]"
                            placeholder="Describe what you want to build..."
                          />
                        </div>
                        <Button className="w-full transition-all hover:shadow-glow">
                          <Code className="h-4 w-4 mr-2" />
                          Generate Code
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="bg-black/40 rounded-lg p-4 h-full">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-xs text-muted-foreground">main.js</span>
                        </div>
                        <div className="font-mono text-sm text-muted-foreground">
                          <p>// Your generated code will appear here</p>
                          <p className="text-primary">import React from &apos;react&apos;;</p>
                          <p>import {'{'} useState {'}'} from &apos;react&apos;;</p>
                          <p>&nbsp;</p>
                          <p className="text-primary">const App = () =&gt; {'{'}</p>
                          <p>&nbsp; // Generated components will be here</p>
                          <p>&nbsp; return (</p>
                          <p>&nbsp;&nbsp; &lt;div&gt;</p>
                          <p>&nbsp;&nbsp;&nbsp; &lt;h1&gt;My Awesome App&lt;/h1&gt;</p>
                          <p>&nbsp;&nbsp; &lt;/div&gt;</p>
                          <p>&nbsp; );</p>
                          <p>{'}'}</p>
                          <p>&nbsp;</p>
                          <p className="text-primary">export default App;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <h3 className="text-xl font-semibold mt-6 mb-4">Code Snippet Library</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {codeSnippets.map(snippet => (
                    <Card key={snippet.id} className="workspace-card hover:shadow-lg hover:translate-y-[-2px] transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <LucideCode className="h-6 w-6 text-primary" />
                          <h4 className="font-semibold">{snippet.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{snippet.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="bg-white/10 px-2 py-1 rounded">{snippet.language}</span>
                            <span>{snippet.lines} lines</span>
                          </div>
                          <Button variant="ghost" size="sm" className="hover:bg-primary/20">Use</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nocode" className="mt-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="workspace-card hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src="https://a.storyblok.com/f/172398/100x100/939763fd57/webflow-logo-1.png" 
                        alt="Webflow" 
                        className="h-12 w-12 rounded" 
                      />
                      <div>
                        <h3 className="text-xl font-medium">Webflow</h3>
                        <p className="text-sm text-muted-foreground">Visual web design platform</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Design and build responsive websites visually, with full customization and CMS capabilities.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline">Learn More</Button>
                      <Button className="transition-all hover:shadow-glow">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src="https://seeklogo.com/images/B/bubble-logo-14329FC13B-seeklogo.com.png" 
                        alt="Bubble" 
                        className="h-12 w-12 rounded" 
                      />
                      <div>
                        <h3 className="text-xl font-medium">Bubble</h3>
                        <p className="text-sm text-muted-foreground">No-code app builder</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Build web applications without code, with database, workflows, and user authentication.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline">Learn More</Button>
                      <Button className="transition-all hover:shadow-glow">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src="https://www.outsystems.com/-/media/images/logos/outsystems-branding.png" 
                        alt="OutSystems" 
                        className="h-12 w-12 rounded" 
                      />
                      <div>
                        <h3 className="text-xl font-medium">Adalo</h3>
                        <p className="text-sm text-muted-foreground">Mobile app creator</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Build native mobile apps with simple drag and drop interface and pre-built components.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline">Learn More</Button>
                      <Button className="transition-all hover:shadow-glow">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card hover:shadow-lg hover:translate-y-[-2px] transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src="https://pbs.twimg.com/profile_images/1550012547853946880/UxCBQ3Do_400x400.jpg" 
                        alt="Softr" 
                        className="h-12 w-12 rounded" 
                      />
                      <div>
                        <h3 className="text-xl font-medium">Softr</h3>
                        <p className="text-sm text-muted-foreground">Airtable-powered websites</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Build web apps and portals powered by Airtable data without writing code.
                    </p>
                    <div className="flex justify-between">
                      <Button variant="outline">Learn More</Button>
                      <Button className="transition-all hover:shadow-glow">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-4">View All Tools</Button>
                <Button className="transition-all hover:shadow-glow">Launch Builder</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Utility buttons (right side) */}
      <div className="fixed right-6 bottom-6 flex flex-col space-y-3">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-12 w-12 hover:bg-primary/20 transition-colors"
          onClick={() => setSettingsOpen(true)}
        >
          <Settings className="h-6 w-6" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-12 w-12 hover:bg-primary/20 transition-colors"
          onClick={() => setChatOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-12 w-12 hover:bg-primary/20 transition-colors"
          onClick={() => setLanguageOpen(!languageOpen)}
        >
          <Globe className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Language selection dropdown */}
      {languageOpen && (
        <div className="fixed right-20 bottom-24 bg-background border border-border rounded-lg shadow-lg p-4 w-48 animate-fade-in">
          <h4 className="font-medium mb-2">Select Language</h4>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">English</Button>
            <Button variant="ghost" className="w-full justify-start">Spanish</Button>
            <Button variant="ghost" className="w-full justify-start">French</Button>
            <Button variant="ghost" className="w-full justify-start">German</Button>
          </div>
        </div>
      )}
      
      {/* New Project Dialog */}
      <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>
              Set up your new project with the details below.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="My Awesome Project" />
            </div>
            
            <div className="grid gap-2">
              <Label>Select Template</Label>
              <div className="grid grid-cols-2 gap-2">
                {templates.map(template => (
                  <div 
                    key={template.id}
                    className={`p-3 border rounded-md cursor-pointer transition-all hover:border-primary ${
                      selectedTemplate?.id === template.id ? 'border-primary bg-primary/10' : 'border-border'
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <div className="flex items-center gap-2">
                      <template.icon className="h-5 w-5 text-primary" />
                      <span>{template.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="tech-stack">Technology Stack</Label>
              <select 
                id="tech-stack" 
                className="w-full bg-background border border-input rounded-md px-3 py-2"
              >
                <option value="react">React + Node.js</option>
                <option value="vue">Vue + Express</option>
                <option value="react-native">React Native</option>
                <option value="flask">Flask + Python</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea id="description" placeholder="Describe your project..." />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewProjectOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleCreateProject} className="transition-all hover:shadow-glow">
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Template Detail Dialog */}
      <Dialog open={templateDetailOpen} onOpenChange={setTemplateDetailOpen}>
        <DialogContent className="sm:max-w-xl">
          {selectedTemplate && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <selectedTemplate.icon className="h-5 w-5 text-primary" />
                  </div>
                  <DialogTitle>{selectedTemplate.name}</DialogTitle>
                </div>
                <DialogDescription>
                  {selectedTemplate.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="py-4">
                <h4 className="text-sm font-medium mb-2">Technology Stack</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedTemplate.tech.map((tech, index) => (
                    <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-sm font-medium mb-2">Features</h4>
                <ul className="space-y-2 mb-4">
                  {selectedTemplate.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="py-2">
                  <h4 className="text-sm font-medium mb-2">Complexity</h4>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      selectedTemplate.complexity === 'Low' ? 'bg-green-500/20 text-green-400' :
                      selectedTemplate.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {selectedTemplate.complexity}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {selectedTemplate.complexity === 'Low' ? 'Beginner friendly' :
                       selectedTemplate.complexity === 'Medium' ? 'Some experience needed' :
                       'Advanced features included'}
                    </span>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setTemplateDetailOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleUseTemplate(selectedTemplate)}
                  className="transition-all hover:shadow-glow"
                >
                  Use This Template
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Chat Assistant Drawer */}
      <Drawer open={chatOpen} onOpenChange={setChatOpen}>
        <DrawerContent className="h-[80vh]">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              MVP Assistant
            </DrawerTitle>
            <DrawerDescription>
              Ask questions about building your MVP
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2 flex-1 overflow-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-sm">Hi! I'm your MVP assistant. How can I help you build your app today?</p>
              </div>
              
              <div className="bg-primary/20 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                <p className="text-sm">How do I get started with the SaaS template?</p>
              </div>
              
              <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-[80%]">
                <p className="text-sm">Great choice! To get started with the SaaS template, simply click on "Use Template" on the SaaS Dashboard card. You'll be guided through a setup process where you can customize your project name and tech stack.</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <div className="flex gap-2">
              <Input placeholder="Type your question..." className="flex-1" />
              <Button size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m22 2-7 20-4-9-9-4Z"></path>
                  <path d="M22 2 11 13"></path>
                </svg>
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </DialogTitle>
            <DialogDescription>
              Customize your MVP Studio experience
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Theme</h4>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
              <select className="bg-background border border-input rounded-md px-3 py-1">
                <option>Dark</option>
                <option>Light</option>
                <option>System</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Default Tech Stack</h4>
                <p className="text-sm text-muted-foreground">Set your preferred technologies</p>
              </div>
              <select className="bg-background border border-input rounded-md px-3 py-1">
                <option>React + Node.js</option>
                <option>Vue + Express</option>
                <option>React Native</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Project Creation</h4>
                <p className="text-sm text-muted-foreground">Choose where projects are saved</p>
              </div>
              <select className="bg-background border border-input rounded-md px-3 py-1">
                <option>Cloud</option>
                <option>Local</option>
                <option>GitHub</option>
              </select>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>
              Cancel
            </Button>
            <Button>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* First Visit Onboarding Dialog */}
      {isFirstVisit && (
        <Dialog open={isFirstVisit} onOpenChange={setIsFirstVisit}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to MVP Studio!</DialogTitle>
              <DialogDescription>
                Let's get started building your first MVP
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="font-medium text-white">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Choose a Template</h4>
                    <p className="text-sm text-muted-foreground">Select from our pre-built templates to jumpstart your project</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Customize Your Project</h4>
                    <p className="text-sm text-muted-foreground">Modify settings and features to match your needs</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Launch Your MVP</h4>
                    <p className="text-sm text-muted-foreground">Build and deploy your project with one click</p>
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={() => setIsFirstVisit(false)}>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default MVPStudio;
