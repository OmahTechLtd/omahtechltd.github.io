import React from "react";

const Services = ({ onServiceSelect }) => {

  const handleSelect = (serviceKey) => {
    onServiceSelect(serviceKey);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-black relative">
      {/* Structural Visual Boundary Line Thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
      
      {/* Visual continuity: matching ambient lighting from the About section */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-900/5 rounded-full filter blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          services
        </div>

        {/* Clean, authoritative typography */}
        {/* <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-4">
          Services
        </h2> */}
        
        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          Delivering specialized data engineering and strategic advisory tailored specifically to the unique constraints of Nigerian upstream assets.
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Solution 1: Advisory & Asset Strategy (Phase 1: Consultation) */}
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl hover:border-gray-900 transition-all flex flex-col justify-between group order-1 md:order-1">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                Strategic Consultation
              </span>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-green-400 transition-colors">
                Advisory & Asset Strategy
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We partner with asset management teams to assess immediate operational challenges and evaluate data health. Through deep-dive structural reviews, we deliver a customized roadmap detailing exactly how to extract maximum value from mature brownfields with minimal capital risk.
              </p>

              {/* High-Density Feature Set */}
              <ul className="space-y-2 border-t border-gray-950 pt-4 font-mono text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">▪</span> Data Readiness Assessments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">▪</span> Operational Pain Point Mapping
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">▪</span> Production Intelligence Roadmaps
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handleSelect("ai-strategy-advisory")}
                className="mt-8 border border-gray-800 hover:border-gray-700 bg-transparent hover:bg-white/5 px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase text-white font-bold transition-all block w-full text-center"
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Solution 2: Data Systems & Implementation (Phase 2: High-Impact Execution) */}
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl hover:border-gray-900 transition-all flex flex-col justify-between group order-2 md:order-2">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                High-Impact Deployment
              </span>
              <h3 className="text-xl font-bold mb-4 text-white tracking-tight group-hover:text-green-400 transition-colors">
                Data Systems & Implementation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Moving past assessment into active deployment. We engineer and implement proprietary, data-driven decision support systems directly into your operations. This translates raw wellhead logs into active machine learning models that predict <strong className="font-bold text-white">equipment failure before it causes downtime.</strong>.
              </p>
              
              {/* High-Density Feature Set */}
              <ul className="space-y-2 border-t border-gray-950 pt-4 font-mono text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">▪</span> Live Trend Diagnostic Engines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">▪</span> Continuous Flow Optimization Models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">▪</span> Secure Collaboration Infrastructure
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handleSelect("ai-data-solutions")}
                className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase text-white font-bold transition-all block w-full text-center"
              >
                Start a Project
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;