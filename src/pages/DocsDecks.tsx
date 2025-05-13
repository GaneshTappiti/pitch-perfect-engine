
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus,
  FileText,
  Presentation,
  Download,
  FileSpreadsheet,
  FilePieChart,
  Copy
} from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";

const DocsDecks = () => {
  const [activeTab, setActiveTab] = useState("pitch-decks");
  
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
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Document
            </Button>
          </div>
          
          <Tabs defaultValue="pitch-decks" className="mb-8">
            <TabsList>
              <TabsTrigger 
                value="pitch-decks" 
                onClick={() => setActiveTab("pitch-decks")}
                className={activeTab === "pitch-decks" ? "tab-active" : ""}
              >
                Pitch Decks
              </TabsTrigger>
              <TabsTrigger 
                value="documents" 
                onClick={() => setActiveTab("documents")}
                className={activeTab === "documents" ? "tab-active" : ""}
              >
                Documents
              </TabsTrigger>
              <TabsTrigger 
                value="templates" 
                onClick={() => setActiveTab("templates")}
                className={activeTab === "templates" ? "tab-active" : ""}
              >
                Templates
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pitch-decks" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pitchDecks.map(deck => (
                  <Card key={deck.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>{deck.name}</CardTitle>
                        <div className="flex">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{deck.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-muted-foreground mt-4">
                        <span>Last edited: {deck.lastEdited}</span>
                        <div className="flex items-center gap-3">
                          <span>{deck.slides} slides</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {deck.template}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="workspace-card border-dashed border-2 flex flex-col items-center justify-center cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="rounded-full bg-white/5 p-3 mb-4">
                      <Presentation className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Create New Deck</p>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Build a professional pitch deck with AI assistance
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <div className="space-y-4">
                {documents.map(doc => (
                  <Card key={doc.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center">
                          {doc.type === "Document" && <FileText className="h-5 w-5 text-primary" />}
                          {doc.type === "One-pager" && <FileText className="h-5 w-5 text-green-400" />}
                          {doc.type === "Research" && <FilePieChart className="h-5 w-5 text-blue-400" />}
                          {doc.type === "Spreadsheet" && <FileSpreadsheet className="h-5 w-5 text-yellow-400" />}
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">{doc.lastEdited}</div>
                          <div className="text-xs text-muted-foreground">{doc.pages} {doc.type !== "Spreadsheet" ? "pages" : ""}</div>
                        </div>
                        <div className="flex">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button variant="outline" className="w-full justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Document
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="templates" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map(template => (
                  <Card key={template.id} className="workspace-card hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center">
                        <template.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium">{template.name}</h3>
                        <p className="text-sm text-muted-foreground">{template.description}</p>
                      </div>
                      <Button size="sm">Use</Button>
                    </CardContent>
                  </Card>
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
        </div>
      </main>
    </div>
  );
};

export default DocsDecks;
