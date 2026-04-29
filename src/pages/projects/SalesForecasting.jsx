import React from "react";
import { Link } from "react-router-dom";

const SalesForecasting = () => {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-4">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Retail & Business</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Sales Forecasting Dashboard
        </h1>

        <p className="text-gray-300 text-lg mb-12">
          An interactive forecasting tool that gives business owners a 12-month forward view of expected revenue, with confidence ranges they can actually use in planning conversations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Industry</p>
            <p className="text-white font-medium">Retail & Business</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Forecast Horizon</p>
            <p className="text-white font-medium">12 months with confidence ranges</p>
          </div>
          <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Training Data</p>
            <p className="text-white font-medium">4 years, 9,994 transactions</p>
          </div>
        </div>

        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Problem</h2>
            <p className="text-gray-300 leading-relaxed">
              Most retail businesses make revenue projections based on gut feel, last year's numbers, or simple percentage assumptions. None of those approaches accounts for seasonality, trend shifts, or the natural uncertainty in future sales. The result is plans that are either too optimistic or too conservative, and decisions made without a clear picture of the range of outcomes the business might actually face.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What We Built</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We took four years of retail transaction data covering nearly 10,000 orders across multiple product categories and built a forecasting model that learns the underlying patterns in the business's sales history, including seasonality, trend direction, and month-to-month variability.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The model generates a 12-month revenue forecast with three outputs for each month: the expected figure, a high estimate, and a low estimate. That range gives business owners something more useful than a single number. It shows them the realistic spread of outcomes and lets them plan for different scenarios.
            </p>
            <p className="text-gray-300 leading-relaxed">
              All of this is packaged into an interactive dashboard. Users can upload their own sales data, view their historical monthly trend, and immediately see the 12-month projection alongside the confidence range. No technical knowledge required to use it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">What It Shows</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The dashboard surfaces seasonal patterns in the sales data that are often invisible in raw spreadsheets. It shows which months historically drive the most revenue, where dips tend to occur, and how that maps onto what the business can expect in the year ahead.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The forecast summary table gives a month-by-month breakdown of predicted revenue, the high estimate, and the low estimate, formatted clearly enough to drop directly into a business plan or investor conversation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">The Value</h2>
            <p className="text-gray-300 leading-relaxed">
              A retail business that knows its expected revenue range three to twelve months out can make smarter decisions about inventory, staffing, marketing spend, and cash flow management. This tool does not replace business judgment, it gives business owners better information to apply it to.
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Dashboard</p>
            <p className="text-gray-400 text-sm">
              The interactive dashboard is currently being prepared for deployment. It will be available for live demonstration shortly.
            </p>
          </div>

        </div>

        <div className="mt-16 bg-[#111111] border border-gray-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-3">Want a forecast built for your business?</h3>
          <p className="text-gray-400 mb-6">
            We build forecasting dashboards tailored to your sales data, your industry, and the questions your business actually needs to answer.
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

export default SalesForecasting;