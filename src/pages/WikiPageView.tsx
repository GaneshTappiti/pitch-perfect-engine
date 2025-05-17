
import React from "react";
import { useParams } from "react-router-dom";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Button } from "@/components/ui/button";
import { Edit, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WikiPageView = () => {
  const { pageId } = useParams();

  // This would be replaced by actual data fetching in a real implementation
  const page = {
    id: pageId,
    title: "Example Wiki Page",
    content: "This is a placeholder for the actual content of the wiki page.",
    updatedAt: new Date().toISOString(),
  };

  return (
    <WorkspaceLayout>
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to="/workspace/idea-wiki" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Wiki
          </Link>
        </div>
        
        <header className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{page.title}</h1>
            <p className="text-muted-foreground">
              Last updated {new Date(page.updatedAt).toLocaleDateString()}
            </p>
          </div>
          
          <Link to={`/workspace/idea-wiki/${pageId}/edit`}>
            <Button className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Page
            </Button>
          </Link>
        </header>
        
        <div className="workspace-card p-6">
          <div className="prose dark:prose-invert max-w-none">
            <p>{page.content}</p>
            <p>This is a placeholder for the full wiki page content.</p>
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default WikiPageView;
