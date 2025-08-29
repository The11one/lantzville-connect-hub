import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout";
import Home from "./pages/Home";
import Council from "./pages/Council";
import Services from "./pages/Services";
import Forms from "./pages/Forms";
import Events from "./pages/Events";
import About from "./pages/About";
import PayBills from "./pages/PayBills";
import ReportIssue from "./pages/ReportIssue";
import WeatherAdvisory from "./pages/WeatherAdvisory";
import Building from "./pages/Building";
import Parks from "./pages/Parks";
import PublicWorks from "./pages/PublicWorks";
import Emergency from "./pages/Emergency";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Accessibility from "./pages/Accessibility";
import Bylaws from "./pages/Bylaws";
import StrategicPlan from "./pages/StrategicPlan";
import Newsletter from "./pages/Newsletter";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/council" element={<Council />} />
            <Route path="/council/meetings" element={<Council />} />
            <Route path="/services" element={<Services />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/events" element={<Events />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
            <Route path="/pay-bills" element={<PayBills />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/weather-advisory" element={<WeatherAdvisory />} />
            <Route path="/services/building" element={<Building />} />
            <Route path="/services/parks" element={<Parks />} />
            <Route path="/services/public-works" element={<PublicWorks />} />
            <Route path="/services/emergency" element={<Emergency />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/bylaws" element={<Bylaws />} />
            <Route path="/about/strategic-plan" element={<StrategicPlan />} />
            <Route path="/newsletter" element={<Newsletter />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
