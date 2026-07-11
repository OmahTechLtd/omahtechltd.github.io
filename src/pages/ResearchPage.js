import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResearchPage = ({ onServiceSelect }) => {
  const navigate = useNavigate();

  const handleCollaborationClick = () => {
    if (onServiceSelect) {
      onServiceSelect("research-collaboration");
    }
    // Safely shift routers while attaching route memory variables
    navigate("/", { state: { targetService: "research-collaboration" } });
  };

  return (
    <div className="bg-black text-white min-h-screen py-24 px-6 border-t border-gray-900 relative">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <Link
                    to="/"
                    className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider uppercase mb-12 group"
                  >
                    <span className="transform group-hover:-translate-x-1 transition-transform mr-2">←</span>
                    Back to Home
                  </Link>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Research & Publications
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
Original studies and peer-reviewed conference papers on Nigeria's upstream oil and gas sector, published openly and designed to inform operational practice.          </p>
        </div>

        {/* Published Section */}
        <div className="mb-16">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-950 pb-2">
            Published Asset Studies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Paper 1 */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                  Independent Industrial Evaluation
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                  Terminal-Level Production Decline Analysis and Forecasting
                </h3>
                <p className="text-gray-200 text-sm font-semibold mb-4 leading-snug">
                  The first terminal-level ML forecasting study applied to NUPRC public production data across 30 Nigerian export terminals.
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  XGBoost achieved 7.88% mean MAPE against 88.90% for Prophet across 26 terminals, with R-squared values above 0.96 across all terminal size tiers.
                </p>
                <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                  DOI: 10.5281/zenodo.20641691 | Data Pipelines Validated
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="https://doi.org/10.5281/zenodo.20641691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase font-bold text-center transition-all"
                >
                  Read Paper
                </a>
                <a      
                  href="https://terminal-forecast-dashboard.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-800 hover:border-gray-700 bg-transparent hover:bg-white/5 text-white px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase font-bold text-center transition-all"
                >
                  Live Dashboard
                </a>
              </div>
            </div>

            {/* Paper 2 */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                  Data Governance Framework
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                  Locked Out of the Intelligence Revolution
                </h3>
                <p className="text-gray-200 text-sm font-semibold mb-4 leading-snug">
                  Nigeria's Upstream Data Gap and a Framework for Industry Data Collaboration.
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A three-tier federated learning framework proposing a neutral data collaboration model for Nigerian upstream operators, addressing structural gaps left by IOC exits and regional AI-grade intelligence barriers.
                </p>
                <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                  DOI: 10.5281/zenodo.20813414 | Cryptographic Node Layer
                </p>
              </div>
              <a
                href="https://doi.org/10.5281/zenodo.20813414"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase font-bold text-center transition-all block w-full"
              >
                Read Paper
              </a>
            </div>
          </div>
        </div>

        {/* Conference Papers Section */}
        <div className="mb-16">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-950 pb-2">
            Conference Proceedings
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Conf Paper 1 */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
                    Technical Peer Review
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white border border-gray-800 px-2 py-0.5 rounded bg-black">
                    SPE NAICE 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                  Univariate Time-Series Anomaly Detection
                </h3>
                <p className="text-gray-200 text-sm font-semibold mb-4 leading-snug">
                  Crude oil production volume anomaly validation using unsupervised machine learning.
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A co-authored conference paper accepted and presented at the SPE Nigeria Annual International Conference and Exhibition 2026 in Lagos.
                </p>
                <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                  Location: Lagos, Nigeria | High-Frequency Baseline Engine
                </p>
              </div>
            </div>

            {/* Conf Paper 2 */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest">
                    Technical Peer Review
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-white border border-gray-800 px-2 py-0.5 rounded bg-black">
                    SPE NAICE 2026
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                  Comparative Production Modeling and Forecasting
                </h3>
                <p className="text-gray-200 text-sm font-semibold mb-4 leading-snug">
                  Evaluating historical analytics maps for crude oil and natural gas in Nigeria.
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  A co-authored conference paper accepted and presented at SPE NAICE 2026 in Lagos.
                </p>
                <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                  Location: Lagos, Nigeria | Predictive Reservoir Horizons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Forthcoming Studies Section */}
        <div className="mb-20">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-500 mb-6 border-b border-gray-950 pb-2">
            Forthcoming Studies
          </h3>
          <div className="relative bg-[#020202] border border-dashed border-gray-800 p-8 rounded-xl">
            <span className="absolute top-4 right-4 text-[10px] font-mono font-semibold tracking-wider text-gray-500 uppercase border border-gray-800 px-2.5 py-0.5 rounded bg-black">
              Under Development
            </span>
            <div>
              <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                Panel Data Econometrics
              </span>
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                Trajectory versus Driver: A Panel Data Analysis of Security, Oil Price, and OPEC Policy Effects on Nigerian Crude Oil Export Terminal Production
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                This study moves beyond simple trajectory tracking to map explicit driver sensitivities using a multi-period fixed effects panel regression framework. Evaluating 2,036 spatial-temporal observations (30 export terminals across 76 months), the paper structures four distinct econometric specifications to unpack how terminal production baselines respond dynamically to Brent price volatility, localized security incidents, and shifting OPEC compliance margins.
              </p>
              <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                Specifications: Baseline Autoregression | Combined Exogenous Shocks | Interacted Trajectory Sentiments | Multi-Period Regime Robustness (Hausman / Driscoll-Kraay Verification)
              </p>
            </div>
          </div>
        </div>

        {/* Institutional CTA Section */}
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 md:p-12 rounded-xl shadow-2xl text-center">
          {/* <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Propose a Research Collaboration</h3> */}
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
    </div>
  );
};

export default ResearchPage;