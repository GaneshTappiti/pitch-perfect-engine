
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Workspace from "./pages/Workspace";
import About from "./pages/About";
import IdeaVault from "./pages/IdeaVault";
import BlueprintZone from "./pages/BlueprintZone";
import TaskPlanner from "./pages/TaskPlanner";
import MVPStudio from "./pages/MVPStudio";
import DocsDecks from "./pages/DocsDecks";
import TeamSpace from "./pages/TeamSpace";
import InvestorRadar from "./pages/InvestorRadar";
import TractionBoard from "./pages/TractionBoard";
import IdeaWiki from "./pages/IdeaWiki";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/workspace/idea-vault" element={<IdeaVault />} />
          <Route path="/workspace/blueprint-zone" element={<BlueprintZone />} />
          <Route path="/workspace/task-planner" element={<TaskPlanner />} />
          <Route path="/workspace/mvp-studio" element={<MVPStudio />} />
          <Route path="/workspace/docs-decks" element={<DocsDecks />} />
          <Route path="/workspace/teamspace" element={<TeamSpace />} />
          <Route path="/workspace/investor-radar" element={<InvestorRadar />} />
          <Route path="/workspace/traction-board" element={<TractionBoard />} />
          <Route path="/workspace/idea-wiki" element={<IdeaWiki />} />
          <Route path="/features" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
