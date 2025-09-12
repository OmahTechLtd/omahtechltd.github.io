import React, { useState } from "react";
import ConsultationModal from "../../components/ConsultationModal";

export default function AiConsulting() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="min-h-[50vh] pt-28 md:pt-32 pb-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-white/60">
            Services
          </p>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            We help organizations identify opportunities, develop custom AI solutions,
            and integrate machine learning into their operations to drive growth and efficiency.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {/* Gradient-glow CTA (subtle) */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center rounded-lg px-0 py-0"
            >
              <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 opacity-40 blur-xl transition-opacity group-hover:opacity-60"></span>
              <span className="rounded-lg bg-black/60 px-5 py-3 font-medium ring-1 ring-white/10 cursor-pointer">
                Book a consultation
              </span>
            </button>

            <a
              href="/#models"
              className="rounded-lg px-5 py-3 font-medium ring-1 ring-white/15 hover:ring-white/25"
            >
              See model work
            </a>
          </div>
        </div>
      </section>

      {/* Custom AI Model Development & AI Strategy & Guidance */}
      <section className="py-10 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="group rounded-lg bg-gradient-to-br from-blue-800/40 via-indigo-700/40 to-green-700/40 p-[2px] transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="bg-black/80 rounded-lg p-6 h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
                Custom AI Model Development
              </h2>
              <ul className="space-y-2 text-gray-300 mb-4 list-disc list-inside">
                <li>Predictive Maintenance for Oil & Gas</li>
                <li>Real Estate Price Optimization</li>
                <li>Fraud Detection Systems</li>
                <li>Supply Chain Optimization</li>
                <li>Customer Insights</li>
              </ul>
              <p className="text-gray-400 mt-auto">
                We design and build machine learning models tailored to your business challenges.
              </p>
            </div>
          </div>

          <div className="group rounded-lg bg-gradient-to-br from-blue-800/40 via-indigo-700/40 to-green-700/40 p-[2px] transition-all hover:scale-[1.02] hover:shadow-lg">
            <div className="bg-black/80 rounded-lg p-6 h-full flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
                AI Strategy & Guidance
              </h2>
              <ul className="space-y-2 text-gray-300 mb-4 list-disc list-inside">
                <li>Assess current processes for AI readiness</li>
                <li>Identify high-impact AI use cases</li>
                <li>Train your team on AI tools and workflows</li>
                <li>Provide actionable recommendations for scaling AI systems</li>
              </ul>
              <p className="text-gray-400 mt-auto">
                Not sure where to start with AI? We’ll help you map out a strategy and define a roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <p className="max-w-3xl text-gray-300">
            At Omah Tech, we combine technical expertise with deep industry understanding
            to deliver solutions that work in the real world.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Industries we serve</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Oil & Gas", "Real Estate", "Agriculture", "Education", "Fintech", "Retail"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full px-4 py-2 text-sm bg-white/5 ring-1 ring-white/10"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ✅ Insert Consultation Modal Here */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}