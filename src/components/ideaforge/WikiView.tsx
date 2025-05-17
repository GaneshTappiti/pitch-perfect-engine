
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { IdeaDocument } from "@/types/ideaforge";

interface WikiViewProps {
  idea: IdeaDocument;
}

const WikiView: React.FC<WikiViewProps> = ({ idea }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Wiki Mode</h2>
        <Button variant="outline" className="gap-2">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            {idea.content ? (
              <div dangerouslySetInnerHTML={{ __html: idea.content.replace(/\n/g, '<br/>') }} />
            ) : (
              <div className="text-center py-10">
                <h3 className="text-xl font-medium mb-2">No content yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start documenting your idea by adding content to the wiki
                </p>
                <Button>Start Editing</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WikiView;
