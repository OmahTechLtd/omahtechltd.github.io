import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* Oil & Gas */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Oil & Gas</h3>
          <p className="text-gray-300 mb-4">
            Predicting equipment failures and optimizing production using AI-driven insights.
          </p>
          <Link
            to="/projects/oil-and-gas"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center inline-block"
          >
            View Demo
          </Link>
        </div>

        {/* Real Estate */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Real Estate</h3>
          <p className="text-gray-300 mb-4">
            House price prediction and property valuation with machine learning.
          </p>
          <Link
            to="/projects/real-estate"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center inline-block"
          >
            View Demo
          </Link>
        </div>

        {/* Agriculture */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Agriculture</h3>
          <p className="text-gray-300 mb-4">
            Yield prediction and crop health monitoring for smarter farming.
          </p>
          <Link
            to="/projects/agriculture"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center inline-block"
          >
            View Demo
          </Link>
        </div>

        {/* Education */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Education</h3>
          <p className="text-gray-300 mb-4">
            Predicting student outcomes to improve education strategies.
          </p>
          <Link
            to="/projects/education"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium text-center inline-block"
          >
            View Demo
          </Link>
        </div>

      </div>
      <div className="mt-10 text-center">
      <Link
    to="/projects"
className="
    relative inline-block px-6 py-3 rounded-lg font-semibold text-white bg-black  
    overflow-hidden
    border-2 border-gray-800   /* subtle border background */
    shadow-[0_2px_4px_rgba(0,0,0,0.5)]   /* base shadow, subtle */
    hover:border-gradient-to-r hover:from-blue-500 hover:via-indigo-600 hover:to-green-500 
    hover:shadow-[0_4px_8px_rgba(34,197,94,0.4),0_4px_8px_rgba(99,102,241,0.4),0_4px_8px_rgba(59,130,246,0.4)]
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    transition ease-in-out duration-300
  "
>    See More Projects
  </Link>
      </div>
    </section>
  );
};

export default Projects;