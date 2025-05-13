
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3,
  LineChart,
  PieChart,
  ArrowUp,
  ArrowDown,
  Calendar,
  Users,
  DollarSign,
  Clock,
  Plus,
  Download,
  Share2
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell
} from 'recharts';
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const TractionBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // User growth data
  const userGrowthData = [
    { name: 'Jan', users: 200 },
    { name: 'Feb', users: 350 },
    { name: 'Mar', users: 550 },
    { name: 'Apr', users: 750 },
    { name: 'May', users: 1100 },
  ];
  
  // Revenue data
  const revenueData = [
    { name: 'Jan', revenue: 0 },
    { name: 'Feb', revenue: 500 },
    { name: 'Mar', revenue: 1200 },
    { name: 'Apr', revenue: 2000 },
    { name: 'May', revenue: 3500 },
  ];
  
  // Engagement data
  const engagementData = [
    { name: 'Week 1', active: 120, churn: 20 },
    { name: 'Week 2', active: 200, churn: 30 },
    { name: 'Week 3', active: 280, churn: 25 },
    { name: 'Week 4', active: 350, churn: 40 },
    { name: 'Week 5', active: 450, churn: 35 },
  ];
  
  // Feedback data
  const feedbackData = [
    { name: 'Positive', value: 65 },
    { name: 'Neutral', value: 25 },
    { name: 'Negative', value: 10 },
  ];
  
  const COLORS = ['#4ade80', '#94a3b8', '#f87171'];
  
  // Marketing channels data
  const channelsData = [
    { name: 'Organic Search', value: 40 },
    { name: 'Social Media', value: 25 },
    { name: 'Referral', value: 20 },
    { name: 'Direct', value: 15 },
  ];
  
  const CHANNEL_COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];
  
  // Key metrics cards
  const keyMetrics = [
    {
      id: 1,
      name: "Users",
      value: "1,120",
      change: "+23%",
      trend: "up",
      icon: Users
    },
    {
      id: 2,
      name: "MRR",
      value: "$3,500",
      change: "+42%",
      trend: "up",
      icon: DollarSign
    },
    {
      id: 3,
      name: "Avg. Session",
      value: "8.2 min",
      change: "+12%",
      trend: "up",
      icon: Clock
    },
    {
      id: 4,
      name: "CAC",
      value: "$25",
      change: "-8%",
      trend: "down",
      icon: DollarSign
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Traction Board</h1>
            <p className="text-muted-foreground">
              Track and analyze your startup's key metrics and growth
            </p>
          </header>
          
          <div className="mb-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-white/5">
                <Calendar className="h-4 w-4 mr-2" />
                May 2025
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Metric
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {keyMetrics.map(metric => (
              <Card key={metric.id} className="workspace-card">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">{metric.name}</span>
                      <span className="text-2xl font-bold">{metric.value}</span>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${
                      metric.trend === 'up' ? 'bg-green-500/20' : 'bg-red-500/20'
                    } flex items-center justify-center`}>
                      <metric.icon className={`h-5 w-5 ${
                        metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                      }`} />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.trend === 'up' ? (
                      <ArrowUp className="h-3 w-3 text-green-400" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-400" />
                    )}
                    <span className={`text-xs ${
                      metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change} from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="overview" 
                onClick={() => setActiveTab("overview")}
                className={activeTab === "overview" ? "tab-active" : ""}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="users" 
                onClick={() => setActiveTab("users")}
                className={activeTab === "users" ? "tab-active" : ""}
              >
                Users
              </TabsTrigger>
              <TabsTrigger 
                value="revenue" 
                onClick={() => setActiveTab("revenue")}
                className={activeTab === "revenue" ? "tab-active" : ""}
              >
                Revenue
              </TabsTrigger>
              <TabsTrigger 
                value="feedback" 
                onClick={() => setActiveTab("feedback")}
                className={activeTab === "feedback" ? "tab-active" : ""}
              >
                Feedback
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="workspace-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">User Growth</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={userGrowthData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                          <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Revenue</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={revenueData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                          <Bar dataKey="revenue" fill="#4ade80" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Feedback Sentiment</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPie width={300} height={300}>
                          <Pie
                            data={feedbackData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {feedbackData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                        </RechartsPie>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Marketing Channels</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPie width={300} height={300}>
                          <Pie
                            data={channelsData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {channelsData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={CHANNEL_COLORS[index % CHANNEL_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                        </RechartsPie>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="workspace-card mt-6">
                <CardHeader>
                  <CardTitle>Key Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-6 border-l border-white/10">
                    <div className="mb-6 relative">
                      <div className="absolute -left-9 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="font-medium">First 100 Users</h4>
                          <span className="text-xs text-muted-foreground">February 15, 2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Reached 100 active users milestone</p>
                      </div>
                    </div>
                    
                    <div className="mb-6 relative">
                      <div className="absolute -left-9 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="font-medium">First Paying Customer</h4>
                          <span className="text-xs text-muted-foreground">March 10, 2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Acquired first paying customer</p>
                      </div>
                    </div>
                    
                    <div className="mb-6 relative">
                      <div className="absolute -left-9 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="font-medium">$1K MRR</h4>
                          <span className="text-xs text-muted-foreground">April 5, 2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Reached $1,000 in monthly recurring revenue</p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-9 h-5 w-5 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white/30"></div>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h4 className="font-medium">1,000 Active Users</h4>
                          <span className="text-xs text-muted-foreground">Projected: June 15, 2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Target milestone for user growth</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="users" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="workspace-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary" />
                      <CardTitle>User Growth</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={userGrowthData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorUsers2" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                          <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUsers2)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary" />
                      <CardTitle>User Engagement</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={engagementData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorChurn" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#f87171" stopOpacity={0.8}/>
                              <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                          <Area type="monotone" dataKey="active" stroke="#4ade80" fillOpacity={1} fill="url(#colorActive)" />
                          <Area type="monotone" dataKey="churn" stroke="#f87171" fillOpacity={1} fill="url(#colorChurn)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="workspace-card mt-6">
                <CardHeader>
                  <CardTitle>User Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Age Distribution</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>18-24</span>
                            <span>15%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-primary h-full rounded-full" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>25-34</span>
                            <span>40%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-primary h-full rounded-full" style={{ width: "40%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>35-44</span>
                            <span>30%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-primary h-full rounded-full" style={{ width: "30%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>45+</span>
                            <span>15%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-primary h-full rounded-full" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Gender Distribution</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Male</span>
                            <span>55%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: "55%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Female</span>
                            <span>42%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-pink-500 h-full rounded-full" style={{ width: "42%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Other</span>
                            <span>3%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-purple-500 h-full rounded-full" style={{ width: "3%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>United States</span>
                            <span>45%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "45%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Europe</span>
                            <span>25%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Asia</span>
                            <span>20%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "20%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Other</span>
                            <span>10%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "10%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="revenue" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="workspace-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <CardTitle>Monthly Revenue</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={revenueData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                        >
                          <XAxis dataKey="name" stroke="#888888" />
                          <YAxis stroke="#888888" />
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333333" />
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                          <Bar dataKey="revenue" fill="#4ade80" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader>
                    <CardTitle>Revenue Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">Monthly Recurring Revenue (MRR)</h4>
                          <span className="text-xl font-bold">$3,500</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm text-muted-foreground mb-2">Revenue Sources</h5>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Basic Plan</span>
                                <span>$1,000</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full">
                                <div className="bg-blue-500 h-full rounded-full" style={{ width: "29%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Pro Plan</span>
                                <span>$2,000</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full">
                                <div className="bg-purple-500 h-full rounded-full" style={{ width: "57%" }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Enterprise Plan</span>
                                <span>$500</span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full">
                                <div className="bg-yellow-500 h-full rounded-full" style={{ width: "14%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-sm text-muted-foreground mb-2">Key Metrics</h5>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">ARPU</span>
                                <span className="text-sm font-medium">$29/user</span>
                              </div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">LTV</span>
                                <span className="text-sm font-medium">$450</span>
                              </div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm">CAC</span>
                                <span className="text-sm font-medium">$25</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-sm">LTV/CAC Ratio</span>
                                <span className="text-sm font-medium text-green-400">18:1</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm text-muted-foreground mb-2">Growth Projections</h5>
                        <div className="p-3 bg-white/5 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Current MRR</span>
                            <span className="text-sm font-medium">$3,500</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Projected (3 months)</span>
                            <span className="text-sm font-medium">$7,000</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Projected (6 months)</span>
                            <span className="text-sm font-medium">$15,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Projected (12 months)</span>
                            <span className="text-sm font-medium">$50,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="feedback" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="workspace-card">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" />
                      <CardTitle>Feedback Sentiment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPie width={300} height={300}>
                          <Pie
                            data={feedbackData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {feedbackData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
                        </RechartsPie>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader>
                    <CardTitle>Recent Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Alex M.</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "This product has completely transformed how I manage my startup. The AI features are incredible and save me so much time!"
                        </p>
                      </div>
                      
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Sarah J.</span>
                          <div className="flex">
                            {[1, 2, 3, 4].map(star => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                            <Star className="h-4 w-4 text-gray-500" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Great product overall. Would love to see more integrations with other tools we use in our workflow."
                        </p>
                      </div>
                      
                      <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Michael T.</span>
                          <div className="flex">
                            {[1, 2, 3].map(star => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                            {[1, 2].map(star => (
                              <Star key={star} className="h-4 w-4 text-gray-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "The dashboard is useful but took a while to understand. Could use better onboarding for new users."
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Jessica R.</span>
                          <div className="flex">
                            {[1, 2].map(star => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                            {[1, 2, 3].map(star => (
                              <Star key={star} className="h-4 w-4 text-gray-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          "Encountered several bugs when trying to export my data. Customer support was helpful but it was frustrating."
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="workspace-card mt-6">
                <CardHeader>
                  <CardTitle>Feature Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Mobile App</span>
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">32 votes</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Creating a mobile companion app for on-the-go access
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Calendar Integration</span>
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">28 votes</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Integration with Google Calendar and other calendar services
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">API Access</span>
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">21 votes</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Public API for custom integrations with other tools
                      </p>
                    </div>
                    
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Team Collaboration</span>
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">19 votes</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Enhanced team collaboration features with comments and assignments
                      </p>
                    </div>
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

export default TractionBoard;
