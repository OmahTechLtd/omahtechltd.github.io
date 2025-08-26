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
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;