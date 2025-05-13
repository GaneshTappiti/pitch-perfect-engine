
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users,
  UserPlus,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  Phone,
  AlertCircle,
  Plus
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const TeamSpace = () => {
  const [activeTab, setActiveTab] = useState("team");
  
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Co-Founder & CEO",
      email: "alex@startup.com",
      phone: "+1 (555) 123-4567",
      avatar: "AJ",
      status: "online"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Co-Founder & CTO",
      email: "sarah@startup.com",
      phone: "+1 (555) 987-6543",
      avatar: "SC",
      status: "away"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Product Manager",
      email: "michael@startup.com",
      phone: "+1 (555) 456-7890",
      avatar: "MR",
      status: "offline"
    }
  ];
  
  const tasks = [
    {
      id: 1,
      title: "Update pitch deck with new metrics",
      assignee: "Alex Johnson",
      dueDate: "Today",
      status: "in-progress",
      priority: "high"
    },
    {
      id: 2,
      title: "Finalize product roadmap",
      assignee: "Sarah Chen",
      dueDate: "Tomorrow",
      status: "pending",
      priority: "high"
    },
    {
      id: 3,
      title: "Review competitor analysis",
      assignee: "Michael Rodriguez",
      dueDate: "Next week",
      status: "completed",
      priority: "medium"
    },
    {
      id: 4,
      title: "Schedule investor meetings",
      assignee: "Alex Johnson",
      dueDate: "Next week",
      status: "pending",
      priority: "medium"
    }
  ];
  
  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      content: "I've pushed the latest updates to the repository. Can everyone review when you get a chance?",
      time: "10:23 AM",
      avatar: "SC"
    },
    {
      id: 2,
      sender: "Alex Johnson",
      content: "Great! I'll take a look this afternoon. Also, we need to prepare for the investor call on Thursday.",
      time: "10:45 AM",
      avatar: "AJ"
    },
    {
      id: 3,
      sender: "Michael Rodriguez",
      content: "I've completed the user research and will share findings in our next meeting.",
      time: "11:15 AM",
      avatar: "MR"
    }
  ];
  
  const meetings = [
    {
      id: 1,
      title: "Weekly Team Sync",
      date: "Today",
      time: "2:00 PM",
      attendees: ["Alex Johnson", "Sarah Chen", "Michael Rodriguez"],
      duration: "60 min"
    },
    {
      id: 2,
      title: "Investor Pitch Rehearsal",
      date: "Thursday",
      time: "10:00 AM",
      attendees: ["Alex Johnson", "Sarah Chen"],
      duration: "90 min"
    },
    {
      id: 3,
      title: "Product Review",
      date: "Friday",
      time: "1:30 PM",
      attendees: ["Sarah Chen", "Michael Rodriguez"],
      duration: "45 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">TeamSpace</h1>
            <p className="text-muted-foreground">
              Collaborate with your team and manage your startup together
            </p>
          </header>
          
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Startup Team</h2>
            </div>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </div>
          
          <Tabs defaultValue="team" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="team" 
                onClick={() => setActiveTab("team")}
                className={activeTab === "team" ? "tab-active" : ""}
              >
                Team
              </TabsTrigger>
              <TabsTrigger 
                value="tasks" 
                onClick={() => setActiveTab("tasks")}
                className={activeTab === "tasks" ? "tab-active" : ""}
              >
                Tasks
              </TabsTrigger>
              <TabsTrigger 
                value="messages" 
                onClick={() => setActiveTab("messages")}
                className={activeTab === "messages" ? "tab-active" : ""}
              >
                Messages
              </TabsTrigger>
              <TabsTrigger 
                value="meetings" 
                onClick={() => setActiveTab("meetings")}
                className={activeTab === "meetings" ? "tab-active" : ""}
              >
                Meetings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="team" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map(member => (
                  <Card key={member.id} className="workspace-card hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span>{member.avatar}</span>
                          </div>
                          <div>
                            <CardTitle>{member.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <div className={`h-2 w-2 rounded-full ${
                          member.status === 'online' ? 'bg-green-500' : 
                          member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{member.phone}</span>
                        </div>
                      </div>
                      <div className="flex justify-between mt-6">
                        <Button variant="ghost" size="sm">View Profile</Button>
                        <Button variant="outline" size="sm">Message</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <UserPlus className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Add Team Member</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Invite someone to join your startup team
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="workspace-card mt-8">
                <CardHeader>
                  <CardTitle>Team Roles & Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Alex Johnson - CEO</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Business strategy and vision</li>
                        <li>Investor relations and fundraising</li>
                        <li>Team leadership and culture</li>
                        <li>Financial oversight</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sarah Chen - CTO</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Technical architecture and roadmap</li>
                        <li>Engineering team leadership</li>
                        <li>Technology stack decisions</li>
                        <li>Security and technical debt</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Michael Rodriguez - Product Manager</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>Product roadmap and features</li>
                        <li>User research and validation</li>
                        <li>Market analysis</li>
                        <li>Feature prioritization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tasks" className="mt-6">
              <div className="space-y-4">
                {tasks.map(task => (
                  <Card key={task.id} className="workspace-card">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center ${
                          task.status === "completed" ? "bg-green-500" : "border border-white/30"
                        }`}>
                          {task.status === "completed" && <CheckCircle2 className="h-4 w-4 text-white" />}
                        </div>
                        <div>
                          <p className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                            {task.title}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span>Assigned to: {task.assignee}</span>
                            <span className={`px-2 py-0.5 rounded-full priority-${task.priority}`}>
                              {task.priority}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {task.dueDate}
                        </span>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Task
                </Button>
              </div>
              
              <Card className="workspace-card mt-8">
                <CardHeader>
                  <CardTitle>Team Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Weekly Tasks Completion</span>
                        <span className="text-sm">75%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded overflow-hidden">
                        <div className="bg-primary h-full rounded" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Sprint Goals</span>
                        <span className="text-sm">60%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded overflow-hidden">
                        <div className="bg-primary h-full rounded" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Milestone Progress</span>
                        <span className="text-sm">40%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded overflow-hidden">
                        <div className="bg-primary h-full rounded" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages" className="mt-6">
              <Card className="workspace-card">
                <CardHeader>
                  <CardTitle>Team Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto p-2">
                    {messages.map(message => (
                      <div key={message.id} className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs">{message.avatar}</span>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 flex-grow">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{message.sender}</span>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-grow bg-white/5 border border-white/10 rounded-md px-3 py-2"
                    />
                    <Button>Send</Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mt-6 gap-4">
                <Card className="workspace-card flex-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Start Video Call</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Launch a video meeting with your team members
                    </p>
                    <Button variant="outline" className="w-full">Start Meeting</Button>
                  </CardContent>
                </Card>
                <Card className="workspace-card flex-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Share Files</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload and share documents with your team
                    </p>
                    <Button variant="outline" className="w-full">Upload Files</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="meetings" className="mt-6">
              <div className="space-y-4">
                {meetings.map(meeting => (
                  <Card key={meeting.id} className="workspace-card">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{meeting.title}</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{meeting.date}, {meeting.time}</span>
                            <span className="text-muted-foreground">({meeting.duration})</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-3">
                            {meeting.attendees.map((attendee, index) => (
                              <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                                {attendee}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button size="sm">Join</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Meeting
                </Button>
              </div>
              
              <Card className="workspace-card mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-yellow-500/20 p-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Upcoming Important Meeting</h3>
                      <p className="text-sm text-muted-foreground">Investor Pitch Rehearsal - Thursday, 10:00 AM</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg mb-4">
                    <h4 className="text-sm font-medium mb-2">Meeting Agenda:</h4>
                    <ol className="list-decimal pl-5 text-sm space-y-1 text-muted-foreground">
                      <li>Introduction and company overview (5 min)</li>
                      <li>Product demo (10 min)</li>
                      <li>Market analysis and opportunity (5 min)</li>
                      <li>Business model and traction (5 min)</li>
                      <li>Financial projections (5 min)</li>
                      <li>Team introduction (5 min)</li>
                      <li>Funding ask and use of funds (5 min)</li>
                      <li>Q&A practice (15 min)</li>
                    </ol>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">Send Reminder</Button>
                    <Button>Join Meeting</Button>
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

export default TeamSpace;
