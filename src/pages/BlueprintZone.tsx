
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus,
  Flag,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const BlueprintZone = () => {
  const [activeTab, setActiveTab] = useState("roadmap");
  
  const phases = [
    {
      id: "research",
      title: "Research",
      description: "Market research and idea validation",
      tasks: [
        { id: 1, title: "Conduct competitive analysis", status: "completed" },
        { id: 2, title: "Create user personas", status: "in-progress" },
        { id: 3, title: "Define value proposition", status: "pending" }
      ],
      duration: "2 weeks",
      progress: 60
    },
    {
      id: "design",
      title: "Design",
      description: "UI/UX design and prototyping",
      tasks: [
        { id: 4, title: "Create wireframes", status: "pending" },
        { id: 5, title: "Design UI components", status: "pending" },
        { id: 6, title: "Usability testing", status: "pending" }
      ],
      duration: "3 weeks",
      progress: 0
    },
    {
      id: "development",
      title: "Development",
      description: "Building the MVP",
      tasks: [
        { id: 7, title: "Set up development environment", status: "pending" },
        { id: 8, title: "Implement core features", status: "pending" },
        { id: 9, title: "Testing and debugging", status: "pending" }
      ],
      duration: "6 weeks",
      progress: 0
    },
    {
      id: "launch",
      title: "Launch",
      description: "Product launch and marketing",
      tasks: [
        { id: 10, title: "Prepare marketing materials", status: "pending" },
        { id: 11, title: "Set up analytics", status: "pending" },
        { id: 12, title: "Launch product", status: "pending" }
      ],
      duration: "2 weeks",
      progress: 0
    }
  ];
  
  const milestones = [
    { id: 1, title: "MVP Completion", date: "July 30, 2025", status: "pending" },
    { id: 2, title: "Beta Launch", date: "August 15, 2025", status: "pending" },
    { id: 3, title: "First 100 Users", date: "September 1, 2025", status: "pending" },
    { id: 4, title: "Product Market Fit", date: "October 15, 2025", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Blueprint Zone</h1>
            <p className="text-muted-foreground">
              Create detailed roadmaps and strategic plans for your startup
            </p>
          </header>
          
          <Tabs defaultValue="roadmap" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="roadmap" 
                onClick={() => setActiveTab("roadmap")}
                className={activeTab === "roadmap" ? "tab-active" : ""}
              >
                Roadmap
              </TabsTrigger>
              <TabsTrigger 
                value="milestones" 
                onClick={() => setActiveTab("milestones")}
                className={activeTab === "milestones" ? "tab-active" : ""}
              >
                Milestones
              </TabsTrigger>
              <TabsTrigger 
                value="timeline" 
                onClick={() => setActiveTab("timeline")}
                className={activeTab === "timeline" ? "tab-active" : ""}
              >
                Timeline
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmap" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Product Roadmap</h2>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Phase
                </Button>
              </div>
              
              <div className="space-y-6">
                {phases.map((phase, index) => (
                  <Card key={phase.id} className="workspace-card">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          Phase {index + 1}: {phase.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{phase.duration}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Progress: {phase.progress}%
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {phase.tasks.map(task => (
                          <div key={task.id} className="flex justify-between items-center p-3 bg-white/5 rounded-md">
                            <div className="flex items-center gap-2">
                              <div className={`rounded-full w-5 h-5 flex items-center justify-center ${
                                task.status === 'completed' ? 'bg-green-500' : 
                                task.status === 'in-progress' ? 'bg-yellow-500' : 'bg-white/10'
                              }`}>
                                {task.status === 'completed' && <CheckCircle className="h-4 w-4 text-white" />}
                              </div>
                              <span>{task.title}</span>
                            </div>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </div>
                        ))}
                        <Button variant="ghost" className="w-full justify-center">
                          <Plus className="h-4 w-4 mr-1" />
                          Add Task
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="milestones" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Key Milestones</h2>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Milestone
                </Button>
              </div>
              
              <div className="grid gap-4">
                {milestones.map(milestone => (
                  <Card key={milestone.id} className="workspace-card">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <Flag className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Mark Complete</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="timeline" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Timeline View</h2>
                <Button size="sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Change View
                </Button>
              </div>
              
              <Card className="workspace-card p-6">
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-4">Timeline Visualization</h3>
                  <p className="text-muted-foreground mb-6">Interactive timeline view coming soon</p>
                  <Button>Generate Timeline</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default BlueprintZone;
