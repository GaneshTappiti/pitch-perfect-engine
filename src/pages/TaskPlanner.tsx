
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus,
  CheckCircle,
  Clock,
  CalendarDays,
  Calendar
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const TaskPlanner = () => {
  const [activeTab, setActiveTab] = useState("day");
  
  const tasks = {
    today: [
      { id: 1, title: "Complete competitor analysis", priority: "high", status: "in-progress", time: "10:00 AM" },
      { id: 2, title: "Draft investor pitch deck", priority: "medium", status: "pending", time: "02:00 PM" },
      { id: 3, title: "Team sync meeting", priority: "high", status: "pending", time: "04:00 PM" }
    ],
    tomorrow: [
      { id: 4, title: "Finalize website content", priority: "medium", status: "pending", time: "11:00 AM" },
      { id: 5, title: "User research interviews", priority: "high", status: "pending", time: "01:00 PM" }
    ],
    week: [
      { id: 6, title: "Design landing page mockups", priority: "medium", status: "pending", date: "Wednesday" },
      { id: 7, title: "Set up analytics tracking", priority: "low", status: "pending", date: "Thursday" },
      { id: 8, title: "Create social media accounts", priority: "low", status: "pending", date: "Friday" }
    ],
    month: [
      { id: 9, title: "Launch beta version", priority: "high", status: "pending", date: "May 15" },
      { id: 10, title: "Investor meeting preparation", priority: "high", status: "pending", date: "May 20" },
      { id: 11, title: "Team OKR planning", priority: "medium", status: "pending", date: "May 25" }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Task Planner</h1>
            <p className="text-muted-foreground">
              Organize and prioritize your tasks for efficient execution
            </p>
          </header>
          
          <div className="mb-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-white/5">
                <CalendarDays className="h-4 w-4 mr-2" />
                May 2025
              </Button>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
          
          <Tabs defaultValue="day" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="day" 
                onClick={() => setActiveTab("day")}
                className={activeTab === "day" ? "tab-active" : ""}
              >
                Day
              </TabsTrigger>
              <TabsTrigger 
                value="week" 
                onClick={() => setActiveTab("week")}
                className={activeTab === "week" ? "tab-active" : ""}
              >
                Week
              </TabsTrigger>
              <TabsTrigger 
                value="month" 
                onClick={() => setActiveTab("month")}
                className={activeTab === "month" ? "tab-active" : ""}
              >
                Month
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="day" className="mt-6">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-medium">Today</h3>
                    <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded">
                      {tasks.today.length} Tasks
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {tasks.today.map(task => (
                      <Card key={task.id} className="workspace-card">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                              task.status === "completed" ? "bg-green-500" : "border border-white/30"
                            }`}>
                              {task.status === "completed" && <CheckCircle className="h-4 w-4 text-white" />}
                            </div>
                            <div>
                              <p className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                                {task.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs px-2 py-0.5 rounded-full priority-${task.priority}`}>
                                  {task.priority}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {task.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-medium">Tomorrow</h3>
                    <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded">
                      {tasks.tomorrow.length} Tasks
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {tasks.tomorrow.map(task => (
                      <Card key={task.id} className="workspace-card">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-5 w-5 rounded-full border border-white/30"></div>
                            <div>
                              <p>{task.title}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs px-2 py-0.5 rounded-full priority-${task.priority}`}>
                                  {task.priority}
                                </span>
                                <span className="text-xs text-muted-foreground flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {task.time}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <Button variant="ghost">
                    <Plus className="h-4 w-4 mr-2" />
                    Add More Tasks
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="week" className="mt-6">
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-medium">This Week</h3>
                  <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded">
                    {tasks.week.length} Tasks
                  </span>
                </div>
                
                <div className="space-y-3">
                  {tasks.week.map(task => (
                    <Card key={task.id} className="workspace-card">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-full border border-white/30"></div>
                          <div>
                            <p>{task.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full priority-${task.priority}`}>
                                {task.priority}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {task.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button variant="ghost">
                    <Plus className="h-4 w-4 mr-2" />
                    Add More Tasks
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="month" className="mt-6">
              <div>
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-medium">This Month</h3>
                  <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded">
                    {tasks.month.length} Tasks
                  </span>
                </div>
                
                <div className="space-y-3">
                  {tasks.month.map(task => (
                    <Card key={task.id} className="workspace-card">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 rounded-full border border-white/30"></div>
                          <div>
                            <p>{task.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-2 py-0.5 rounded-full priority-${task.priority}`}>
                                {task.priority}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {task.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="workspace-card mt-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Monthly Planning</h3>
                    <div className="flex justify-between gap-4 mb-6">
                      <Button variant="outline" className="flex-1">View Calendar</Button>
                      <Button variant="outline" className="flex-1">Generate Report</Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Plan your tasks for May 2025 and track your progress over time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default TaskPlanner;
