import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PreviewPage from "./pages/PreviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import NotFound from "./pages/NotFound";
import { StructuredData } from "./components/StructuredData";
import { FAQSchema } from "./components/FAQSchema";
import { BreadcrumbSchema } from "./components/BreadcrumbSchema";
import { ArticleSchema } from "./components/ArticleSchema";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="product" />
      <FAQSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
