
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  ExternalLink,
  MapPin,
  Briefcase,
  DollarSign,
  BarChart,
  Star,
  Mail,
  Calendar,
  Plus
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const InvestorRadar = () => {
  const [activeTab, setActiveTab] = useState("investors");
  
  const investors = [
    {
      id: 1,
      name: "Sequoia Capital",
      description: "Global venture capital firm focused on technology and healthcare.",
      logo: "S",
      locations: ["Silicon Valley", "New York", "London", "Beijing"],
      sectors: ["SaaS", "Fintech", "Healthcare", "AI"],
      stages: ["Seed", "Series A", "Series B", "Growth"],
      ticketSize: "$1M - $50M",
      portfolioCompanies: ["Apple", "Google", "Stripe", "Airbnb"],
      match: 92
    },
    {
      id: 2,
      name: "Y Combinator",
      description: "Seed accelerator that invests in a large number of startups twice a year.",
      logo: "YC",
      locations: ["Silicon Valley", "Remote"],
      sectors: ["SaaS", "Marketplace", "Consumer", "B2B"],
      stages: ["Pre-seed", "Seed"],
      ticketSize: "$125K - $500K",
      portfolioCompanies: ["Airbnb", "Dropbox", "Stripe", "Reddit"],
      match: 87
    },
    {
      id: 3,
      name: "Andreessen Horowitz",
      description: "Stage-agnostic venture capital firm that invests in technology companies.",
      logo: "a16z",
      locations: ["Silicon Valley", "New York", "Remote"],
      sectors: ["Fintech", "Crypto", "Enterprise", "Gaming"],
      stages: ["Seed", "Series A", "Series B", "Growth"],
      ticketSize: "$3M - $100M",
      portfolioCompanies: ["Facebook", "Coinbase", "GitHub", "Figma"],
      match: 79
    },
    {
      id: 4,
      name: "First Round Capital",
      description: "Seed-stage venture firm focused on building companies from day one.",
      logo: "FRC",
      locations: ["San Francisco", "New York", "Philadelphia"],
      sectors: ["Healthcare", "Enterprise", "Consumer", "Marketplace"],
      stages: ["Pre-seed", "Seed"],
      ticketSize: "$500K - $3M",
      portfolioCompanies: ["Uber", "Square", "Warby Parker", "Notion"],
      match: 85
    }
  ];
  
  const meetings = [
    {
      id: 1,
      investor: "Sequoia Capital",
      contact: "Sarah Thompson",
      date: "May 20, 2025",
      time: "2:00 PM",
      status: "scheduled",
      notes: "Prepare pitch deck focused on market expansion strategy."
    },
    {
      id: 2,
      investor: "Y Combinator",
      contact: "Michael Chen",
      date: "May 25, 2025",
      time: "10:30 AM",
      status: "confirmed",
      notes: "Demo ready. Focus on traction and growth metrics."
    },
    {
      id: 3,
      investor: "First Round Capital",
      contact: "Jessica Williams",
      date: "June 3, 2025",
      time: "1:15 PM",
      status: "pending",
      notes: "Initial intro call. Prepare 5-minute company overview."
    }
  ];
  
  const pitchMaterials = [
    {
      id: 1,
      name: "Investor Pitch Deck",
      type: "Presentation",
      lastUpdated: "Yesterday",
      slides: 15,
      status: "Ready"
    },
    {
      id: 2,
      name: "Financial Projections",
      type: "Spreadsheet",
      lastUpdated: "3 days ago",
      slides: "N/A",
      status: "Ready"
    },
    {
      id: 3,
      name: "Technical Deep Dive",
      type: "Document",
      lastUpdated: "Last week",
      slides: 5,
      status: "Needs Update"
    },
    {
      id: 4,
      name: "Product Demo Video",
      type: "Video",
      lastUpdated: "2 weeks ago",
      slides: "N/A",
      status: "Ready"
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
              Find and connect with the right investors for your startup
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                className="w-full pl-10 bg-white/5 border border-white/10 rounded-md px-3 py-2"
                placeholder="Search for investors..."
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
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
                value="meetings" 
                onClick={() => setActiveTab("meetings")}
                className={activeTab === "meetings" ? "tab-active" : ""}
              >
                Meetings
              </TabsTrigger>
              <TabsTrigger 
                value="pitch-materials" 
                onClick={() => setActiveTab("pitch-materials")}
                className={activeTab === "pitch-materials" ? "tab-active" : ""}
              >
                Pitch Materials
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="investors" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {investors.map(investor => (
                  <Card key={investor.id} className="workspace-card hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                      <div className="md:w-3/4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-lg font-bold">
                            {investor.logo}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{investor.name}</h3>
                            <p className="text-sm text-muted-foreground">{investor.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Locations</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {investor.locations.map((location, idx) => (
                                <span 
                                  key={idx} 
                                  className="bg-white/10 px-2 py-1 rounded-full text-xs"
                                >
                                  {location}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Sectors</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {investor.sectors.map((sector, idx) => (
                                <span 
                                  key={idx} 
                                  className="bg-white/10 px-2 py-1 rounded-full text-xs"
                                >
                                  {sector}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <BarChart className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Stages</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {investor.stages.map((stage, idx) => (
                                <span 
                                  key={idx} 
                                  className="bg-white/10 px-2 py-1 rounded-full text-xs"
                                >
                                  {stage}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Ticket Size</span>
                            </div>
                            <p className="text-sm">{investor.ticketSize}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <Star className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Notable Portfolio</span>
                            </div>
                            <p className="text-sm">{investor.portfolioCompanies.join(", ")}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-1/4 flex flex-col justify-between border-l border-white/10 pl-6">
                        <div className="mb-4">
                          <div className="text-center mb-2">
                            <span className="text-2xl font-bold text-primary">{investor.match}%</span>
                            <p className="text-xs text-muted-foreground">Match Score</p>
                          </div>
                          <div className="h-2 bg-white/10 rounded overflow-hidden mb-1">
                            <div 
                              className="bg-primary h-full rounded" 
                              style={{ width: `${investor.match}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Button className="w-full">
                            <Mail className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Website
                          </Button>
                          <Button variant="ghost" className="w-full">Save</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="meetings" className="mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Upcoming Meetings</h2>
                <Button>
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
              </div>
              
              <div className="space-y-4">
                {meetings.map(meeting => (
                  <Card key={meeting.id} className="workspace-card">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{meeting.investor}</h3>
                          <p className="text-sm text-muted-foreground">Contact: {meeting.contact}</p>
                          
                          <div className="flex items-center gap-3 mt-2">
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{meeting.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{meeting.time}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3 bg-white/5 p-2 rounded text-sm">
                            <p className="font-medium mb-1">Notes:</p>
                            <p className="text-muted-foreground">{meeting.notes}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 flex flex-col items-end">
                          <span className={`px-2 py-1 rounded-full text-xs uppercase ${
                            meeting.status === 'confirmed' ? 'bg-green-500/20 text-green-300' : 
                            meeting.status === 'pending' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-blue-500/20 text-blue-300'
                          }`}>
                            {meeting.status}
                          </span>
                          
                          <div className="flex gap-2 mt-4">
                            <Button variant="outline" size="sm">Reschedule</Button>
                            <Button size="sm">Prepare</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Meeting
                </Button>
              </div>
              
              <Card className="workspace-card mt-8">
                <CardHeader>
                  <CardTitle>Meeting Preparation Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check1" className="rounded bg-white/5 border-white/20" />
                      <label htmlFor="check1" className="text-sm">Update pitch deck with latest traction</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check2" className="rounded bg-white/5 border-white/20" />
                      <label htmlFor="check2" className="text-sm">Research investor's portfolio companies</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check3" className="rounded bg-white/5 border-white/20" />
                      <label htmlFor="check3" className="text-sm">Prepare answers to common questions</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check4" className="rounded bg-white/5 border-white/20" />
                      <label htmlFor="check4" className="text-sm">Review financial projections</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check5" className="rounded bg-white/5 border-white/20" />
                      <label htmlFor="check5" className="text-sm">Prepare product demo</label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pitch-materials" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pitchMaterials.map(material => (
                  <Card key={material.id} className="workspace-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-lg">{material.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">
                              {material.type}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Updated {material.lastUpdated}
                            </span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          material.status === 'Ready' ? 'bg-green-500/20 text-green-300' : 
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {material.status}
                        </span>
                      </div>
                      
                      <div className="bg-white/5 h-32 rounded flex items-center justify-center mb-4">
                        {material.type === "Presentation" && (
                          <div className="text-4xl">📊</div>
                        )}
                        {material.type === "Spreadsheet" && (
                          <div className="text-4xl">📈</div>
                        )}
                        {material.type === "Document" && (
                          <div className="text-4xl">📄</div>
                        )}
                        {material.type === "Video" && (
                          <div className="text-4xl">🎥</div>
                        )}
                      </div>
                      
                      <div className="flex justify-between">
                        <Button variant="ghost" size="sm">Preview</Button>
                        <div>
                          <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                          <Button size="sm">Download</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Create New Material</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Add a new investor pitch material
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="workspace-card mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">AI Pitch Assistant</h3>
                      <p className="text-sm text-muted-foreground">Get AI-powered help with your investor pitch</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <span>Improve your deck with AI feedback</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <span>Generate investor-specific talking points</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <span>Practice Q&A with AI investor simulation</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default InvestorRadar;
