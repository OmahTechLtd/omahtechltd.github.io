import React from "react";
import { Link } from "react-router-dom";

const AmineAnomaly = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Oil & Gas</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Amine System Anomaly Detection
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          An early warning system for industrial amine regeneration units that flags signs of equipment stress before they become operational failures.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Industry</p>
            <p className="text-white font-medium">Oil & Gas Processing</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Data</p>
            <p className="text-white font-medium">49,915 operating data points</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Anomaly Rate</p>
            <p className="text-white font-medium">2.87% flagged across full dataset</p>
          </div>
        </div>

        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              Amine regeneration units are critical to gas treatment operations. When they develop problems like foaming, fouling, flooding, or solvent degradation, the effects compound quickly. By the time operators notice something is wrong through standard monitoring, the damage is often already significant. The client needed a way to catch these issues earlier, before they disrupted operations or required emergency intervention.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We analysed operating data from the amine system and trained a machine learning model to learn what normal behaviour looks like across key process variables including heat duty, amine flow rates, rich amine loading, stripper pressure, and solvent composition.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Once the model understood normal, it could automatically flag operating points that deviated from it. These flagged points represent moments when the system was behaving in ways that are statistically unusual and potentially indicative of early-stage problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We also built an interactive dashboard that visualises the model's output, showing operators which data points are flagged, how they compare to normal operating ranges, and which variables are driving the anomaly signal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What It Found</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Across 49,915 operating data points, the model flagged 2.87% as anomalous. The flagged points clustered around extremes in heat duty and flow rate, consistent with the kinds of conditions that precede foaming and fouling events in real amine systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The dashboard allows engineers to inspect each flagged point in context, compare it against the broader operating envelope, and make informed decisions about whether to investigate or adjust operating conditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Value</h2>
            <p className="text-gray-300 leading-relaxed">
              Early detection means earlier intervention. For an amine unit, catching foaming or fouling early can prevent unplanned shutdowns, protect equipment integrity, and reduce the cost and frequency of maintenance. This model gives operators a structured, data-driven way to do that rather than relying solely on periodic manual checks.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Have a similar challenge?</h3>
          <p className="text-gray-400 mb-6">
            We work with oil and gas operators to build monitoring and detection systems tailored to their specific processes and data.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Talk to Us
          </Link>
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

export default AmineAnomaly;