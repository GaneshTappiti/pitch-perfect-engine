
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  sender: string;
  content: string;
  time: string;
  avatar: string;
}

interface MessagesPanelProps {
  messages: Message[];
}

const MessagesPanel = ({ messages }: MessagesPanelProps) => {
  const [newMessage, setNewMessage] = useState("");
  const { toast } = useToast();
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message sent",
      description: "Your message has been sent to the team.",
    });
    
    setNewMessage("");
  };
  
  const handleStartMeeting = () => {
    toast({
      title: "Starting meeting",
      description: "Setting up your video call...",
    });
  };
  
  const handleShareFiles = () => {
    toast({
      title: "File sharing",
      description: "Opening file upload dialog...",
    });
  };

  return (
    <>
      <Card className="workspace-card animate-fade-in">
        <CardHeader>
          <CardTitle>Team Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto p-2">
            {messages.map(message => (
              <div key={message.id} className="flex gap-3 animate-fade-in">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs">{message.avatar}</span>
                </div>
                <div className="bg-white/5 rounded-lg p-3 flex-grow hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow bg-white/5 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="flex justify-between mt-6 gap-4">
        <Card className="workspace-card flex-1 hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Start Video Call</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Launch a video meeting with your team members
            </p>
            <Button 
              variant="outline" 
              className="w-full hover:bg-primary/10" 
              onClick={handleStartMeeting}
            >
              Start Meeting
            </Button>
          </CardContent>
        </Card>
        <Card className="workspace-card flex-1 hover:shadow-md transition-all">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-medium">Share Files</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Upload and share documents with your team
            </p>
            <Button 
              variant="outline" 
              className="w-full hover:bg-primary/10" 
              onClick={handleShareFiles}
            >
              Upload Files
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MessagesPanel;
