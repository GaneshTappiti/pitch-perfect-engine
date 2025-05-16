
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Task {
  id: number;
  title: string;
  assignee: string;
  dueDate: string;
  status: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
  onUpdateTask: (taskId: number, status: string) => void;
}

const TaskList = ({ tasks, onUpdateTask }: TaskListProps) => {
  const { toast } = useToast();

  const handleAddTask = () => {
    toast({
      title: "Add Task",
      description: "This functionality is coming soon!",
    });
  };

  const toggleTaskStatus = (taskId: number, currentStatus: string) => {
    const newStatus = currentStatus === "completed" ? "in-progress" : "completed";
    onUpdateTask(taskId, newStatus);
    
    toast({
      title: newStatus === "completed" ? "Task completed" : "Task reopened",
      description: `Task has been marked as ${newStatus}.`,
    });
  };

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <Card key={task.id} className="workspace-card transition-all hover:shadow-md">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                className={`h-5 w-5 rounded-full flex items-center justify-center ${
                  task.status === "completed" ? "bg-green-500" : "border border-white/30"
                }`}
                onClick={() => toggleTaskStatus(task.id, task.status)}
                aria-label={task.status === "completed" ? "Mark as incomplete" : "Mark as complete"}
              >
                {task.status === "completed" && <CheckCircle2 className="h-4 w-4 text-white" />}
              </button>
              <div>
                <p className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                  {task.title}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span>Assigned to: {task.assignee}</span>
                  <span className={`px-2 py-0.5 rounded-full ${
                    task.priority === "high" ? "bg-red-500/20 text-red-400" : 
                    task.priority === "medium" ? "bg-yellow-500/20 text-yellow-400" : 
                    "bg-green-500/20 text-green-400"
                  }`}>
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
      
      <Button variant="outline" className="w-full justify-center transition-all hover:bg-primary/10" onClick={handleAddTask}>
        <Plus className="h-4 w-4 mr-2" />
        Add New Task
      </Button>
    </div>
  );
};

export default TaskList;
