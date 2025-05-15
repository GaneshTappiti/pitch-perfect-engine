
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  Plus,
  Filter,
  ThumbsUp,
  MessageSquare,
  Tag,
  Lightbulb
} from "lucide-react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import NewIdeaModal from "@/components/idea-vault/NewIdeaModal";
import FilterModal from "@/components/idea-vault/FilterModal";
import IdeaCard from "@/components/idea-vault/IdeaCard";
import { useDebounce } from "@/hooks/use-debounce";

export interface IdeaProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  votes: number;
  comments: number;
  status: "validated" | "exploring" | "archived";
}

const IdeaVault = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewIdeaModalOpen, setIsNewIdeaModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredIdeas, setFilteredIdeas] = useState<IdeaProps[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  // Mock data for ideas
  const ideas = [
    {
      id: 1,
      title: "HealthTrack App",
      description: "A fitness tracking app specifically designed for seniors with simplified UI and health monitoring features.",
      tags: ["Health", "Mobile App", "Seniors"],
      votes: 12,
      comments: 5,
      status: "validated"
    },
    {
      id: 2,
      title: "EcoMarket",
      description: "Marketplace for sustainable goods with carbon footprint tracking and eco-friendly product verification.",
      tags: ["Marketplace", "Sustainability", "E-commerce"],
      votes: 8,
      comments: 3,
      status: "exploring"
    },
    {
      id: 3,
      title: "CodeBuddy",
      description: "AI pair programming assistant that helps developers with code reviews and suggestions in real-time.",
      tags: ["AI", "Developer Tools", "Productivity"],
      votes: 15,
      comments: 7,
      status: "validated"
    },
    {
      id: 4,
      title: "RemoteTeam",
      description: "Virtual workspace platform for remote teams with asynchronous collaboration tools.",
      tags: ["Remote Work", "Collaboration", "SaaS"],
      votes: 6,
      comments: 2,
      status: "exploring"
    }
  ];

  // Filter ideas based on tab and search term
  useEffect(() => {
    let result = [...ideas];
    
    // Filter by tab
    if (activeTab !== "all") {
      result = result.filter(idea => idea.status === activeTab);
    }
    
    // Filter by search term
    if (debouncedSearchTerm) {
      result = result.filter(idea => 
        idea.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || 
        idea.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
      );
    }
    
    setFilteredIdeas(result);
  }, [activeTab, debouncedSearchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleOpenNewIdeaModal = () => {
    setIsNewIdeaModalOpen(true);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCreateIdea = (ideaData: Partial<IdeaProps>) => {
    toast({
      title: "Idea created!",
      description: "Your new idea has been added to the vault.",
    });
    setIsNewIdeaModalOpen(false);
  };

  const handleIdeaClick = (id: number) => {
    navigate(`/workspace/idea-vault/${id}`);
  };

  const handleVoteClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigating to idea details
    
    toast({
      title: "Vote added!",
      description: "You've upvoted this idea.",
    });
  };

  return (
    <WorkspaceLayout>
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Idea Vault</h1>
          <p className="text-muted-foreground">
            Store, organize, and validate your startup ideas
          </p>
        </header>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10" 
              placeholder="Search ideas..." 
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleOpenFilterModal}>
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button onClick={handleOpenNewIdeaModal}>
              <Plus className="h-4 w-4 mr-2" />
              New Idea
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab} value={activeTab}>
          <TabsList>
            <TabsTrigger 
              value="all" 
              className={activeTab === "all" ? "tab-active" : ""}
            >
              All Ideas
            </TabsTrigger>
            <TabsTrigger 
              value="validated" 
              className={activeTab === "validated" ? "tab-active" : ""}
            >
              Validated
            </TabsTrigger>
            <TabsTrigger 
              value="exploring" 
              className={activeTab === "exploring" ? "tab-active" : ""}
            >
              Exploring
            </TabsTrigger>
            <TabsTrigger 
              value="archived" 
              className={activeTab === "archived" ? "tab-active" : ""}
            >
              Archived
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            {filteredIdeas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIdeas.map(idea => (
                  <IdeaCard 
                    key={idea.id}
                    idea={idea}
                    onClick={() => handleIdeaClick(idea.id)}
                    onVoteClick={(e) => handleVoteClick(idea.id, e)}
                  />
                ))}
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer" onClick={handleOpenNewIdeaModal}>
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <Plus className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Add New Idea</p>
                    <p className="text-sm text-muted-foreground">Capture your next big thing</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-white/5 p-6 rounded-full mb-4">
                  <Lightbulb className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-2">No ideas found</h3>
                <p className="text-muted-foreground mb-6">
                  {activeTab === "archived" 
                    ? "You haven't archived any ideas yet." 
                    : searchTerm 
                      ? "No matches found. Maybe create it?" 
                      : "Got something cool? Start now!"}
                </p>
                <Button onClick={handleOpenNewIdeaModal}>
                  <Plus className="h-4 w-4 mr-2" />
                  Start a new idea
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <NewIdeaModal 
        isOpen={isNewIdeaModalOpen} 
        onClose={() => setIsNewIdeaModalOpen(false)} 
        onSubmit={handleCreateIdea}
      />
      
      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </WorkspaceLayout>
  );
};

export default IdeaVault;
