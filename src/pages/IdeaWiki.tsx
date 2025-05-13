
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Plus,
  BookOpen, 
  Edit,
  Tag,
  Clock,
  Calendar,
  FileText,
  Bookmark,
  Share2,
  Link as LinkIcon,
  Save,
  History,
  MessageSquare
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const IdeaWiki = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const wikiPages = [
    {
      id: 1,
      title: "Market Analysis",
      excerpt: "Comprehensive analysis of the target market, including size, growth trends, and key competitors.",
      tags: ["Research", "Market", "Strategy"],
      lastEdited: "Yesterday",
      author: "Alex Johnson",
      icon: "📊"
    },
    {
      id: 2,
      title: "User Personas",
      excerpt: "Detailed profiles of target user segments, including demographics, needs, and pain points.",
      tags: ["UX", "Research", "Product"],
      lastEdited: "2 days ago",
      author: "Sarah Chen",
      icon: "👤"
    },
    {
      id: 3,
      title: "Product Requirements",
      excerpt: "Specifications and feature requirements for the minimum viable product (MVP).",
      tags: ["Product", "Technical", "MVP"],
      lastEdited: "Last week",
      author: "Michael Rodriguez",
      icon: "📋"
    },
    {
      id: 4,
      title: "Business Model Canvas",
      excerpt: "Business model breakdown including value proposition, customer segments, and revenue streams.",
      tags: ["Business", "Strategy", "Finance"],
      lastEdited: "2 weeks ago",
      author: "Alex Johnson",
      icon: "💼"
    },
    {
      id: 5,
      title: "Technical Architecture",
      excerpt: "Overview of the system architecture, technology stack, and development approach.",
      tags: ["Technical", "Development", "Infrastructure"],
      lastEdited: "Yesterday",
      author: "Sarah Chen",
      icon: "🏗️"
    },
    {
      id: 6,
      title: "Marketing Strategy",
      excerpt: "Customer acquisition channels, marketing tactics, and growth strategies.",
      tags: ["Marketing", "Growth", "Strategy"],
      lastEdited: "3 days ago",
      author: "Alex Johnson",
      icon: "📣"
    }
  ];
  
  const recentActivity = [
    {
      id: 1,
      type: "edit",
      page: "Market Analysis",
      user: "Alex Johnson",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "create",
      page: "Technical Architecture",
      user: "Sarah Chen",
      time: "Yesterday"
    },
    {
      id: 3,
      type: "comment",
      page: "User Personas",
      user: "Michael Rodriguez",
      time: "2 days ago"
    },
    {
      id: 4,
      type: "edit",
      page: "Business Model Canvas",
      user: "Alex Johnson",
      time: "3 days ago"
    }
  ];

  // Sample content for a wiki page
  const sampleContent = `
  # Market Analysis

  ## Overview
  This document provides a comprehensive analysis of the market opportunity for our startup, including market size, growth trends, and competitive landscape.

  ## Market Size
  The global market size for this industry is estimated at $50 billion, with a projected CAGR of 15% over the next five years.

  ## Target Segments
  1. **Small and Medium Businesses**
     - Estimated 5 million potential customers
     - Currently underserved by existing solutions
  
  2. **Enterprise Clients**
     - Higher value but longer sales cycle
     - Requires more customization and support

  ## Competitive Landscape
  | Competitor | Strengths | Weaknesses |
  |------------|-----------|------------|
  | CompanyA | Strong brand, large customer base | Outdated technology, poor UX |
  | CompanyB | Technical innovation, modern stack | Limited market reach, high prices |
  | CompanyC | Low cost, easy adoption | Limited features, poor support |

  ## Key Differentiators
  - AI-powered insights not available from competitors
  - Seamless integration with existing tools
  - Significantly lower cost structure
  - Superior user experience and modern interface

  ## Market Entry Strategy
  Our initial go-to-market strategy will focus on SMBs in the following industries:
  - Professional services
  - E-commerce
  - SaaS businesses

  ## References
  - Industry Report 2025 by Research Firm
  - Expert interviews with 15 potential customers
  - Competitor analysis (see attached spreadsheet)
  `;

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Idea Wiki</h1>
            <p className="text-muted-foreground">
              Build a knowledge base and document your startup journey
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                className="w-full pl-10 bg-white/5 border border-white/10 rounded-md px-3 py-2"
                placeholder="Search wiki pages..."
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Tag className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Page
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
                All Pages
              </TabsTrigger>
              <TabsTrigger 
                value="recent" 
                onClick={() => setActiveTab("recent")}
                className={activeTab === "recent" ? "tab-active" : ""}
              >
                Recently Edited
              </TabsTrigger>
              <TabsTrigger 
                value="bookmarks" 
                onClick={() => setActiveTab("bookmarks")}
                className={activeTab === "bookmarks" ? "tab-active" : ""}
              >
                Bookmarks
              </TabsTrigger>
              <TabsTrigger 
                value="activity" 
                onClick={() => setActiveTab("activity")}
                className={activeTab === "activity" ? "tab-active" : ""}
              >
                Activity
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wikiPages.map(page => (
                  <Card key={page.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{page.icon}</div>
                          <CardTitle>{page.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{page.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {page.tags.map((tag, index) => (
                          <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Edited {page.lastEdited}</span>
                        </div>
                        <span>By {page.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-[240px]">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Create New Wiki Page</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Document your ideas, research, and plans
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wikiPages.slice(0, 4).map(page => (
                  <Card key={page.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{page.icon}</div>
                          <CardTitle>{page.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{page.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {page.tags.map((tag, index) => (
                          <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Edited {page.lastEdited}</span>
                        </div>
                        <span>By {page.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bookmarks" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wikiPages.slice(2, 4).map(page => (
                  <Card key={page.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">{page.icon}</div>
                          <CardTitle>{page.title}</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4 text-primary fill-primary" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{page.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {page.tags.map((tag, index) => (
                          <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Edited {page.lastEdited}</span>
                        </div>
                        <span>By {page.author}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-6">
              <Card className="workspace-card">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map(activity => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          activity.type === 'edit' ? 'bg-blue-500/20' : 
                          activity.type === 'create' ? 'bg-green-500/20' : 'bg-yellow-500/20'
                        }`}>
                          {activity.type === 'edit' && <Edit className="h-4 w-4" />}
                          {activity.type === 'create' && <Plus className="h-4 w-4" />}
                          {activity.type === 'comment' && <MessageSquare className="h-4 w-4" />}
                        </div>
                        <div className="flex-grow">
                          <p>
                            <span className="font-medium">{activity.user}</span>
                            {activity.type === 'edit' && <span> edited </span>}
                            {activity.type === 'create' && <span> created </span>}
                            {activity.type === 'comment' && <span> commented on </span>}
                            <span className="font-medium">{activity.page}</span>
                          </p>
                          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card className="workspace-card mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📊</div>
                  <CardTitle>Market Analysis</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <History className="h-4 w-4" />
                  </Button>
                  <Button size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Last edited: Yesterday</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>By: Alex Johnson</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="w-3/4">
                  <div className="prose prose-invert max-w-none">
                    <div className="bg-white/5 p-6 rounded-lg mb-6 border border-white/10">
                      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                      <ul className="space-y-1 list-disc pl-5">
                        <li><a href="#" className="text-primary hover:underline">Overview</a></li>
                        <li><a href="#" className="text-primary hover:underline">Market Size</a></li>
                        <li><a href="#" className="text-primary hover:underline">Target Segments</a></li>
                        <li><a href="#" className="text-primary hover:underline">Competitive Landscape</a></li>
                        <li><a href="#" className="text-primary hover:underline">Key Differentiators</a></li>
                        <li><a href="#" className="text-primary hover:underline">Market Entry Strategy</a></li>
                        <li><a href="#" className="text-primary hover:underline">References</a></li>
                      </ul>
                    </div>
                    
                    <div className="space-y-6 whitespace-pre-wrap font-mono text-sm">
                      {sampleContent}
                    </div>
                  </div>
                </div>
                
                <div className="w-1/4">
                  <div className="space-y-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Research</span>
                        <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Market</span>
                        <span className="bg-white/10 px-2 py-1 rounded-full text-xs">Strategy</span>
                        <Button variant="ghost" size="sm" className="h-6 gap-1 text-xs">
                          <Plus className="h-3 w-3" />
                          Add
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium mb-3">Linked Pages</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-3 w-3 text-muted-foreground" />
                          <a href="#" className="text-sm text-primary hover:underline">Business Model Canvas</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-3 w-3 text-muted-foreground" />
                          <a href="#" className="text-sm text-primary hover:underline">User Personas</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <LinkIcon className="h-3 w-3 text-muted-foreground" />
                          <a href="#" className="text-sm text-primary hover:underline">Marketing Strategy</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <h4 className="font-medium mb-3">Contributors</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs">AJ</span>
                          </div>
                          <span className="text-sm">Alex Johnson</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-xs">SC</span>
                          </div>
                          <span className="text-sm">Sarah Chen</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      <Save className="h-4 w-4 mr-2" />
                      Export as PDF
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default IdeaWiki;
