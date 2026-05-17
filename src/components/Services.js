import React from "react";

const Services = ({ onServiceSelect }) => {

  const handleSelect = (serviceKey) => {
    onServiceSelect(serviceKey);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Services
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* AI & Data Solutions */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2 block">For Businesses</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">AI & Data Solutions</h3>
            <p className="text-gray-300">
              We analyze your business data and build intelligent systems that help you predict outcomes, spot risks early, and make faster decisions. From customer behavior to sales forecasting to fraud detection.
            </p>
          </div>
          <button
            onClick={() => handleSelect("ai-data-solutions")}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block w-full"
          >
            Get Started
          </button>
        </div>

        {/* AI Strategy & Advisory */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2 block">For Business Leaders</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">AI Strategy & Advisory</h3>
            <p className="text-gray-300">
              A focused working session where we assess your business, identify where AI creates the most value, and give you a clear, practical roadmap. You leave with direction, not just information.
            </p>
          </div>
          <button
            onClick={() => handleSelect("ai-strategy-advisory")}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block w-full"
          >
            Book a Session
          </button>
        </div>

        {/* ML Project Implementation */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2 block">For Researchers & Students</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">ML Project Implementation</h3>
            <p className="text-gray-300">
              We handle the technical build of your ML project and deliver a clean, working implementation with an interactive dashboard. You understand your results, present with confidence, and submit work that stands out.
            </p>
          </div>
          <button
            onClick={() => handleSelect("ml-project-implementation")}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block w-full"
          >
            Get Started
          </button>
        </div>

        {/* Training Programmes */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 block">Coming Soon</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Training Programmes</h3>
            <p className="text-gray-300">
              Two structured programmes built for beginners. Learn to use AI tools confidently in everyday life and business, or go deeper and start building real machine learning models from scratch. Practical, structured, and designed around real outcomes.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="text-xs font-semibold text-green-400 border border-green-400/30 px-3 py-1 rounded-full">AI Tools Training — 5 Weeks</span>
              <span className="text-xs font-semibold text-blue-400 border border-blue-400/30 px-3 py-1 rounded-full">ML Training — 8 Weeks</span>
            </div>
          </div>
          <button
            onClick={() => handleSelect("ml-training")}
            className="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-medium text-center text-white transition block w-full"
          >
            Join Waitlist
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;