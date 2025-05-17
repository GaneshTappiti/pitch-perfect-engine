
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Rocket, 
  DollarSign, 
  Code, 
  Users, 
  Map, 
  Brain,
  PlusCircle,
  Calendar,
  Package
} from "lucide-react";
import { Phase, Task } from "@/types/ideaforge";

interface BlueprintViewProps {
  ideaId: string;
}

const BlueprintView: React.FC<BlueprintViewProps> = ({ ideaId }) => {
  const [phases, setPhases] = useState<Phase[]>([]);

  useEffect(() => {
    // For demonstration, initialize with sample data
    const initialPhases: Phase[] = [
      {
        id: "overview",
        title: "Overview",
        description: "One-liner pitch and problem statement",
        tasks: [
          { id: 1, title: "Define target market", status: "completed" },
          { id: 2, title: "Write problem statement", status: "in-progress" },
          { id: 3, title: "Craft elevator pitch", status: "pending" }
        ],
        duration: "1 week",
        progress: 40
      },
      {
        id: "business-model",
        title: "Business Model",
        description: "Revenue model and value propositions",
        tasks: [
          { id: 4, title: "Define revenue streams", status: "pending" },
          { id: 5, title: "Create value proposition", status: "pending" },
          { id: 6, title: "Identify key partners", status: "pending" }
        ],
        duration: "2 weeks",
        progress: 0
      },
      {
        id: "mvp-plan",
        title: "MVP Plan",
        description: "Minimum viable product definition",
        tasks: [
          { id: 7, title: "List core features", status: "pending" },
          { id: 8, title: "Define success metrics", status: "pending" },
          { id: 9, title: "Create development timeline", status: "pending" }
        ],
        duration: "2 weeks",
        progress: 0
      }
    ];
    
    setPhases(initialPhases);
  }, [ideaId]);

  // Toggle task status
  const handleToggleTaskStatus = (phaseId: string, taskId: number) => {
    const updatedPhases = phases.map(phase => {
      if (phase.id !== phaseId) return phase;
      
      return {
        ...phase,
        tasks: phase.tasks.map(task => {
          if (task.id !== taskId) return task;
          
          let newStatus: "completed" | "in-progress" | "pending";
          if (task.status === "pending") newStatus = "in-progress";
          else if (task.status === "in-progress") newStatus = "completed";
          else newStatus = "pending";
          
          return { ...task, status: newStatus };
        })
      };
    });
    
    setPhases(updatedPhases);
  };

  // Calculate progress for each phase
  const calculateProgress = (tasks: Task[]): number => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  const blueprintSections = [
    { id: "overview", title: "Overview", icon: Rocket },
    { id: "business-model", title: "Business Model", icon: DollarSign },
    { id: "mvp-plan", title: "MVP Plan", icon: Code },
    { id: "audience", title: "Target Audience", icon: Users },
    { id: "journey", title: "User Journey", icon: Map },
    { id: "monetization", title: "Monetization", icon: DollarSign },
    { id: "timeline", title: "Timeline", icon: Calendar },
    { id: "launch", title: "Launch Strategy", icon: Package }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blueprint Mode</h2>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Section
          </Button>
          <Button className="gap-2">
            <Brain className="h-4 w-4" />
            Generate Blueprint
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blueprintSections.map((section) => {
          const phase = phases.find(p => p.id === section.id);
          
          return (
            <Card key={section.id} className="flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                {phase ? (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{calculateProgress(phase.tasks)}%</span>
                    </div>
                    <Progress value={calculateProgress(phase.tasks)} className="h-2" />
                    
                    <div className="space-y-2">
                      {phase.tasks.map(task => (
                        <div 
                          key={task.id} 
                          className="flex items-center gap-2 cursor-pointer" 
                          onClick={() => handleToggleTaskStatus(phase.id, task.id)}
                        >
                          <div className={`h-4 w-4 rounded-full border ${
                            task.status === 'completed' ? 'bg-primary border-primary' :
                            task.status === 'in-progress' ? 'border-primary' : 'border-muted-foreground'
                          }`} />
                          <span className={task.status === 'completed' ? 'line-through text-muted-foreground' : ''}>
                            {task.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Textarea 
                      placeholder={`Enter your ${section.title.toLowerCase()} details here...`}
                      className="min-h-[100px]"
                    />
                    <Button variant="outline" size="sm" className="w-full">Save</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BlueprintView;
