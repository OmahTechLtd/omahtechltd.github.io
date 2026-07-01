import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
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

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services onServiceSelect={setSelectedService} />
                <Projects />
                <Research />
                <Updates />
                <Testimonials />
                <Founder />
                <Contact selectedService={selectedService} />
              </>
            }
          />
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