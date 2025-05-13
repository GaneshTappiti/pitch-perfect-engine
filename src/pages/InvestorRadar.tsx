
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter,
  Plus,
  Building,
  Calendar,
  ArrowUpRight,
  Briefcase,
  BarChart3,
  Clock as ClockIcon
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const InvestorRadar = () => {
  const [activeTab, setActiveTab] = useState("investors");
  
  const investors = [
    {
      id: 1,
      name: "Sequoia Capital",
      focus: "B2B SaaS, Consumer Tech",
      portfolio: 420,
      stage: "Series A-C",
      lastMeeting: "2 weeks ago",
      status: "interested"
    },
    {
      id: 2,
      name: "Andreessen Horowitz",
      focus: "Fintech, AI/ML",
      portfolio: 510,
      stage: "Seed-Series B",
      lastMeeting: "1 month ago",
      status: "follow-up"
    },
    {
      id: 3,
      name: "Y Combinator",
      focus: "Early Stage Startups",
      portfolio: 3000,
      stage: "Pre-seed, Seed",
      lastMeeting: "Never",
      status: "to-contact"
    },
    {
      id: 4,
      name: "Accel Partners",
      focus: "Enterprise Software, Cybersecurity",
      portfolio: 380,
      stage: "Series A-B",
      lastMeeting: "3 months ago",
      status: "follow-up"
    }
  ];
  
  const fundingRounds = [
    {
      id: 1,
      name: "Seed Round",
      target: "$500K",
      raised: "$350K",
      progress: 70,
      investors: 4,
      status: "active"
    },
    {
      id: 2,
      name: "Series A",
      target: "$2M",
      raised: "$0",
      progress: 0,
      investors: 0,
      status: "planned"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Investor Radar</h1>
            <p className="text-muted-foreground">
              Track investors, manage relationships, and plan fundraising activities
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search investors..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Investor
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="investors" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="investors" 
                onClick={() => setActiveTab("investors")}
                className={activeTab === "investors" ? "tab-active" : ""}
              >
                Investors
              </TabsTrigger>
              <TabsTrigger 
                value="funding" 
                onClick={() => setActiveTab("funding")}
                className={activeTab === "funding" ? "tab-active" : ""}
              >
                Funding Rounds
              </TabsTrigger>
              <TabsTrigger 
                value="pitchdeck" 
                onClick={() => setActiveTab("pitchdeck")}
                className={activeTab === "pitchdeck" ? "tab-active" : ""}
              >
                Pitch Deck
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="investors" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {investors.map(investor => (
                  <Card key={investor.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{investor.name}</span>
                        <span className={`px-2 py-1 rounded text-xs uppercase ${
                          investor.status === 'interested' ? 'bg-green-500/20 text-green-300' : 
                          investor.status === 'follow-up' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {investor.status}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Focus</p>
                          <p className="font-medium">{investor.focus}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Portfolio</p>
                          <p className="font-medium">{investor.portfolio} companies</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Stage</p>
                          <p className="font-medium">{investor.stage}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Meeting</p>
                          <p className="font-medium">{investor.lastMeeting}</p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">Log Contact</Button>
                        <Button size="sm">View Profile</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-primary/20 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Add New Investor</p>
                    <p className="text-sm text-muted-foreground">Track a potential funding source</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="funding" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fundingRounds.map(round => (
                  <Card key={round.id} className="workspace-card">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{round.name}</span>
                        <span className={`px-2 py-1 rounded text-xs uppercase ${
                          round.status === 'active' ? 'bg-green-500/20 text-green-300' : 
                          'bg-blue-500/20 text-blue-300'
                        }`}>
                          {round.status}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-md">
                        <div className="flex justify-between mb-2">
                          <span>Progress</span>
                          <span>{round.raised} / {round.target}</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded overflow-hidden">
                          <div 
                            className="h-full bg-primary" 
                            style={{ width: `${round.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Investors</p>
                            <p className="font-medium">{round.investors}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="text-sm text-muted-foreground">Timeline</p>
                            <p className="font-medium">3 months</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button size="sm">Manage Round</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="rounded-full bg-primary/20 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Create New Funding Round</p>
                    <p className="text-sm text-muted-foreground">Plan your next fundraising effort</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="pitchdeck" className="mt-6">
              <Card className="workspace-card p-6">
                <div className="text-center py-16">
                  <div className="rounded-full bg-primary/20 p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                    <ArrowUpRight className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Create Your Pitch Deck</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Generate a professional investor presentation based on your startup data
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline">Import Template</Button>
                    <Button>Create New Deck</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default InvestorRadar;
