import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Index from "@/pages/Index"
import NotFound from "@/pages/NotFound"
import Workspace from "@/pages/Workspace"
import About from "@/pages/About"
import IdeaVault from "@/pages/IdeaVault"
import TaskPlanner from "@/pages/TaskPlanner"
import MVPStudio from "@/pages/MVPStudio"
import DocsDecks from "@/pages/DocsDecks"
import TeamSpace from "@/pages/TeamSpace"
import InvestorRadar from "@/pages/InvestorRadar"
import IdeaForge from "@/pages/IdeaForge"
import PitchPerfect from "@/pages/PitchPerfect"
import FeaturesPage from "@/pages/Features"
import IdeaDetails from "@/pages/IdeaDetails"
import DocumentEditor from "@/pages/DocumentEditor"
import WikiPageView from "@/pages/WikiPageView"
import WikiPageEditor from "@/pages/WikiPageEditor"
import Auth from "@/pages/Auth"

export function AppRoutes() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 md:px-6">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/about" element={<About />} />
            <Route path="/idea-vault" element={<IdeaVault />} />
            <Route path="/task-planner" element={<TaskPlanner />} />
            <Route path="/mvp-studio" element={<MVPStudio />} />
            <Route path="/docs-decks" element={<DocsDecks />} />
            <Route path="/team-space" element={<TeamSpace />} />
            <Route path="/investor-radar" element={<InvestorRadar />} />
            <Route path="/idea-forge" element={<IdeaForge />} />
            <Route path="/pitch-perfect" element={<PitchPerfect />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/idea/:id" element={<IdeaDetails />} />
            <Route path="/document/:id" element={<DocumentEditor />} />
            <Route path="/wiki/:id" element={<WikiPageView />} />
            <Route path="/wiki/:id/edit" element={<WikiPageEditor />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  )
} 