
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const workspaces = [
  {
    id: "idea-vibes",
    title: "Idea Vibes",
    description: "Validate your startup ideas and get market insights.",
    icon: "✨",
    color: "from-violet-600/20 to-violet-800/30",
    link: "/workspace/idea-vibes"
  },
  {
    id: "blueprint-zone",
    title: "Blueprint Zone",
    description: "Create detailed roadmaps and strategic plans.",
    icon: "🗺️",
    color: "from-blue-600/20 to-blue-800/30",
    link: "/workspace/blueprint-zone"
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    description: "Generate compelling pitch scripts and presentations.",
    icon: "🎤",
    color: "from-pink-600/20 to-pink-800/30",
    link: "/workspace/pitch-perfect"
  },
  {
    id: "visual-craft",
    title: "Visual Craft",
    description: "Design beautiful UI mockups and wireframes.",
    icon: "🎨",
    color: "from-green-600/20 to-green-800/30",
    link: "/workspace/visual-craft"
  },
  {
    id: "code-forge",
    title: "Code Forge",
    description: "Build your MVP with AI-powered code assistance.",
    icon: "🚀",
    color: "from-orange-600/20 to-orange-800/30",
    link: "/workspace/code-forge"
  },
  {
    id: "founder-hub",
    title: "Founder Hub",
    description: "Access resources for legal, marketing, and fundraising.",
    icon: "📚",
    color: "from-red-600/20 to-red-800/30",
    link: "/workspace/founder-hub"
  }
];

const WorkspaceSection = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 relative" id="workspace">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Workspace
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your All-in-One Startup Toolkit
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Access powerful tools designed to help you at every stage of your startup journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <Link 
              to={workspace.link} 
              key={workspace.id} 
              className="workspace-card p-6 flex flex-col hover:shadow-lg"
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl bg-gradient-to-br ${workspace.color}`}>
                  {workspace.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{workspace.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{workspace.description}</p>
              <Button variant="ghost" className="justify-start px-0 hover:bg-transparent hover:text-primary">
                <span>Explore</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/workspace">
              Enter Workspace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
