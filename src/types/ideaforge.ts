
export interface IdeaDocument {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  favorited?: boolean;
}

export interface IdeaInput {
  title: string;
  description?: string;
  tags?: string[];
  coverImage?: string;
}

export interface BlueprintSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface Phase {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
  duration: string;
  progress: number;
}

export interface Task {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "pending";
}

export type ViewMode = "wiki" | "blueprint" | "journey" | "feedback";
