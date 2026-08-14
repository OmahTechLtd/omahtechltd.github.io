import React from "react";
import { Link } from "react-router-dom";

const Research = ({ onServiceSelect }) => {
  const handleCollaborationClick = () => {
    if (onServiceSelect) {
      onServiceSelect("research-collaboration");
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="research" className="py-24 px-6 bg-black relative">
      {/* Structural Visual Boundary Line Thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
      
      {/* Visual continuity: matching ambient lighting layout */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header Wrapper with Top-Right Archive Link */}
        <div className="relative mb-16">
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
Research & Publications          </div>

          <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Original studies and peer-reviewed conference papers published by OmahTech on Nigerian upstream production data.
          </p>

          {/* Absolute Archive Link position at top right on desktop, centered below on mobile */}
          <div className="md:absolute md:top-2 md:right-0 mt-6 md:mt-0 text-center">
            <Link to="/research" className="text-xs font-mono text-green-400 hover:text-green-300 transition-all border border-gray-900/50 hover:border-green-400/30 px-3 py-1.5 rounded-lg bg-zinc-950/40">
              See Archive →
            </Link>
          </div>
        </div>
        {/* Featured Industry Insight */}
<div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 md:p-10 rounded-xl shadow-2xl mb-8 hover:border-gray-900 transition-all group">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div className="flex-1">
      <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
        Industry Insight
      </span>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
        Five Conversations Shaping Nigeria's Upstream Digital Future
      </h3>
      <p className="text-gray-200 text-sm font-semibold mb-3 leading-snug">
        Operational insights from SPE NAICE 2026 and what they mean for indigenous operators.
      </p>
      <p className="text-gray-400 text-sm leading-relaxed">
        Five recurring themes from conversations with a major operator, a reservoir engineering researcher, and field level engineers at SPE NAICE 2026, on production optimization, reservoir engineering workflows, water breakthrough, and what makes technology credible in Nigeria's upstream sector.
      </p>
      <p className="text-gray-500 text-[10px] font-mono border-t border-gray-950 pt-4 mt-6">
        August 2026 | Omah Tech Enterprises Ltd.
      </p>
    </div>
    <div className="flex flex-row md:flex-col gap-3 md:w-48 shrink-0">
      <a
        href="/research/five-conversations-shaping-nigerias-upstream-digital-future.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg text-[11px] font-mono tracking-wider uppercase font-bold text-center transition-all"
      >
        Read Paper
      </a>
    </div>
  </div>
</div>

        {/* 2-Column Master Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 items-stretch">
          
          {/* Column 1: Published Asset Studies */}
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                Published Studies
              </span>
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                Terminal-Level Production Decline Analysis and Forecasting
              </h3>
              <p className="text-gray-200 text-xs font-semibold mb-4 leading-snug">
                The first terminal-level ML forecasting study applied to NUPRC public production data across 30 Nigerian export terminals.
              </p>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                XGBoost achieved 7.88% mean MAPE against 88.90% for Prophet across 26 terminals, with R-squared values above 0.96 across all terminal size tiers.
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-mono border-t border-gray-950 pt-4 mb-4">
                DOI: 10.5281/zenodo.20641691
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://doi.org/10.5281/zenodo.20641691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-[11px] font-mono tracking-wider uppercase font-bold text-center transition-all"
                >
                  Read Paper
                </a>
                <a
                  href="https://terminal-forecast-dashboard.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-800 hover:border-gray-700 bg-transparent hover:bg-white/5 text-white py-2 rounded-lg text-[11px] font-mono tracking-wider uppercase font-bold text-center transition-all"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Conference Proceedings (Stacked Internally) */}
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 md:p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-950 pb-2">
                <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
                  Conference Papers
                </span>
                <span className="text-[9px] font-mono tracking-wider text-white border border-gray-800 px-1.5 py-0.5 rounded bg-black">
                  SPE NAICE 2026
                </span>
              </div>

              {/* Conference Paper 1 */}
<div>
  <h4 className="text-white text-sm font-bold tracking-tight mb-1">
    Univariate Time-Series Anomaly Detection
  </h4>
  <p className="text-gray-400 text-xs leading-relaxed">
    Crude oil production volume anomaly validation using unsupervised machine learning. Presented at SPE NAICE 2026 in Lagos.
  </p>
  <a
    href="https://onepetro.org/SPENAIC/proceedings-abstract/26NAIC/26NAIC/SPE-234794-MS/802110"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-[11px] font-mono text-green-400 hover:text-green-300 transition-all"
  >
    View on OnePetro →
  </a>
</div>

{/* Conference Paper 2 */}
<div className="border-t border-gray-950/80 pt-4">
  <h4 className="text-white text-sm font-bold tracking-tight mb-1">
    Comparative Production Modeling and Forecasting
  </h4>
  <p className="text-gray-400 text-xs leading-relaxed">
    Evaluating historical analytics maps for crude oil and natural gas in Nigeria. Presented at SPE NAICE 2026 in Lagos.
  </p>
  <a
    href="https://onepetro.org/SPENAIC/proceedings-abstract/26NAIC/26NAIC/SPE-234795-MS/802126"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 text-[11px] font-mono text-green-400 hover:text-green-300 transition-all"
  >
    View on OnePetro →
  </a>
</div>
            </div>
            
            <p className="text-gray-500 text-[10px] font-mono border-t border-gray-950 pt-4 mt-6">
              Location: Lagos, Nigeria | Peer-Reviewed
            </p>
          </div>

        </div>

        {/* --- COLLABORATION CTA --- */}
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 md:p-12 rounded-xl shadow-2xl text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            We partner with industry operators, technology developers, and research institutions to produce peer-reviewed machine learning frameworks within secure data-sharing frameworks.
          </p>
          <button
            onClick={handleCollaborationClick}
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 bg-green-500 hover:bg-green-600 text-black text-xs font-mono tracking-wider uppercase font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/10 active:scale-[0.98]"
          >
            Propose a Collaboration
          </button>
        </div>

      </div>
    </section>
  );
};

export default Research;