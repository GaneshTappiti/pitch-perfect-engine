
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
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Wiki Mode</h2>
        <Button variant="outline" className="gap-2">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      </div>
      
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            {idea.content ? (
              <div>
                {idea.content.split('\n').map((line, index) => {
                  // Handle headers
                  if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-2xl font-bold mb-4 mt-6">{line.substring(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-xl font-bold mb-3 mt-5">{line.substring(3)}</h2>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index} className="ml-4 mb-2">{line.substring(2)}</li>;
                  } else if (line === '') {
                    return <div key={index} className="h-4"></div>;
                  } else {
                    return <p key={index} className="mb-3">{line}</p>;
                  }
                })}
              </div>
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
