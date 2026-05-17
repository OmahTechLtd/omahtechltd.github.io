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

        {/* ML Project Implementation - full width */}
        <div className="md:col-span-2 bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-2 block">For Researchers & Students</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">ML Project Implementation</h3>
            <p className="text-gray-300 max-w-2xl">
              We handle the technical build of your ML project and deliver a clean, working implementation with an interactive dashboard. You understand your results, present with confidence, and submit work that stands out.
            </p>
          </div>
          <button
            onClick={() => handleSelect("ml-project-implementation")}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block md:w-48"
          >
            Get Started
          </button>
        </div>

        {/* AI Tools Training */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 block">Coming Soon</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">AI Tools Training</h3>
            <p className="text-gray-300 mb-3">
              A 5-week practical programme for everyday professionals who want to use AI tools confidently. No technical background required. Learn by doing from week one.
            </p>
            <p className="text-green-400 font-semibold text-sm">₦150,000 &nbsp;·&nbsp; First cohort pricing</p>
          </div>
          <button
            onClick={() => handleSelect("ai-tools-training")}
            className="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-medium text-center text-white transition block w-full"
          >
            Join Waitlist
          </button>
        </div>

        {/* ML Training */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 block">Coming Soon</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">ML Training</h3>
            <p className="text-gray-300 mb-3">
              An 8-week beginner programme that takes you from zero to building real machine learning models. Practical, structured, and built around the same techniques used on live industry projects.
            </p>
            <p className="text-green-400 font-semibold text-sm">₦250,000 &nbsp;·&nbsp; First cohort pricing</p>
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