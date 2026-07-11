import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import OilAndGasProject from "./pages/OilAndGasProject";
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import AmineAnomaly from "./pages/projects/AmineAnomaly";
import AmineEnergy from "./pages/projects/AmineEnergy";
import CrudeOilProduction from "./pages/projects/CrudeOilProduction";
import SalesForecasting from "./pages/projects/SalesForecasting";
import TerminalProductionForecast from "./pages/projects/TerminalProductionForecast";
import Testimonials from './components/Testimonials';
import CompanyPolicy from "./pages/CompanyPolicy";
import Founder from "./components/Founder";
import Updates from "./components/Updates";
import Research from "./components/Research";
import FounderPage from "./pages/FounderPage";
import ResearchPage from "./pages/ResearchPage";
import UpdatesPage from "./pages/UpdatesPage";

// Cross-route synchronization handler
function RouteStateListener({ setSelectedService }) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetService) {
      setSelectedService(location.state.targetService);
      
      // Clear route state history so it doesn't reopen on clean updates
      window.history.replaceState({}, document.title);

      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location, setSelectedService]);

  return null;
}

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Router>
      <RouteStateListener setSelectedService={setSelectedService} />
      {/* Global overflow wall to eliminate mobile horizontal scrolling gaps */}
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element = {
              <>
                <Hero />
                <About />
                <Services onServiceSelect={setSelectedService} />
                {/* <Projects /> */}
                <Research onServiceSelect={setSelectedService} />
                <Updates />
                <Testimonials />
                <Founder />
                <Contact selectedService={selectedService} />
              </>
            }
          />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/research" element={<ResearchPage onServiceSelect={setSelectedService} />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/projects/oil-and-gas" element={<OilAndGasProject />} />
          <Route path="/projects/amine-anomaly" element={<AmineAnomaly />} />
          <Route path="/projects/amine-energy" element={<AmineEnergy />} />
          <Route path="/projects/crude-oil-production" element={<CrudeOilProduction />} />
          <Route path="/projects/sales-forecasting" element={<SalesForecasting />} />
          <Route path="/projects/terminal-production-forecast" element={<TerminalProductionForecast />} />
          <Route path="/company-policy" element={<CompanyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </Router>
  );
}

export default App;