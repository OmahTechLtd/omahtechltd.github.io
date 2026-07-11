import React from "react";
import { Link } from "react-router-dom";

const AmineAnomaly = () => {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6 relative">
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded-full">
            Technical Case Validation
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
          Amine System Anomaly Detection Framework
        </h1>

        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-3xl leading-relaxed">
          An early-warning algorithmic intelligence layer designed for gas treatment operations to surface transient process vulnerabilities before they manifest as mechanical shutdowns.
        </p>

        {/* Technical Metadata Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Process Segment</p>
            <p className="text-white text-sm font-bold">Gas Sweetening & Regeneration</p>
          </div>
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Validation Dataset</p>
            <p className="text-white text-sm font-bold">49,915 High-Frequency Log Points</p>
          </div>
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Detection Threshold</p>
            <p className="text-white text-sm font-bold">2.87% Non-Linear Anomalies Outlined</p>
          </div>
        </div>

        {/* Narrative Deep Dive */}
        <div className="space-y-12 text-sm md:text-base">

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-blue-500">
              The Operational Problem
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Amine regeneration units are critical to keeping sales gas within contract specifications. However, systemic disruptions, such as <strong className="font-bold text-white">amine foaming, heat exchanger fouling, tray flooding, and amine degradation</strong>, typically exhibit silent, highly complex indicators. By the time human operators spot standard threshold alarms, severe chemical instability or physical equipment stress has already occurred, triggering emergency trip events.
            </p>
          </div>

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-green-500">
              The Algorithmic Architecture
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We developed an unsupervised multidimensional machine learning model trained to establish the baseline of standard operational equilibrium. The system maps the multi-variable cross-correlations between critical metrics including <strong className="font-bold text-white">reboiler heat duty, lean and rich solvent circulation loops, stripper pressure gradients, and inlet temperatures</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Once deployed, the model acts as an active vector observer, capturing minor statistical drifts away from safe performance geometry. These identified clusters give process safety engineers an immediate alert regarding early-stage hydrodynamic anomalies.
            </p>
          </div>

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-blue-500">
              Key Validation Insights
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Running across historical process variables, the engine isolated a definitive 2.87% boundary of anomalous operation. The high-risk anomalies concentrated heavily at the extreme boundaries of circulation rate spikes and simultaneous heat input drops, which correlates directly with the structural mechanics that trigger column flooding and foaming in production blocks.
            </p>
          </div>

          <div className="border-l-2 border-gray-900 pl-6 lg:pl-8">
            <h2 className="text-lg font-bold text-white tracking-tight mb-3 uppercase font-mono text-green-500">
              Asset Value Realization
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Transitioning an asset from reactive downtime management to predictive visibility dramatically shifts its cost profile. For upstream operators handling sour gas feeds, stopping a foaming event 12 hours early prevents amine carryover, protects downstream pipeline specs, and removes the massive overhead cost of unscheduled turnarounds.
            </p>
          </div>

        </div>

        {/* Action Card */}
        <div className="mt-20 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-white tracking-tight mb-3">Optimize Asset Reliability</h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            We partner with technical divisions to build specialized analytics directly integrated with local asset parameters.
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

export default AmineAnomaly;