import React from "react";
import { Link } from "react-router-dom";

const CrudeOilProduction = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Oil & Gas</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Crude Oil Production Anomaly Detection
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          A multi-model framework for identifying statistically significant anomalies in Nigeria's national crude oil and condensate production record, built on 71 months of NUPRC data.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Data Source</p>
            <p className="text-white font-medium">NUPRC operational reports</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Coverage</p>
            <p className="text-white font-medium">January 2020 to November 2025</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Terminals Covered</p>
            <p className="text-white font-medium">31 terminals, 2,495 records</p>
          </div>
        </div>

        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              Nigeria's crude oil production record contains months that deviate sharply from expected patterns, driven by a mix of operational disruptions, market events, and structural shifts. Identifying these anomalies accurately is not straightforward because no single method of detection is reliable on its own. Different approaches pick up different kinds of deviations, and relying on one can produce both missed detections and false alarms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We consolidated six years of NUPRC terminal-level production data across 31 terminals into a clean national monthly time series. The data was then put through a structured analytical process covering distributional analysis, trend identification, seasonality testing, and feature engineering before any modelling began.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Four independent detection models were applied to the same dataset, each approaching the problem from a different angle. Rather than picking one model and accepting its output, we used a consensus approach: a month was classified as a high-confidence anomaly only when at least three of the four models agreed on it independently.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This cross-model voting framework reduces the risk of flagging months that one algorithm finds unusual but others do not, producing a more defensible and reliable set of findings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What It Found</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Four months met the high-confidence threshold. March, April, and May 2020 were flagged as anomalous, corresponding to the peak production period immediately before Nigeria's steepest output contraction driven by the convergence of COVID-19 demand collapse and OPEC+ supply cuts. These months stood out not because production was low, but because their pattern broke sharply from everything that followed.
            </p>
            <p className="text-gray-300 leading-relaxed">
              October 2022 was flagged unanimously by all four models, representing a sharp single-month rebound from the series minimum recorded in September 2022. That recovery, a 4 million barrel month-on-month increase, was structurally atypical enough to register across every detection method applied.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">Why It Matters</h2>
            <p className="text-gray-300 leading-relaxed">
              For operators, regulators, and analysts working with production data, knowing which months represent genuine structural anomalies rather than normal variation has practical implications for planning, reporting, and investigation. A framework that can distinguish between the two, and explain why a month was flagged, is more useful than one that simply produces a list of outliers.
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Note</p>
            <p className="text-gray-400 text-sm">
              This project is being presented at a petroleum industry conference in August 2026. Full methodology details will be published following the conference presentation.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Working with production or operational data?</h3>
          <p className="text-gray-400 mb-6">
            We build anomaly detection systems for oil and gas datasets, from field-level production records to process monitoring data.
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

export default CrudeOilProduction;