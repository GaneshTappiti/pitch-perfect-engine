
import React, { useState } from "react";
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
  Palette
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const MVPStudio = () => {
  const [activeTab, setActiveTab] = useState("templates");
  
  const templates = [
    {
      id: 1,
      name: "SaaS Dashboard",
      description: "Complete admin dashboard with authentication and analytics",
      icon: LayoutGrid,
      tech: ["React", "Tailwind", "Firebase"],
      complexity: "Medium"
    },
    {
      id: 2,
      name: "E-commerce Store",
      description: "Product listings, cart, checkout, and payment integration",
      icon: Boxes,
      tech: ["React", "Redux", "Stripe"],
      complexity: "High"
    },
    {
      id: 3,
      name: "Landing Page",
      description: "Conversion-optimized landing page with form capture",
      icon: Palette,
      tech: ["HTML", "CSS", "JavaScript"],
      complexity: "Low"
    },
    {
      id: 4,
      name: "Mobile App",
      description: "React Native starter with navigation and basic screens",
      icon: Webhook,
      tech: ["React Native", "Expo"],
      complexity: "Medium"
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
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>
          
          <Tabs defaultValue="templates" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="templates" 
                onClick={() => setActiveTab("templates")}
                className={activeTab === "templates" ? "tab-active" : ""}
              >
                Templates
              </TabsTrigger>
              <TabsTrigger 
                value="code" 
                onClick={() => setActiveTab("code")}
                className={activeTab === "code" ? "tab-active" : ""}
              >
                Code Generator
              </TabsTrigger>
              <TabsTrigger 
                value="nocode" 
                onClick={() => setActiveTab("nocode")}
                className={activeTab === "nocode" ? "tab-active" : ""}
              >
                No-Code Tools
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map(template => (
                  <Card key={template.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <template.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{template.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {template.tech.map((tech, index) => (
                          <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Complexity: {template.complexity}
                        </span>
                        <Button size="sm">Use Template</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="mt-6">
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
                        <Button className="w-full">
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
                          <p className="text-primary">import React from 'react';</p>
                          <p>import &#123; useState &#125; from 'react';</p>
                          <p>&nbsp;</p>
                          <p className="text-primary">const App = () => &#123;</p>
                          <p>&nbsp; // Generated components will be here</p>
                          <p>&nbsp; return (</p>
                          <p>&nbsp;&nbsp; &lt;div&gt;</p>
                          <p>&nbsp;&nbsp;&nbsp; &lt;h1&gt;My Awesome App&lt;/h1&gt;</p>
                          <p>&nbsp;&nbsp; &lt;/div&gt;</p>
                          <p>&nbsp; );</p>
                          <p>&#125;</p>
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
                    <Card key={snippet.id} className="workspace-card">
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
                          <Button variant="ghost" size="sm">Use</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="nocode" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="workspace-card">
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
                      <Button>Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
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
                      <Button>Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
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
                      <Button>Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
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
                      <Button>Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-4">View All Tools</Button>
                <Button>Launch Builder</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default MVPStudio;
