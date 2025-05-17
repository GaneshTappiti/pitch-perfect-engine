
import React, { useState, useEffect } from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { 
  PlusCircle, 
  Search, 
  FileText, 
  Layers, 
  Brain,
  Map,
  MessageSquare,
  Settings
} from "lucide-react";
import { IdeaDocument, IdeaInput, ViewMode } from "@/types/ideaforge";
import IdeaForgeSidebar from "@/components/ideaforge/IdeaForgeSidebar";
import NewIdeaModal from "@/components/ideaforge/NewIdeaModal";
import IdeaEmptyState from "@/components/ideaforge/IdeaEmptyState";
import IdeaSearch from "@/components/ideaforge/IdeaSearch";
import WikiView from "@/components/ideaforge/WikiView";
import BlueprintView from "@/components/ideaforge/BlueprintView";
import JourneyView from "@/components/ideaforge/JourneyView";
import FeedbackView from "@/components/ideaforge/FeedbackView";
import IdeaCard from "@/components/ideaforge/IdeaCard";
import IdeaForgeAssistant from "@/components/ideaforge/IdeaForgeAssistant";

const IdeaForge = () => {
  const { toast } = useToast();
  const [ideas, setIdeas] = useState<IdeaDocument[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("wiki");
  
  // Handle creating a new idea
  const handleCreateIdea = (idea: IdeaInput) => {
    const newIdea: IdeaDocument = {
      id: Date.now().toString(),
      title: idea.title,
      description: idea.description || "",
      tags: idea.tags || [],
      content: "",
      coverImage: idea.coverImage,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setIdeas([newIdea, ...ideas]);
    setSelectedIdeaId(newIdea.id);
    toast({
      title: "Success! 🎉",
      description: "Your new idea has been created",
    });
  };

  // Filter ideas based on search query
  const filteredIdeas = ideas.filter(
    (idea) =>
      idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      idea.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Get selected idea
  const selectedIdea = selectedIdeaId ? ideas.find(idea => idea.id === selectedIdeaId) : null;

  // Initialize with sample ideas
  useEffect(() => {
    if (ideas.length === 0) {
      const sampleIdea: IdeaDocument = {
        id: "sample-idea",
        title: "AI-Powered Grocery Management",
        description: "App that helps track expiry dates and suggests recipes based on what's in your fridge",
        content: "# AI-Powered Grocery Management\n\nThis innovative app will help users track their grocery inventory, get notifications about expiring items, and receive recipe suggestions based on available ingredients.\n\n## Key Features\n\n- Barcode scanning for easy entry\n- OCR for receipt scanning\n- Expiry date tracking with notifications\n- Recipe suggestions based on inventory\n- Smart shopping list generation",
        tags: ["AI", "Mobile App", "Sustainability"],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        favorited: true
      };
      
      setIdeas([sampleIdea]);
      setSelectedIdeaId(sampleIdea.id);
    }
  }, [ideas.length]);

  return (
    <WorkspaceLayout>
      <div className="flex h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <IdeaForgeSidebar 
          ideas={ideas}
          selectedIdeaId={selectedIdeaId}
          onSelectIdea={setSelectedIdeaId}
          onCreateIdea={() => document.getElementById('new-idea-trigger')?.click()}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          {selectedIdea ? (
            <div className="h-full flex flex-col">
              {/* Header */}
              <header className="mb-6 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedIdea.title}</h1>
                  <p className="text-muted-foreground">
                    {selectedIdea.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => setShowSearch(!showSearch)}
                    className="transition-all hover:bg-primary/10"
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`transition-all ${sidebarOpen ? 'bg-primary/20' : 'hover:bg-primary/10'}`}
                  >
                    <FileText className="h-5 w-5" />
                    <span className="sr-only">Toggle Sidebar</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAiAssistant(true)}
                    className="gap-2"
                  >
                    <Brain className="h-5 w-5" />
                    AI Assistant
                  </Button>
                </div>
              </header>
              
              {showSearch && (
                <div className="mb-6 animate-fade-in">
                  <IdeaSearch 
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onClose={() => setShowSearch(false)}
                  />
                </div>
              )}
              
              {/* View Switcher */}
              <Tabs 
                value={viewMode} 
                onValueChange={(value) => setViewMode(value as ViewMode)} 
                className="flex-1 flex flex-col"
              >
                <TabsList className="mb-6">
                  <TabsTrigger value="wiki" className="flex gap-2 items-center">
                    <FileText className="h-4 w-4" />
                    Wiki
                  </TabsTrigger>
                  <TabsTrigger value="blueprint" className="flex gap-2 items-center">
                    <Layers className="h-4 w-4" />
                    Blueprint
                  </TabsTrigger>
                  <TabsTrigger value="journey" className="flex gap-2 items-center">
                    <Map className="h-4 w-4" />
                    Journey Map
                  </TabsTrigger>
                  <TabsTrigger value="feedback" className="flex gap-2 items-center">
                    <MessageSquare className="h-4 w-4" />
                    Feedback
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="wiki" className="flex-1 overflow-auto">
                  <WikiView idea={selectedIdea} />
                </TabsContent>
                
                <TabsContent value="blueprint" className="flex-1 overflow-auto">
                  <BlueprintView ideaId={selectedIdea.id} />
                </TabsContent>
                
                <TabsContent value="journey" className="flex-1 overflow-auto">
                  <JourneyView ideaId={selectedIdea.id} />
                </TabsContent>
                
                <TabsContent value="feedback" className="flex-1 overflow-auto">
                  <FeedbackView ideaId={selectedIdea.id} />
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="container mx-auto">
              <header className="mb-8 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold mb-2">IdeaForge</h1>
                  <p className="text-muted-foreground">
                    Transform your ideas into structured plans and blueprints
                  </p>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2">
                      <PlusCircle className="h-5 w-5" />
                      New Idea
                    </Button>
                  </DialogTrigger>
                  <NewIdeaModal onCreateIdea={handleCreateIdea} />
                </Dialog>
              </header>

              {ideas.length === 0 ? (
                <IdeaEmptyState onCreateClick={() => document.getElementById('new-idea-trigger')?.click()} />
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredIdeas.map((idea) => (
                    <IdeaCard 
                      key={idea.id} 
                      idea={idea} 
                      onClick={() => setSelectedIdeaId(idea.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Floating create button */}
        <div className="fixed bottom-8 right-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                id="new-idea-trigger"
                className="h-14 w-14 rounded-full shadow-lg"
              >
                <PlusCircle className="h-6 w-6" />
                <span className="sr-only">New Idea</span>
              </Button>
            </DialogTrigger>
            <NewIdeaModal onCreateIdea={handleCreateIdea} />
          </Dialog>
        </div>
        
        {/* AI Assistant */}
        {showAiAssistant && (
          <IdeaForgeAssistant onClose={() => setShowAiAssistant(false)} />
        )}
      </div>
    </WorkspaceLayout>
  );
};

export default IdeaForge;
