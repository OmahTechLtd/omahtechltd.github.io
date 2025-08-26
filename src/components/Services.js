import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section id="services" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Services
      </h2>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        
        {/* AI Consulting */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">AI Consulting</h3>
          <p className="text-gray-300">
            We guide businesses in adopting AI the right way — from identifying
            opportunities to selecting the right models and strategies.
          </p>
        </div>

        {/* Training */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Training</h3>
          <p className="text-gray-300">
            Whether it’s upskilling your team or training individuals, we provide
            hands-on AI and ML training tailored to your goals.
          </p>
        </div>

        {/* Models (special layout) */}
        <div className="md:col-span-2 flex flex-col md:flex-row items-start justify-between bg-gradient-to-r from-blue-800 to-teal-700 rounded-lg p-8 shadow-lg">
          
          {/* Left side: text */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">Models</h3>
            <p className="text-gray-100">
              Whether you're a researcher needing quick pipelines or an
              organization requiring full-scale solutions, we’ve got you
              covered.
            </p>
          </div>
          
          {/* Right side: buttons stacked vertically */}
          <div className="flex flex-col gap-4 mt-6 md:mt-0 md:ml-12 w-full md:w-auto">
            <Link
              to="/models/generic"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center"
            >
              For Researchers & Students
            </Link>
            <Link
              to="/models/custom"
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-medium text-center"
            >
              For Organizations
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;