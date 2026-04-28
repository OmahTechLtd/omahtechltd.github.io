import React from "react";

const Services = () => {
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
          <a href="#contact" className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block">
            Get Started
          </a>
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
          <a href="#contact" className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block">
            Book a Session
          </a>
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
          <a href="#contact" className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center text-white transition block">
            Get Started
          </a>
        </div>

        {/* ML Training */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2 block">Coming Soon</span>
            <h3 className="text-xl font-semibold mb-3 text-green-400">ML Training</h3>
            <p className="text-gray-300">
Self-paced, pre-recorded courses designed to take you from zero to building real machine learning models. Practical, structured, and built around the same techniques our team uses on live business projects. Beginner and Intermediate levels available.            </p>
          </div>
          <a href="#contact" className="mt-6 bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-medium text-center text-white transition block">
            Join Waitlist
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;