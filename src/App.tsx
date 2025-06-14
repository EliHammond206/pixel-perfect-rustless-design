
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PartnerWithUs from "./pages/PartnerWithUs";
import GetTheApp from "./pages/GetTheApp";
import Safety from "./pages/Safety";
import Help from "./pages/Help";
import JoinUs from "./pages/JoinUs";
import Guidelines from "./pages/Guidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/get-the-app" element={<GetTheApp />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/help" element={<Help />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/guidelines" element={<Guidelines />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
