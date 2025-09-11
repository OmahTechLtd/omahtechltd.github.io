import React, { useState } from "react";
import emailjs from "emailjs-com";

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
            We help organizations identify opportunities, develop custom AI solutions, and integrate machine learning into their operations to drive growth and efficiency.
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
              <p className="text-gray-400 mt-auto">We design and build machine learning models tailored to your business challenges.</p>
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
              <p className="text-gray-400 mt-auto">Not sure where to start with AI? We’ll help you map out a strategy and define a roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <p className="max-w-3xl text-gray-300">
            At Omah Tech, we combine technical expertise with deep industry understanding to deliver solutions that work in the real world. Whether you’re looking to automate workflows or explore AI-driven growth, we partner with you every step of the way.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">Industries we serve</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Oil & Gas",
              "Real Estate",
              "Agriculture",
              "Education",
              "Fintech",
              "Retail"
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full px-4 py-2 text-sm bg-white/5 ring-1 ring-white/10"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full max-w-md p-6 bg-black rounded-lg shadow-lg ring-1 ring-white/10">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
              aria-label="Close modal"
            >
              &#10005;
            </button>
            <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
              Book a Consultation
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                emailjs
                  .sendForm(
                    "service_qivxk34",       // EmailJS Service ID
                    "template_u4y05zm",      // EmailJS Template ID
                    e.target,
                    "tefVZMAa7f6_ULKWs"        // EmailJS Public Key
                  )
                  .then(
                    (result) => {
                      alert("✅ Consultation request sent successfully!");
                      setIsModalOpen(false);
                    },
                    (error) => {
                      alert("❌ Failed to send. Please try again later.");
                      console.error("EmailJS Error:", error);
                    }
                  );
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="mt-2 rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 px-5 py-3 font-medium text-black hover:brightness-110 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}