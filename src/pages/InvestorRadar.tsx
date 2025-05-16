
import React, { useState, useEffect } from "react";
import WorkspaceSidebar from "@/components/WorkspaceSidebar";
import InvestorsList from "@/components/investor/InvestorsList";
import FundingRoundsList from "@/components/investor/FundingRoundsList";
import PitchDeckView from "@/components/investor/PitchDeckView";
import { useToast } from "@/hooks/use-toast";
import FilterDrawer from "@/components/investor/FilterDrawer";
import AddInvestorModal from "@/components/investor/AddInvestorModal";
import { Investor, InvestorInput, FundingRound, FundingRoundInput } from "@/types/investor";
import { mockInvestors, mockFundingRounds } from "@/data/mockInvestorData";
import { TabsContent } from "@/components/ui/tabs";
import ActionBar from "@/components/investor/ActionBar";
import TabNavigation from "@/components/investor/TabNavigation";

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

  const handleAddInvestor = (investorData: InvestorInput) => {
    const updatedInvestors = [...investors, { ...investorData, id: investors.length + 1 }];
    setInvestors(updatedInvestors);
    setIsAddInvestorOpen(false);
    toast({
      title: "Success",
      description: "Investor added successfully",
    });
  };

  const handleUpdateInvestorStatus = (id: number, status: string) => {
    const updatedInvestors = investors.map(investor => 
      investor.id === id ? { ...investor, status: status as any } : investor
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

  const handleAddFundingRound = (roundData: FundingRoundInput) => {
    const updatedRounds = [...fundingRounds, { ...roundData, id: fundingRounds.length + 1 }];
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
          
          <ActionBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFilterClick={() => setIsFilterOpen(true)}
            onAddClick={() => setIsAddInvestorOpen(true)}
          />
          
          <TabNavigation 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          >
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
          </TabNavigation>
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
