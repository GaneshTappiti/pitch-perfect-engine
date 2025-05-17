
import React, { useState } from "react";
import WorkspaceLayout from "@/components/WorkspaceLayout";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, Tag, Settings, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import NewWikiPageModal from "@/components/wiki/NewWikiPageModal";
import WikiPageCard from "@/components/wiki/WikiPageCard";
import WikiEmptyState from "@/components/wiki/WikiEmptyState";
import WikiSidebar from "@/components/wiki/WikiSidebar";
import WikiSearch from "@/components/wiki/WikiSearch";
import WikiAiAssistant from "@/components/wiki/WikiAiAssistant";

const IdeaWiki = () => {
  const { toast } = useToast();
  const [pages, setPages] = useState<WikiPage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to handle creating a new wiki page
  const handleCreatePage = (page: WikiPageInput) => {
    const newPage: WikiPage = {
      id: Date.now().toString(),
      title: page.title,
      description: page.description || "",
      tags: page.tags || [],
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setPages([newPage, ...pages]);
    toast({
      title: "Success! 🎉",
      description: "Your new wiki page has been created",
    });
  };

  // Filter pages based on search query
  const filteredPages = pages.filter(
    (page) =>
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <WorkspaceLayout>
      <div className="container mx-auto relative">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Idea Wiki</h1>
            <p className="text-muted-foreground">
              Document and organize your startup knowledge
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
              <span className="sr-only">Pages</span>
            </Button>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <PlusCircle className="h-5 w-5" />
                  New Page
                </Button>
              </DialogTrigger>
              <NewWikiPageModal onCreatePage={handleCreatePage} />
            </Dialog>
          </div>
        </header>
        
        {showSearch && (
          <div className="mb-6 animate-fade-in">
            <WikiSearch 
              value={searchQuery}
              onChange={setSearchQuery}
              onClose={() => setShowSearch(false)}
            />
          </div>
        )}
        
        <div className="grid gap-6">
          {pages.length === 0 ? (
            <WikiEmptyState onCreateClick={() => document.getElementById('new-page-trigger')?.click()} />
          ) : filteredPages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPages.map((page) => (
                <WikiPageCard key={page.id} page={page} />
              ))}
            </div>
          ) : (
            <div className="workspace-card p-6 text-center">
              <h3 className="text-xl font-medium mb-3">No results found</h3>
              <p className="text-muted-foreground mb-6">
                No wiki pages match your search criteria. Try adjusting your search or create a new page.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button id="new-page-no-results" className="gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Create New Page
                  </Button>
                </DialogTrigger>
                <NewWikiPageModal onCreatePage={handleCreatePage} />
              </Dialog>
            </div>
          )}
        </div>
        
        {/* Floating action button */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setShowAiAssistant(true)}
          >
            <span className="font-bold">AI</span>
            <span className="sr-only">AI Assistant</span>
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                id="new-page-trigger"
                className="h-14 w-14 rounded-full shadow-lg animate-pulse"
              >
                <PlusCircle className="h-6 w-6" />
                <span className="sr-only">New Page</span>
              </Button>
            </DialogTrigger>
            <NewWikiPageModal onCreatePage={handleCreatePage} />
          </Dialog>
        </div>
        
        {/* Wiki Sidebar */}
        <WikiSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          pages={pages}
        />
        
        {/* AI Assistant */}
        {showAiAssistant && (
          <WikiAiAssistant onClose={() => setShowAiAssistant(false)} />
        )}
      </div>
    </WorkspaceLayout>
  );
};

export default IdeaWiki;
