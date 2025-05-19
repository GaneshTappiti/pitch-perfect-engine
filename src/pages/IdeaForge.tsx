
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { 
  PlusCircle, 
  Search, 
  FileText, 
  Layers, 
  Brain,
  Map,
  MessageSquare,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { IdeaDocument, IdeaInput, ViewMode } from "@/types/ideaforge";
import NewIdeaModal from "@/components/ideaforge/NewIdeaModal";
import IdeaEmptyState from "@/components/ideaforge/IdeaEmptyState";
import IdeaSearch from "@/components/ideaforge/IdeaSearch";
import WikiView from "@/components/ideaforge/WikiView";
import BlueprintView from "@/components/ideaforge/BlueprintView";
import JourneyView from "@/components/ideaforge/JourneyView";
import FeedbackView from "@/components/ideaforge/FeedbackView";
import IdeaCard from "@/components/ideaforge/IdeaCard";
import IdeaForgeAssistant from "@/components/ideaforge/IdeaForgeAssistant";
import { useIsMobile } from "@/hooks/use-mobile";

const IdeaForge = () => {
  const { toast } = useToast();
  const [ideas, setIdeas] = useState<IdeaDocument[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [selectedIdeaId, setSelectedIdeaId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("wiki");
  const isMobile = useIsMobile();
  
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
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link 
              to="/workspace" 
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="text-sm">Back to Workspace</span>
            </Link>
          </div>
          <div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowSearch(!showSearch)}
              className="mr-2"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button
              size="sm"
              onClick={() => document.getElementById('new-idea-trigger')?.click()}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              New Idea
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {selectedIdea ? (
          <div className="space-y-6">
            {/* Header */}
            <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold">{selectedIdea.title}</h1>
                <p className="text-muted-foreground mt-1">
                  {selectedIdea.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedIdea.tags.map((tag, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedIdeaId(null)}
                  size="sm"
                  className="h-9"
                >
                  All Ideas
                </Button>
                
                <Button 
                  onClick={() => setShowAiAssistant(true)}
                  size="sm"
                  className="gap-2 h-9"
                >
                  <Brain className="h-4 w-4" />
                  AI Assistant
                </Button>
              </div>
            </header>
            
            {showSearch && (
              <div className="animate-fade-in">
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
              className="space-y-6"
            >
              <div className="border-b border-border">
                <TabsList className="bg-transparent h-12 p-0 -mb-px">
                  <TabsTrigger 
                    value="wiki" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Wiki
                  </TabsTrigger>
                  <TabsTrigger 
                    value="blueprint" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
                  >
                    <Layers className="h-4 w-4 mr-2" />
                    Blueprint
                  </TabsTrigger>
                  <TabsTrigger 
                    value="journey" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
                  >
                    <Map className="h-4 w-4 mr-2" />
                    Journey Map
                  </TabsTrigger>
                  <TabsTrigger 
                    value="feedback" 
                    className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 h-12"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Feedback
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="wiki" className="mt-6 animate-fade-in">
                <WikiView idea={selectedIdea} />
              </TabsContent>
              
              <TabsContent value="blueprint" className="mt-6 animate-fade-in">
                <BlueprintView ideaId={selectedIdea.id} />
              </TabsContent>
              
              <TabsContent value="journey" className="mt-6 animate-fade-in">
                <JourneyView ideaId={selectedIdea.id} />
              </TabsContent>
              
              <TabsContent value="feedback" className="mt-6 animate-fade-in">
                <FeedbackView ideaId={selectedIdea.id} />
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="space-y-8">
            <header className="flex justify-between items-center">
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
              <>
                {showSearch && (
                  <div className="animate-fade-in mb-6">
                    <IdeaSearch 
                      value={searchQuery}
                      onChange={setSearchQuery}
                      onClose={() => setShowSearch(false)}
                    />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredIdeas.map((idea) => (
                    <IdeaCard 
                      key={idea.id} 
                      idea={idea} 
                      onClick={() => setSelectedIdeaId(idea.id)}
                    />
                  ))}
                </div>
              </>
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
      
      {/* Side panels and modals */}
      {showAiAssistant && (
        <IdeaForgeAssistant onClose={() => setShowAiAssistant(false)} />
      )}
    </div>
  );
};

export default IdeaForge;
