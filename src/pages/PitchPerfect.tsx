
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  FileText, 
  Presentation,
  Plus,
  Video,
  Download,
  Edit,
  Copy,
  Share
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import { useToast } from "@/hooks/use-toast";

const PitchPerfect = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("scripts");
  
  const scripts = [
    {
      id: 1,
      title: "Investor Elevator Pitch",
      description: "30-second pitch for potential investors",
      lastEdited: "2 days ago",
      type: "script"
    },
    {
      id: 2,
      title: "Product Demo Script",
      description: "5-minute walkthrough of key features",
      lastEdited: "1 week ago",
      type: "script"
    },
    {
      id: 3,
      title: "Customer Testimonial Guide",
      description: "Questions for customer interviews",
      lastEdited: "2 weeks ago",
      type: "script"
    }
  ];
  
  const decks = [
    {
      id: 1,
      title: "Seed Round Pitch Deck",
      description: "Presentation for angel investors",
      slides: 12,
      lastEdited: "3 days ago",
      type: "deck"
    },
    {
      id: 2,
      title: "Product Vision",
      description: "Overview of product roadmap",
      slides: 8,
      lastEdited: "1 month ago",
      type: "deck"
    }
  ];

  const handleCopy = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`https://app.example.com/share/pitch/${id}`);
    toast({
      title: "Link copied",
      description: "Share link copied to clipboard",
    });
  };

  const handleItemClick = (id: number, type: string) => {
    navigate(`/workspace/pitch-perfect/editor/${type}/${id}`);
  };

  const handleNewScript = () => {
    toast({
      title: "New script",
      description: "Creating a new script template",
    });
    navigate(`/workspace/pitch-perfect/editor/script/new`);
  };

  const handleNewDeck = () => {
    toast({
      title: "New deck",
      description: "Creating a new presentation deck",
    });
    navigate(`/workspace/pitch-perfect/editor/deck/new`);
  };

  const handleNewVideo = () => {
    toast({
      title: "Video creator",
      description: "Opening video creation wizard",
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Pitch Perfect</h1>
            <p className="text-muted-foreground">
              Create compelling pitches, presentations, and scripts
            </p>
          </header>
          
          <Tabs 
            defaultValue="scripts" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="mb-8"
          >
            <TabsList className="mb-2">
              <TabsTrigger 
                value="scripts" 
                className={`transition-all duration-300 ${activeTab === "scripts" ? "tab-active" : ""}`}
              >
                Scripts
              </TabsTrigger>
              <TabsTrigger 
                value="decks" 
                className={`transition-all duration-300 ${activeTab === "decks" ? "tab-active" : ""}`}
              >
                Presentation Decks
              </TabsTrigger>
              <TabsTrigger 
                value="videos" 
                className={`transition-all duration-300 ${activeTab === "videos" ? "tab-active" : ""}`}
              >
                Video Pitches
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="scripts" className="mt-6 transition-all duration-300 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Your Scripts</h2>
                <Button onClick={handleNewScript}>
                  <Plus className="h-4 w-4 mr-1" />
                  New Script
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scripts.map(script => (
                  <Card 
                    key={script.id} 
                    className="workspace-card hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-[1.01]"
                    onClick={() => handleItemClick(script.id, "script")}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-start justify-between">
                        <span className="truncate" title={script.title}>{script.title}</span>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{script.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Edited {script.lastEdited}</span>
                        <div className="flex gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/workspace/pitch-perfect/editor/script/${script.id}`);
                                  }}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Edit script</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                  onClick={(e) => handleCopy(e, script.id)}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy link</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card 
                  className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-full transition-all duration-200 hover:border-primary/50 hover:shadow-md"
                  onClick={handleNewScript}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-primary/20 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Create New Script</p>
                    <p className="text-sm text-muted-foreground">Draft your next pitch</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="decks" className="mt-6 transition-all duration-300 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Your Presentation Decks</h2>
                <Button onClick={handleNewDeck}>
                  <Plus className="h-4 w-4 mr-1" />
                  New Deck
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {decks.map(deck => (
                  <Card 
                    key={deck.id} 
                    className="workspace-card hover:shadow-lg cursor-pointer transition-all duration-200 hover:scale-[1.01]"
                    onClick={() => handleItemClick(deck.id, "deck")}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-start justify-between">
                        <span className="truncate" title={deck.title}>{deck.title}</span>
                        <Presentation className="h-5 w-5 text-muted-foreground" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{deck.description}</p>
                      <p className="text-xs mb-4">{deck.slides} slides</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Edited {deck.lastEdited}</span>
                        <div className="flex gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/workspace/pitch-perfect/editor/deck/${deck.id}`);
                                  }}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Edit deck</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                  onClick={(e) => handleCopy(e, deck.id)}
                                >
                                  <Share className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Share deck</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  size="icon" 
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toast({
                                      title: "Downloading",
                                      description: "Your deck is being prepared for download",
                                    });
                                  }}
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Download deck</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card 
                  className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer h-full transition-all duration-200 hover:border-primary/50 hover:shadow-md"
                  onClick={handleNewDeck}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-primary/20 p-3 mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-medium">Create New Deck</p>
                    <p className="text-sm text-muted-foreground">Design your presentation</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-6 transition-all duration-300 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Video Pitches</h2>
                <Button onClick={handleNewVideo}>
                  <Plus className="h-4 w-4 mr-1" />
                  New Video
                </Button>
              </div>
              
              <Card className="workspace-card p-6 text-center">
                <div className="py-16">
                  <div className="rounded-full bg-primary/20 p-4 mx-auto mb-6 w-16 h-16 flex items-center justify-center animate-float">
                    <Video className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Create Video Pitches</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Record or generate AI-powered video presentations for your startup
                  </p>
                  <Button onClick={handleNewVideo}>Get Started</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default PitchPerfect;
