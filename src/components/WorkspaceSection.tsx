
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WorkspaceSection = () => {
  const features = [
    {
      id: 1,
      icon: "✨",
      title: "Idea Vibes",
      description: "Validate your startup ideas and get market insights.",
      path: "/workspace/idea-vault"
    },
    {
      id: 2,
      icon: "🗺️",
      title: "Blueprint Zone",
      description: "Create detailed roadmaps and strategic plans.",
      path: "/workspace/blueprint-zone"
    },
    {
      id: 3,
      icon: "🎤",
      title: "Pitch Perfect",
      description: "Generate compelling pitch scripts and presentations.",
      path: "/workspace/docs-decks"
    },
    {
      id: 4,
      icon: "🎨",
      title: "Visual Craft",
      description: "Design beautiful UI mockups and wireframes.",
      path: "/workspace/mvp-studio"
    },
    {
      id: 5,
      icon: "🚀",
      title: "Code Forge",
      description: "Build your MVP with AI-powered code assistance.",
      path: "/workspace/mvp-studio"
    },
    {
      id: 6,
      icon: "📚",
      title: "Founder Hub",
      description: "Access resources for legal, marketing, and fundraising.",
      path: "/workspace/idea-wiki"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Startup Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take your idea from concept to launch, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-background/40 backdrop-blur border border-white/10 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/5"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <Button asChild>
                <Link to={feature.path}>
                  Explore
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;
