
import React from "react";
import { useParams } from "react-router-dom";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Save, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WikiPageEditor = () => {
  const { pageId } = useParams();
  
  // This would be replaced by actual data fetching and state management
  const [title, setTitle] = React.useState("Example Wiki Page");
  const [content, setContent] = React.useState("This is a placeholder for the actual content of the wiki page.");

  const handleSave = () => {
    // Save functionality would go here
    console.log("Saving changes to page:", { pageId, title, content });
    // Redirect would happen here in a real implementation
  };

  return (
    <WorkspaceLayout>
      <div className="container mx-auto">
        <div className="mb-6">
          <Link to={`/workspace/idea-wiki/${pageId}`} className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Page
          </Link>
        </div>
        
        <header className="mb-8 flex justify-between items-center">
          <div className="w-full">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 mb-4"
              placeholder="Page Title"
            />
          </div>
          
          <Button className="gap-2" onClick={handleSave}>
            <Save className="h-4 w-4" />
            Save
          </Button>
        </header>
        
        <div className="workspace-card p-6">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[400px] bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Start writing your wiki page content..."
          />
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default WikiPageEditor;
