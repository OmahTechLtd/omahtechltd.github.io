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
  className="px-6 py-3 rounded-lg font-medium text-green-400 border border-green-400
             bg-black hover:bg-green-500 hover:text-black hover:border-green-500 
             transition duration-300 shadow-lg hover:shadow-green-500/50"
>
  See More Projects
</Link>
      </div>
    </section>
  );
};

export default Projects;