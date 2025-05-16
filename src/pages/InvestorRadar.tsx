
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Plus } from "lucide-react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import InvestorsList from "@/components/investor/InvestorsList";
import FundingRoundsList from "@/components/investor/FundingRoundsList";
import PitchDeckView from "@/components/investor/PitchDeckView";
import { useToast } from "@/hooks/use-toast";
import FilterDrawer from "@/components/investor/FilterDrawer";
import AddInvestorModal from "@/components/investor/AddInvestorModal";
import { Investor, FundingRound } from "@/types/investor";
import { mockInvestors, mockFundingRounds } from "@/data/mockInvestorData";

const InvestorRadar = () => {
  const [activeTab, setActiveTab] = useState("investors");
  const [investors, setInvestors] = useState<Investor[]>(mockInvestors);
  const [fundingRounds, setFundingRounds] = useState<FundingRound[]>(mockFundingRounds);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInvestors, setFilteredInvestors] = useState<Investor[]>(investors);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddInvestorOpen, setIsAddInvestorOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Filter investors based on search query
    const filtered = investors.filter((investor) => 
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.stage.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredInvestors(filtered);
  }, [searchQuery, investors]);

  const handleAddInvestor = (investor: Investor) => {
    const updatedInvestors = [...investors, { ...investor, id: investors.length + 1 }];
    setInvestors(updatedInvestors);
    setIsAddInvestorOpen(false);
    toast({
      title: "Success",
      description: "Investor added successfully",
    });
  };

  const handleUpdateInvestorStatus = (id: number, status: string) => {
    const updatedInvestors = investors.map(investor => 
      investor.id === id ? { ...investor, status } : investor
    );
    setInvestors(updatedInvestors);
    toast({
      title: "Status Updated",
      description: `Investor status changed to ${status}`,
    });
  };

  const handleLogContact = (id: number, contactDetails: any) => {
    // In a real app, this would update the investor with new contact information
    toast({
      title: "Contact Logged",
      description: "Contact information saved successfully",
    });
  };

  const handleAddFundingRound = (round: FundingRound) => {
    const updatedRounds = [...fundingRounds, { ...round, id: fundingRounds.length + 1 }];
    setFundingRounds(updatedRounds);
    toast({
      title: "Success",
      description: "Funding round created successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      <WorkspaceSidebar />
      
      {/* Main content */}
      <main className="flex-1 p-6 ml-64 transition-all duration-300">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Investor Radar</h1>
            <p className="text-muted-foreground">
              Track investors, manage relationships, and plan fundraising activities
            </p>
          </header>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                className="pl-10" 
                placeholder="Search investors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button 
                onClick={() => setIsAddInvestorOpen(true)}
                className="transition-all hover:scale-105"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Investor
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="investors" className="mb-8">
            <TabsList className="mb-2 overflow-x-auto max-w-full">
              <TabsTrigger 
                value="investors" 
                onClick={() => setActiveTab("investors")}
                className={`transition-all ${activeTab === "investors" ? "tab-active" : ""}`}
              >
                Investors
              </TabsTrigger>
              <TabsTrigger 
                value="funding" 
                onClick={() => setActiveTab("funding")}
                className={`transition-all ${activeTab === "funding" ? "tab-active" : ""}`}
              >
                Funding Rounds
              </TabsTrigger>
              <TabsTrigger 
                value="pitchdeck" 
                onClick={() => setActiveTab("pitchdeck")}
                className={`transition-all ${activeTab === "pitchdeck" ? "tab-active" : ""}`}
              >
                Pitch Deck
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="investors" className="mt-6 animate-fade-in">
              <InvestorsList 
                investors={filteredInvestors} 
                onLogContact={handleLogContact}
                onStatusChange={handleUpdateInvestorStatus}
                onAddInvestor={() => setIsAddInvestorOpen(true)}
              />
            </TabsContent>
            
            <TabsContent value="funding" className="mt-6 animate-fade-in">
              <FundingRoundsList 
                fundingRounds={fundingRounds} 
                onAddFundingRound={handleAddFundingRound}
              />
            </TabsContent>
            
            <TabsContent value="pitchdeck" className="mt-6 animate-fade-in">
              <PitchDeckView />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Modals and drawers */}
      <FilterDrawer 
        open={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />
      
      <AddInvestorModal 
        open={isAddInvestorOpen} 
        onClose={() => setIsAddInvestorOpen(false)}
        onSubmit={handleAddInvestor}
      />
    </div>
  );
};

export default InvestorRadar;
