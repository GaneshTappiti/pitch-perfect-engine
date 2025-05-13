
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  LineChart,
  Activity,
  Users,
  DollarSign,
  ArrowUpRight,
  Calendar,
  Filter,
  Download,
  Star as StarIcon
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const TractionBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("30d");
  
  const metrics = [
    {
      id: "users",
      name: "Active Users",
      value: "2,543",
      change: "+12.5%",
      trend: "up"
    },
    {
      id: "revenue",
      name: "Monthly Revenue",
      value: "$8,350",
      change: "+23.1%",
      trend: "up"
    },
    {
      id: "conversion",
      name: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      trend: "up"
    },
    {
      id: "churn",
      name: "Churn Rate",
      value: "2.1%",
      change: "-0.5%",
      trend: "down"
    }
  ];

  const acquisitionData = [
    { source: "Organic Search", users: 845, conversion: "3.8%", status: "increasing" },
    { source: "Direct", users: 684, conversion: "2.9%", status: "stable" },
    { source: "Social Media", users: 542, conversion: "2.4%", status: "increasing" },
    { source: "Referral", users: 491, conversion: "4.7%", status: "increasing" },
    { source: "Paid Ads", users: 352, conversion: "3.1%", status: "decreasing" }
  ];
  
  const behaviorData = [
    { page: "Homepage", views: 4256, avgTime: "01:23", bounceRate: "32%" },
    { page: "Features", views: 3120, avgTime: "02:17", bounceRate: "27%" },
    { page: "Pricing", views: 2845, avgTime: "01:58", bounceRate: "24%" },
    { page: "Blog", views: 1976, avgTime: "03:42", bounceRate: "38%" },
    { page: "Sign Up", views: 1654, avgTime: "00:45", bounceRate: "21%" }
  ];
  
  const reviewsData = [
    { 
      id: 1, 
      name: "Sarah L.", 
      date: "June 12, 2025", 
      rating: 5, 
      content: "This product has completely transformed how our team collaborates. Highly recommend!"
    },
    { 
      id: 2, 
      name: "Michael T.", 
      date: "May 28, 2025", 
      rating: 4, 
      content: "Great product with intuitive features. Still missing some export capabilities we'd like to see."
    },
    { 
      id: 3, 
      name: "Jennifer R.", 
      date: "May 15, 2025", 
      rating: 5, 
      content: "Customer support is phenomenal. Any issues we've had were resolved immediately."
    },
    { 
      id: 4, 
      name: "David K.", 
      date: "April 29, 2025", 
      rating: 3, 
      content: "Good product overall but the learning curve was steeper than expected."
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
              Monitor key metrics and track your startup's growth
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={dateRange === "7d" ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange("7d")}
              >
                7D
              </Button>
              <Button
                variant={dateRange === "30d" ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange("30d")}
              >
                30D
              </Button>
              <Button
                variant={dateRange === "90d" ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange("90d")}
              >
                90D
              </Button>
              <Button
                variant={dateRange === "1y" ? "default" : "outline"}
                size="sm"
                onClick={() => setDateRange("1y")}
              >
                1Y
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-1" />
                Custom
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {metrics.map(metric => (
              <Card key={metric.id} className="workspace-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.name}</p>
                      <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs flex items-center ${
                      metric.trend === 'up' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                    }`}>
                      {metric.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowUpRight className="h-3 w-3 mr-1 transform rotate-180" />}
                      {metric.change}
                    </div>
                  </div>
                  <div className="mt-4 h-10">
                    <Activity className="h-full w-full text-primary/50" />
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
                value="acquisition" 
                onClick={() => setActiveTab("acquisition")}
                className={activeTab === "acquisition" ? "tab-active" : ""}
              >
                Acquisition
              </TabsTrigger>
              <TabsTrigger 
                value="behavior" 
                onClick={() => setActiveTab("behavior")}
                className={activeTab === "behavior" ? "tab-active" : ""}
              >
                Behavior
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                onClick={() => setActiveTab("reviews")}
                className={activeTab === "reviews" ? "tab-active" : ""}
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="workspace-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-md font-medium">User Growth</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p>Chart visualization would be here</p>
                        <p className="text-sm mt-2">User growth over time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="workspace-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-md font-medium">Revenue Trends</CardTitle>
                    <LineChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <p>Chart visualization would be here</p>
                        <p className="text-sm mt-2">Revenue over time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="acquisition" className="mt-6">
              <Card className="workspace-card">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Acquisition Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4">Source</th>
                          <th className="text-right py-3 px-4">Users</th>
                          <th className="text-right py-3 px-4">Conversion</th>
                          <th className="text-right py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {acquisitionData.map((item, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 px-4">{item.source}</td>
                            <td className="text-right py-3 px-4">{item.users}</td>
                            <td className="text-right py-3 px-4">{item.conversion}</td>
                            <td className="text-right py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                item.status === 'increasing' ? 'bg-green-500/20 text-green-300' : 
                                item.status === 'decreasing' ? 'bg-red-500/20 text-red-300' : 
                                'bg-blue-500/20 text-blue-300'
                              }`}>
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="behavior" className="mt-6">
              <Card className="workspace-card">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Page Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-3 px-4">Page</th>
                          <th className="text-right py-3 px-4">Views</th>
                          <th className="text-right py-3 px-4">Avg. Time</th>
                          <th className="text-right py-3 px-4">Bounce Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {behaviorData.map((item, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-3 px-4">{item.page}</td>
                            <td className="text-right py-3 px-4">{item.views}</td>
                            <td className="text-right py-3 px-4">{item.avgTime}</td>
                            <td className="text-right py-3 px-4">{item.bounceRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviewsData.map(review => (
                  <Card key={review.id} className="workspace-card">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4" fill={i < review.rating ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 text-sm">{review.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default TractionBoard;
