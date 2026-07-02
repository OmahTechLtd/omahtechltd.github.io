import React from "react";
import { Link } from "react-router-dom";

const AmineEnergy = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Oil & Gas</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Amine System Energy Optimisation
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          A predictive model that recommends optimal reboiler settings to reduce energy consumption in amine regeneration units without compromising gas treatment performance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Industry</p>
            <p className="text-white font-medium">Oil & Gas Processing</p>
          </div>
          {/* <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Data Source</p>
            <p className="text-white font-medium">Aspen HYSYS simulation data</p>
          </div> */}
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Application</p>
            <p className="text-white font-medium">Real-time decision support</p>
          </div>
        </div>

        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              The reboiler is one of the most energy-intensive components in an amine regeneration system. Operating it at the wrong duty setting means either wasting energy or under-stripping acid gases, both of which carry real operational and cost consequences. Most facilities rely on fixed operating targets or manual adjustments, neither of which accounts for the variability in feed conditions that happens in practice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We trained a machine learning model to predict the optimal reboiler duty for a given set of inlet conditions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The model learns the relationship between operating variables and energy requirements across a wide range of conditions. Given a new set of inputs, it recommends the reboiler setting that achieves efficient acid gas removal at the lowest energy cost.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The output was packaged into an interactive dashboard that operators can use as a real-time decision-support tool, entering current operating conditions and receiving a recommended reboiler duty alongside the reasoning behind it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Value</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Energy costs in gas processing are significant. A model that consistently identifies more efficient reboiler settings translates directly into reduced fuel gas consumption and lower operating costs over time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond cost savings, the tool gives operators a data-backed basis for their decisions rather than operating on intuition or fixed targets that may no longer reflect current conditions. It is a practical step toward smarter, more responsive process management.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Interested in optimising your operations?</h3>
          <p className="text-gray-400 mb-6">
            We build predictive tools for oil and gas processes using your operational data or simulation outputs.
          </p>
          <a
            href="/#services"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Talk to Us
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link to="/#projects" className="text-gray-500 hover:text-gray-300 text-sm transition">
            Back to Our Work
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AmineEnergy;