
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SSOPage from "./pages/SSOPage";
import NexusPage from "./pages/NexusPage";
import ScaffoldingPage from "./pages/ScaffoldingPage";
import AnticipationPage from "./pages/AnticipationPage";
import ContinuityBridgesPage from "./pages/ContinuityBridgesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sso" element={<SSOPage />} />
          <Route path="/nexus" element={<NexusPage />} />
          <Route path="/scaffolding" element={<ScaffoldingPage />} />
          <Route path="/anticipation" element={<AnticipationPage />} />
          <Route path="/continuity-bridges" element={<ContinuityBridgesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
