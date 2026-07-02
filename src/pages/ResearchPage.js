import React from "react";
import { Link } from "react-router-dom";

const ResearchPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <Link to="/" className="text-sm text-green-400 hover:underline mb-10 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Research & Publications
        </h1>
        <p className="text-gray-400 mb-16 max-w-xl">
          Original studies and peer-reviewed conference papers produced by OmahTech on Nigerian upstream production data. Our research work informs the design and implementation of operational decision support systems.

        </p>

        {/* Published */}
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Published</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-blue-400">
                Oil & Gas | Independent Study
              </span>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Terminal-Level Production Decline Analysis and Forecasting
              </h3>
              <p className="text-gray-400 text-sm">
                The first terminal-level ML forecasting study applied to NUPRC public production data across 30 Nigerian export terminals. XGBoost achieved 7.88% mean MAPE against 88.90% for Prophet across 26 terminals, with R-squared values above 0.96 across all terminal size tiers.
              </p>
            </div>
            <div className="flex gap-3 mt-6">
             <a 
                href="https://doi.org/10.5281/zenodo.20641691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
              >
                Read Paper →
              </a>
                <a      
                href="https://terminal-forecast-dashboard.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
              >
                Live Dashboard →
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-blue-400">
                Oil & Gas | Independent Study
              </span>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Locked Out of the Intelligence Revolution: Nigeria's Upstream Data Gap and a Framework for Industry Data Collaboration
              </h3>
              <p className="text-gray-400 text-sm">
                A three-tier federated learning framework proposing a neutral data collaboration model for Nigerian upstream operators, addressing the structural data gap left by IOC exits and the barriers preventing indigenous operators from accessing AI-grade intelligence.
              </p>
            </div>
            <a
              href="https://doi.org/10.5281/zenodo.20813414"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
            >
              Read Paper →
            </a>
          </div>

        </div>

        {/* Conference Papers */}
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">Conference Papers</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Oil & Gas</span>
                <span className="text-xs font-semibold text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full">SPE NAICE 2026</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Univariate Time-Series Anomaly Detection in Crude Oil Production Volumes Using Unsupervised Learning Techniques
              </h3>
              <p className="text-gray-400 text-sm">
                A co-authored conference paper accepted and presented at the SPE Nigeria Annual International Conference and Exhibition 2026 in Lagos. Applies unsupervised learning techniques to anomaly detection in crude oil production volumes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Oil & Gas</span>
                <span className="text-xs font-semibold text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full">SPE NAICE 2026</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Comparative Production Modeling and Forecasting of Crude Oil and Natural Gas in Nigeria
              </h3>
              <p className="text-gray-400 text-sm">
                A co-authored conference paper accepted and presented at SPE NAICE 2026 in Lagos. Presents a comparative analysis of production modelling and forecasting approaches for Nigerian crude oil and natural gas.
              </p>
            </div>
          </div>

        </div>

        {/* In Progress */}
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">In Progress</h3>
        <div className="grid md:grid-cols-2 gap-8">

          <div className="relative bg-gradient-to-r from-black via-[#0d0d0d] to-[#111111] p-8 rounded-xl border border-dashed border-gray-700 opacity-75">
            <span className="absolute top-4 right-4 text-xs font-semibold text-gray-500 border border-gray-700 px-2 py-1 rounded-full">
              In Progress
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-gray-500">
                Oil & Gas | Independent Study
              </span>
              <h3 className="text-xl font-semibold mb-3 text-gray-400">
                Trajectory versus Driver: Unsupervised Classification of Nigeria's Crude Oil Export Infrastructure
              </h3>
              <p className="text-gray-500 text-sm">
                A multivariate study extending the terminal-level analysis to ask not just where each terminal went, but what drove it there. Uses unsupervised machine learning to classify terminals by production driver across security, oil price, and OPEC policy signals simultaneously.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResearchPage;