
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users,
  UserPlus,
  ChevronLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import TeamMemberCard from "@/components/teamspace/TeamMemberCard";
import AddTeamMemberModal from "@/components/teamspace/AddTeamMemberModal";
import TeamRoles from "@/components/teamspace/TeamRoles";
import TaskList from "@/components/teamspace/TaskList";
import MessagesPanel from "@/components/teamspace/MessagesPanel";
import MeetingsList from "@/components/teamspace/MeetingsList";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  status: string;
}

interface Task {
  id: number;
  title: string;
  assignee: string;
  dueDate: string;
  status: string;
  priority: string;
}

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  avatar: string;
}

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: string[];
  duration: string;
}

const TeamSpace = () => {
  const [activeTab, setActiveTab] = useState("team");
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const { toast } = useToast();
  
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
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
  ]);
  
  const [tasks, setTasks] = useState<Task[]>([
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
  ]);
  
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

  // Add animation class when tab changes
  useEffect(() => {
    const tabContents = document.querySelectorAll('[role="tabpanel"]');
    tabContents.forEach(content => {
      content.classList.add('animate-fade-in');
    });
  }, [activeTab]);

  const handleAddMember = (newMember: TeamMember) => {
    setTeamMembers([...teamMembers, newMember]);
    
    toast({
      title: "🎉 Team member added",
      description: `${newMember.name} has been added to your team.`
    });
  };

  const handleUpdateTaskStatus = (taskId: number, newStatus: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link 
              to="/workspace" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Back to Workspace</span>
            </Link>
          </div>
          <Button 
            onClick={() => setIsAddMemberModalOpen(true)}
            className="gap-2"
            size="sm"
          >
            <UserPlus className="h-4 w-4" />
            Add Team Member
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">TeamSpace</h1>
          <p className="text-muted-foreground">
            Collaborate with your team and manage your startup together
          </p>
        </header>
        
        <Tabs 
          defaultValue="team" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <div className="border-b mb-6">
            <TabsList className="bg-transparent h-12 p-0 -mb-px">
              <TabsTrigger 
                value="team" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
              >
                <Users className="h-4 w-4 mr-2" />
                Team
              </TabsTrigger>
              <TabsTrigger 
                value="tasks" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
              >
                Tasks
              </TabsTrigger>
              <TabsTrigger 
                value="messages" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
              >
                Messages
              </TabsTrigger>
              <TabsTrigger 
                value="meetings" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
              >
                Meetings
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="team" className="animate-fade-in mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
              
              <div 
                className="border border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer h-full min-h-[200px] hover:bg-accent/50 transition-colors"
                onClick={() => setIsAddMemberModalOpen(true)}
              >
                <div className="flex flex-col items-center justify-center p-6 h-full">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium">Add Team Member</p>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Invite someone to join your startup team
                  </p>
                </div>
              </div>
            </div>
            
            <TeamRoles />
          </TabsContent>
          
          <TabsContent value="tasks" className="animate-fade-in mt-0">
            <TaskList tasks={tasks} onUpdateTask={handleUpdateTaskStatus} />
          </TabsContent>
          
          <TabsContent value="messages" className="animate-fade-in mt-0">
            <MessagesPanel messages={messages} />
          </TabsContent>
          
          <TabsContent value="meetings" className="animate-fade-in mt-0">
            <MeetingsList meetings={meetings} />
          </TabsContent>
        </Tabs>
      </div>
      
      <AddTeamMemberModal 
        isOpen={isAddMemberModalOpen} 
        onClose={() => setIsAddMemberModalOpen(false)} 
        onAddMember={handleAddMember}
      />
    </div>
  );
};

export default TeamSpace;
