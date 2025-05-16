
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, FileText, Presentation, FileSpreadsheet, FilePieChart } from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import DocumentModal from "@/components/docs-decks/DocumentModal";
import PitchDeckCard from "@/components/docs-decks/PitchDeckCard";
import DocumentCard from "@/components/docs-decks/DocumentCard";
import TemplateCard from "@/components/docs-decks/TemplateCard";
import EmptyState from "@/components/docs-decks/EmptyState";
import { useToast } from "@/hooks/use-toast";

const DocsDecks = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("pitch-decks");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const pitchDecks = [
    {
      id: 1,
      name: "Investor Pitch",
      description: "15-slide deck for seed round investors",
      lastEdited: "Yesterday",
      slides: 15,
      template: "YC Seed" 
    },
    {
      id: 2,
      name: "Partner Pitch",
      description: "Overview for potential strategic partners",
      lastEdited: "3 days ago",
      slides: 10,
      template: "Partner Brief"
    },
    {
      id: 3,
      name: "Product Demo",
      description: "Product walkthrough for customers",
      lastEdited: "Last week",
      slides: 12,
      template: "Product Launch"
    }
  ];
  
  const documents = [
    {
      id: 1,
      name: "Business Plan",
      description: "Full business plan with financial projections",
      type: "Document",
      lastEdited: "Today",
      pages: 24
    },
    {
      id: 2,
      name: "One-Pager",
      description: "Executive summary for quick overview",
      type: "One-pager",
      lastEdited: "Yesterday",
      pages: 1
    },
    {
      id: 3,
      name: "Market Research",
      description: "Industry analysis and market opportunity",
      type: "Research",
      lastEdited: "Last week",
      pages: 15
    },
    {
      id: 4,
      name: "Financial Model",
      description: "5-year projection with assumptions",
      type: "Spreadsheet",
      lastEdited: "2 weeks ago",
      pages: "N/A"
    }
  ];
  
  const templates = [
    {
      id: 1,
      name: "Investor Deck",
      description: "Standard 10-12 slide investor pitch",
      category: "Pitch Deck",
      icon: Presentation
    },
    {
      id: 2,
      name: "Executive Summary",
      description: "One-page business overview",
      category: "Document",
      icon: FileText
    },
    {
      id: 3,
      name: "Financial Model",
      description: "Basic startup financial projection",
      category: "Spreadsheet",
      icon: FileSpreadsheet
    },
    {
      id: 4,
      name: "Market Analysis",
      description: "Industry research template",
      category: "Research",
      icon: FilePieChart
    }
  ];

  const handleCreateDocument = (data: { title: string; description: string; type: string }) => {
    toast({
      title: "Document created",
      description: `Your ${data.type === "deck" ? "pitch deck" : "document"} was created successfully`,
    });
    
    // In a real app, you would add the document to your state or database
    // For this demo, we'll navigate to the editor
    navigate("/workspace/docs-decks/editor/new");
  };

  const handleDeckClick = (id: number) => {
    navigate(`/workspace/docs-decks/editor/${id}`);
  };

  const handleDocumentClick = (id: number) => {
    navigate(`/workspace/docs-decks/editor/${id}`);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Docs & Decks</h1>
            <p className="text-muted-foreground">
              Create professional documents and presentations for your startup
            </p>
          </header>
          
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Document Center</h2>
            </div>
            <Button onClick={handleOpenModal}>
              <Plus className="h-4 w-4 mr-2" />
              New Document
            </Button>
          </div>
          
          <Tabs 
            defaultValue="pitch-decks" 
            value={activeTab} 
            onValueChange={setActiveTab} 
            className="mb-8"
          >
            <TabsList className="mb-2 w-full sm:w-auto">
              <TabsTrigger 
                value="pitch-decks"
                className={`transition-all duration-300 ${activeTab === "pitch-decks" ? "tab-active" : ""}`}
              >
                Pitch Decks
              </TabsTrigger>
              <TabsTrigger 
                value="documents"
                className={`transition-all duration-300 ${activeTab === "documents" ? "tab-active" : ""}`}
              >
                Documents
              </TabsTrigger>
              <TabsTrigger 
                value="templates"
                className={`transition-all duration-300 ${activeTab === "templates" ? "tab-active" : ""}`}
              >
                Templates
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pitch-decks" className="mt-6 transition-all duration-300 animate-fade-in">
              {pitchDecks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pitchDecks.map(deck => (
                    <PitchDeckCard
                      key={deck.id}
                      id={deck.id}
                      name={deck.name}
                      description={deck.description}
                      lastEdited={deck.lastEdited}
                      slides={deck.slides}
                      template={deck.template}
                      onClick={() => handleDeckClick(deck.id)}
                    />
                  ))}
                  
                  <div 
                    className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-primary/50"
                    onClick={handleOpenModal}
                  >
                    <div className="flex flex-col items-center justify-center p-6 h-full">
                      <div className="rounded-full bg-white/5 p-3 mb-4">
                        <Presentation className="h-6 w-6" />
                      </div>
                      <p className="font-medium">Create New Deck</p>
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        Build a professional pitch deck with AI assistance
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <EmptyState type="decks" onCreateNew={handleOpenModal} />
              )}
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6 transition-all duration-300 animate-fade-in">
              {documents.length > 0 ? (
                <div className="space-y-4">
                  {documents.map(doc => (
                    <DocumentCard
                      key={doc.id}
                      id={doc.id}
                      name={doc.name}
                      description={doc.description}
                      type={doc.type}
                      lastEdited={doc.lastEdited}
                      pages={doc.pages}
                      onClick={() => handleDocumentClick(doc.id)}
                    />
                  ))}
                  
                  <Button variant="outline" className="w-full justify-center" onClick={handleOpenModal}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Document
                  </Button>
                </div>
              ) : (
                <EmptyState type="documents" onCreateNew={handleOpenModal} />
              )}
            </TabsContent>
            
            <TabsContent value="templates" className="mt-6 transition-all duration-300 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map(template => (
                  <TemplateCard
                    key={template.id}
                    id={template.id}
                    name={template.name}
                    description={template.description}
                    category={template.category}
                    icon={template.icon}
                  />
                ))}
              </div>
              
              <div className="mt-8 p-6 glass-effect rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">AI Document Generator</h4>
                    <p className="text-sm text-muted-foreground">Generate professional documents with AI assistance</p>
                  </div>
                </div>
                <Button className="w-full mt-4">Generate Document with AI</Button>
              </div>
            </TabsContent>
          </Tabs>
          
          <DocumentModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            onSave={handleCreateDocument}
          />
        </div>
      </main>
    </div>
  );
};

export default DocsDecks;
