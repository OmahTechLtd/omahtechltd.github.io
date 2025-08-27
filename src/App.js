import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import GenericModels from "./pages/GenericModels";
import CustomModels from "./pages/CustomModels";
import Billing from "./pages/Billing";
import ModelPipelineForm from "./pages/ModelPipelineForm";
import OilAndGasProject from "./pages/OilAndGasProject";
import RealEstateProject from "./pages/RealEstateProject";
import AgricultureProject from "./pages/Agriculture";
import StudentPerformanceProject from "./pages/StudentPerformanceProject";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
            </>
          } />

          {/* Generic Models page */}
          <Route path="/models/generic" element={<GenericModels />} />

          {/* Custom Models page */}
          <Route path="/models/custom" element={<CustomModels />} />

          {/* Billing page */}
          <Route path="/billing" element={<Billing />} /> 

          {/* Model Pipeline page */}
          <Route path="/models/pipeline" element={<ModelPipelineForm />} />  

          <Route path="/projects/oil-gas" element={<OilAndGasProject />} />
          <Route path="/projects/real-estate" element={<RealEstateProject />} />
          <Route path="/projects/agriculture" element={<AgricultureProject />} />
          <Route path="/projects/student-performance" element={<StudentPerformanceProject />} />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;