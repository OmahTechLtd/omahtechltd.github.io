import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";

// Pages
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


function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          {/* Home page with sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Contact />
              </>
            }
          />

          {/* Services pages */}
          <Route path="/models/generic" element={<GenericModels />} />
          <Route path="/models/custom" element={<CustomModels />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/services/ai-consulting" element={<AiConsulting />} />
          <Route path="/services/training" element={<Training />} />

          {/* Project demo pages */}
          <Route path="/projects/oil-and-gas" element={<OilAndGasProject />} />
          <Route path="/projects/real-estate" element={<RealEstateProject />} />
          <Route path="/projects/agriculture" element={<AgricultureProject />} />
          <Route path="/projects/education" element={<EducationProject />} />

          {/* not found 404 page*/}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;