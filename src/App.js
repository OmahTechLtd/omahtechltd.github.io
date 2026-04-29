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
import GenericModels from "./pages/GenericModels";
import CustomModels from "./pages/CustomModels";
import OilAndGasProject from "./pages/OilAndGasProject";
import RealEstateProject from "./pages/RealEstateProject";
import AgricultureProject from "./pages/AgricultureProject";
import EducationProject from "./pages/EducationProject";
import Billing from "./pages/Billing";
import NotFound from "./pages/NotFound";
import AiConsulting from "./pages/services/AiConsulting";
import Training from "./pages/services/Training";
import PaymentSuccess from "./pages/PaymentSuccess";
import ModelDetail from "./pages/ModelDetail";
import AmineAnomaly from "./pages/projects/AmineAnomaly";
import AmineEnergy from "./pages/projects/AmineEnergy";
import CrudeOilProduction from "./pages/projects/CrudeOilProduction";
import SalesForecasting from "./pages/projects/SalesForecasting";

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
                <Contact selectedService={selectedService} />
              </>
            }
          />
          <Route path="/models" element={<GenericModels />} />
          <Route path="/models/generic" element={<GenericModels />} />
          <Route path="/models/custom" element={<CustomModels />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/services/ai-consulting" element={<AiConsulting />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          <Route path="/projects/oil-and-gas" element={<OilAndGasProject />} />
          <Route path="/projects/real-estate" element={<RealEstateProject />} />
          <Route path="/projects/agriculture" element={<AgricultureProject />} />
          <Route path="/projects/education" element={<EducationProject />} />
          <Route path="/projects/amine-anomaly" element={<AmineAnomaly />} />
          <Route path="/projects/amine-energy" element={<AmineEnergy />} />
          <Route path="/projects/crude-oil-production" element={<CrudeOilProduction />} />
          <Route path="/projects/sales-forecasting" element={<SalesForecasting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer position="top-right" autoClose={4000} theme="dark" />
    </Router>
  );
}

export default App;