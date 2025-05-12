
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Plus,
  Filter,
  ThumbsUp,
  MessageSquare,
  Tag,
  Lightbulb
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const IdeaVault = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const ideas = [
    {
      id: 1,
      title: "HealthTrack App",
      description: "A fitness tracking app specifically designed for seniors with simplified UI and health monitoring features.",
      tags: ["Health", "Mobile App", "Seniors"],
      votes: 12,
      comments: 5,
      status: "validated"
    },
    {
      id: 2,
      title: "EcoMarket",
      description: "Marketplace for sustainable goods with carbon footprint tracking and eco-friendly product verification.",
      tags: ["Marketplace", "Sustainability", "E-commerce"],
      votes: 8,
      comments: 3,
      status: "exploring"
    },
    {
      id: 3,
      title: "CodeBuddy",
      description: "AI pair programming assistant that helps developers with code reviews and suggestions in real-time.",
      tags: ["AI", "Developer Tools", "Productivity"],
      votes: 15,
      comments: 7,
      status: "validated"
    },
    {
      id: 4,
      title: "RemoteTeam",
      description: "Virtual workspace platform for remote teams with asynchronous collaboration tools.",
      tags: ["Remote Work", "Collaboration", "SaaS"],
      votes: 6,
      comments: 2,
      status: "exploring"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Idea Vault</h1>
            <p className="text-muted-foreground">
              Store, organize, and validate your startup ideas
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search ideas..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Idea
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "tab-active" : ""}
              >
                All Ideas
              </TabsTrigger>
              <TabsTrigger 
                value="validated" 
                onClick={() => setActiveTab("validated")}
                className={activeTab === "validated" ? "tab-active" : ""}
              >
                Validated
              </TabsTrigger>
              <TabsTrigger 
                value="exploring" 
                onClick={() => setActiveTab("exploring")}
                className={activeTab === "exploring" ? "tab-active" : ""}
              >
                Exploring
              </TabsTrigger>
              <TabsTrigger 
                value="archived" 
                onClick={() => setActiveTab("archived")}
                className={activeTab === "archived" ? "tab-active" : ""}
              >
                Archived
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.map(idea => (
                  <Card key={idea.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <CardTitle>{idea.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{idea.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag, index) => (
                          <div key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between pt-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{idea.votes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{idea.comments}</span>
                        </div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs uppercase ${
                            idea.status === 'validated' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                          }`}>
                            {idea.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Add New Idea</p>
                    <p className="text-sm text-muted-foreground">Capture your next big thing</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="validated" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.filter(i => i.status === "validated").map(idea => (
                  <Card key={idea.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <CardTitle>{idea.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{idea.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag, index) => (
                          <div key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between pt-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{idea.votes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{idea.comments}</span>
                        </div>
                        <div>
                          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs uppercase">
                            {idea.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="exploring" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.filter(i => i.status === "exploring").map(idea => (
                  <Card key={idea.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <CardTitle>{idea.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{idea.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag, index) => (
                          <div key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between pt-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{idea.votes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{idea.comments}</span>
                        </div>
                        <div>
                          <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-xs uppercase">
                            {idea.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="archived" className="mt-6">
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-white/5 p-6 rounded-full mb-4">
                  <Lightbulb className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No Archived Ideas</h3>
                <p className="text-muted-foreground mb-6">You haven't archived any ideas yet</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default IdeaVault;
