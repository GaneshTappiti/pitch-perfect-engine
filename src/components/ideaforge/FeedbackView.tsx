
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, PlusCircle, Share } from "lucide-react";

interface FeedbackViewProps {
  ideaId: string;
}

const FeedbackView: React.FC<FeedbackViewProps> = ({ ideaId }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Feedback & Comments</h2>
        <Button className="gap-2">
          <Share className="h-4 w-4" />
          Share for Feedback
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add a Comment</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Share your thoughts or ask for feedback..."
              className="mb-4"
            />
            <Button className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Post Comment
            </Button>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          {/* Sample feedback item */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">AI</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">AI Assistant</h4>
                    <span className="text-xs text-muted-foreground">Just now</span>
                  </div>
                  <p className="text-sm mb-3">
                    This idea has strong market potential. Consider expanding your target audience 
                    to include not just individuals but also small businesses that need to manage inventory.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8">Reply</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Empty state for no comments */}
          <Card className="border-dashed">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <MessageSquare className="h-10 w-10 text-muted-foreground mb-2" />
              <h3 className="text-lg font-medium mb-1">No comments yet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Be the first to add a comment or share your idea to get feedback from others
              </p>
              <Button variant="outline" className="gap-2">
                <PlusCircle className="h-4 w-4" />
                Invite Collaborators
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
