
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Download, Share, Copy } from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import { useToast } from "@/hooks/use-toast";

const DocumentEditor = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [content, setContent] = useState("# Your Document Title\n\nStart writing your content here...");
  
  // Mock document data - in a real app, this would be fetched based on the docId
  const documentData = {
    id: docId,
    title: docId === "new" ? "New Document" : "Investment Pitch Deck",
    type: "deck",
    slides: 10,
    lastEdited: "Just now"
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://app.example.com/share/doc/${docId}`);
    toast({
      title: "Link copied",
      description: "Share link copied to clipboard",
    });
  };
  
  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <div className="mb-6 flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/workspace/docs-decks")}
              className="mr-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Documents
            </Button>
            
            <h1 className="text-2xl font-bold flex-grow">{documentData.title}</h1>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleCopyLink}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button>Save</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9">
              <Card className="bg-white shadow-md rounded-md mb-6">
                <CardContent className="p-6">
                  <textarea
                    className="w-full h-[70vh] p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-3">
              <Card className="bg-white shadow-md rounded-md mb-6">
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium mb-4">Document Properties</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Type:</span>
                      <span className="text-sm font-medium">{documentData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Pages:</span>
                      <span className="text-sm font-medium">{documentData.slides}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Last edited:</span>
                      <span className="text-sm font-medium">{documentData.lastEdited}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-6 mb-4">AI Assistance</h3>
                  <Button className="w-full mb-2">Suggest Improvements</Button>
                  <Button className="w-full mb-2" variant="outline">Generate Content</Button>
                  <Button className="w-full" variant="outline">Format Document</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentEditor;
