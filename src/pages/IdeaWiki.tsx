import React from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";

const IdeaWiki = () => {
  return (
    <WorkspaceLayout>
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Idea Wiki</h1>
          <p className="text-muted-foreground">
            Document and organize your startup knowledge
          </p>
        </header>
        
        <div className="grid gap-6">
          {/* Idea Wiki content goes here */}
          <div className="workspace-card p-6">
            <h2 className="text-xl font-semibold mb-4">Welcome to Idea Wiki</h2>
            <p className="text-muted-foreground">
              This is where you can document and organize all the knowledge related to your startup ideas.
              Create wiki pages, link related concepts, and build a knowledge base for your venture.
            </p>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default IdeaWiki;
