
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock, Plus, Flag, Calendar } from "lucide-react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import AddPhaseModal from "@/components/blueprint/AddPhaseModal";
import TaskModal from "@/components/blueprint/TaskModal";
import PhaseCard, { Phase, Task } from "@/components/blueprint/PhaseCard";

const BlueprintZone = () => {
  const [activeTab, setActiveTab] = useState("roadmap");
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isAddPhaseModalOpen, setIsAddPhaseModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [taskModalMode, setTaskModalMode] = useState<"add" | "edit">("add");
  
  // Initialize with sample data
  useEffect(() => {
    const initialPhases: Phase[] = [
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
    
    setPhases(initialPhases);
  }, []);
  
  // Calculate progress for each phase
  useEffect(() => {
    const updatedPhases = phases.map(phase => {
      if (phase.tasks.length === 0) return { ...phase, progress: 0 };
      
      const completedTasks = phase.tasks.filter(task => task.status === 'completed').length;
      const progress = Math.round((completedTasks / phase.tasks.length) * 100);
      
      return { ...phase, progress };
    });
    
    setPhases(updatedPhases);
  }, [phases]);
  
  const handleAddPhase = (phaseData: { title: string; description: string; duration: string }) => {
    const newPhase: Phase = {
      id: phaseData.title.toLowerCase().replace(/\s+/g, '-'),
      title: phaseData.title,
      description: phaseData.description,
      tasks: [],
      duration: phaseData.duration,
      progress: 0
    };
    
    setPhases([...phases, newPhase]);
    toast({
      title: "Phase added",
      description: `${phaseData.title} phase has been added to your roadmap`,
    });
  };
  
  const handleAddTask = (phaseId: string) => {
    setSelectedPhaseId(phaseId);
    setSelectedTask(null);
    setTaskModalMode("add");
    setIsTaskModalOpen(true);
  };
  
  const handleEditTask = (phaseId: string, task: Task) => {
    setSelectedPhaseId(phaseId);
    setSelectedTask(task);
    setTaskModalMode("edit");
    setIsTaskModalOpen(true);
  };
  
  const handleSaveTask = (taskData: { id?: number; title: string; status: "completed" | "in-progress" | "pending" }) => {
    if (!selectedPhaseId) return;
    
    const updatedPhases = phases.map(phase => {
      if (phase.id !== selectedPhaseId) return phase;
      
      if (taskModalMode === "add") {
        // Add new task
        const newTaskId = Math.max(0, ...phase.tasks.map(t => t.id)) + 1;
        const newTask = { id: newTaskId, title: taskData.title, status: taskData.status };
        return { ...phase, tasks: [...phase.tasks, newTask] };
      } else {
        // Edit existing task
        return {
          ...phase,
          tasks: phase.tasks.map(t => (t.id === taskData.id ? { ...t, title: taskData.title, status: taskData.status } : t))
        };
      }
    });
    
    setPhases(updatedPhases);
  };
  
  const handleToggleTaskStatus = (phaseId: string, taskId: number) => {
    const updatedPhases = phases.map(phase => {
      if (phase.id !== phaseId) return phase;
      
      return {
        ...phase,
        tasks: phase.tasks.map(task => {
          if (task.id !== taskId) return task;
          
          // Cycle through statuses: pending -> in-progress -> completed -> pending
          let newStatus: "completed" | "in-progress" | "pending";
          if (task.status === "pending") newStatus = "in-progress";
          else if (task.status === "in-progress") newStatus = "completed";
          else newStatus = "pending";
          
          return { ...task, status: newStatus };
        })
      };
    });
    
    setPhases(updatedPhases);
    
    // Show toast when task is completed
    const phase = updatedPhases.find(p => p.id === phaseId);
    const task = phase?.tasks.find(t => t.id === taskId);
    
    if (task?.status === "completed") {
      toast({
        title: "Task completed",
        description: `"${task.title}" has been marked as complete`,
      });
    }
  };
  
  const milestones = [
    { id: 1, title: "MVP Completion", date: "July 30, 2025", status: "pending" },
    { id: 2, title: "Beta Launch", date: "August 15, 2025", status: "pending" },
    { id: 3, title: "First 100 Users", date: "September 1, 2025", status: "pending" },
    { id: 4, title: "Product Market Fit", date: "October 15, 2025", status: "pending" }
  ];

  return (
    <WorkspaceLayout>
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Blueprint Zone</h1>
          <p className="text-muted-foreground">
            Create detailed roadmaps and strategic plans for your startup
          </p>
        </header>
        
        <div className="flex justify-between items-center mb-6">
          <Button className="ml-auto">
            Share Blueprint
          </Button>
        </div>
        
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
              <Button size="sm" onClick={() => setIsAddPhaseModalOpen(true)}>
                <Plus className="h-4 w-4 mr-1" />
                Add Phase
              </Button>
            </div>
            
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <PhaseCard 
                  key={phase.id} 
                  phase={phase} 
                  index={index} 
                  onAddTask={handleAddTask}
                  onEditTask={handleEditTask}
                  onToggleTaskStatus={handleToggleTaskStatus}
                />
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
      
      {/* Modals */}
      <AddPhaseModal 
        isOpen={isAddPhaseModalOpen} 
        onClose={() => setIsAddPhaseModalOpen(false)}
        onAddPhase={handleAddPhase}
      />
      
      <TaskModal 
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onSaveTask={handleSaveTask}
        task={selectedTask || undefined}
        mode={taskModalMode}
      />
    </WorkspaceLayout>
  );
};

export default BlueprintZone;
