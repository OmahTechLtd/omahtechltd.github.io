import React from "react";
import { Link } from "react-router-dom";

const AmineEnergy = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6 relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-900/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded-full">
            Process Optimization Architecture
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          Amine System Energy Optimisation
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl leading-relaxed">
          A predictive machine learning framework designed to continually balance minimum reboiler duty requirements against real-time variable inlet gas loads.
        </p>

        {/* Technical Metadata Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Process Segment</p>
            <p className="text-white text-sm font-bold">Thermodynamic & Energy Balancing</p>
          </div>
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Target Variable</p>
            <p className="text-white text-sm font-bold">Real-Time Reboiler Duty Configuration</p>
          </div>
        </div>

        {/* Narrative Deep Dive */}
        <div className="space-y-12 text-sm md:text-base">

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-blue-500">
              The Operational Problem
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The acid gas stripper reboiler represents the primary utility and thermal energy sink in a gas processing facility. Operating at a static, conservative over-steaming baseline leads to excessive fuel gas penalties and accelerates thermal degradation of the solvent. Conversely, running under-stripped duty risks violating hydrogen sulfide (H2S) and carbon dioxide (CO2) pipeline compliance specifications. Because inlet gas composition and flow rates fluctuate continuously, manual or fixed-setpoint target tracking fails to adapt efficiently.
            </p>
          </div>

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-green-500">
              The Optimization System
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              OmahTech mapped and trained a specialized machine learning regressor capable of predicting exactly the minimal required reboiler heat input for any volatile permutation of inlet conditions. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              By analyzing the complex, non-linear relationships governing gas-to-solvent contact ratios and stripper temperatures, the model establishes a precise real-time recommendation matrix. Instead of running on static safe-guesses, technical teams are provided with a tight, responsive operational envelope.
            </p>
          </div>

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-blue-500">
              Asset Value Realization
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Optimizing thermal duty transfers directly into reduced plant fuel gas consumption and measurably lower carbon intensity metrics. By deploying data-backed setpoint boundaries, independent operators gain an immediate competitive edge, safeguarding strict environmental emissions baselines and product purity targets while driving down variable lifting and processing costs.
            </p>
          </div>

        </div>

        {/* Action Card */}
        <div className="mt-20 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight mb-3">Deploy Process Optimization</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            We engineer tailored process models that anchor directly into your facility's specific layout and simulation designs.
          </p>
          <a
            href="/#services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-xs font-mono font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition-all"
          >
            Initiate System Design Consultation
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link to="/#projects" className="text-gray-500 hover:text-gray-300 text-xs font-mono uppercase tracking-wider transition-colors">
            ← Return to Technical Validation Matrix
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AmineEnergy;