import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Daily Machine Learning Models
      </h2>
      <p className="text-center text-gray-300 mb-6">
        Explore our featured AI models, updated regularly to inspire your next project.
      </p>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

        {/* House Price Prediction (Regression) */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2 text-green-700">House Price Prediction (Regression)</h3>
          <p className="text-gray-300 mb-4">
            Predict property prices using linear regression.
          </p>
          <Link
            to="/models/regression"
            className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 hover:border-blue-500 transition duration-300"
          >
            Explore Model
          </Link>
        </div>

        {/* Customer Churn Classifier (Classification) */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Customer Churn Classifier (Classification)</h3>
          <p className="text-gray-300 mb-4">
            Predict customer churn using Random Forest.
          </p>
          <Link
            to="/models/classification"
            className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 hover:border-blue-500 transition duration-300"
          >
            Explore Model
          </Link>
        </div>

        {/* Iris Flower Clustering (Unsupervised) */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Iris Flower Clustering (Unsupervised)</h3>
          <p className="text-gray-300 mb-4">
            Explore data clusters using K-Means.
          </p>
          <Link
            to="/models/clustering"
            className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 hover:border-blue-500 transition duration-300"
          >
            Explore Model
          </Link>
        </div>

        {/* Tweet Sentiment Analyzer (NLP) */}
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl min-h-[250px] flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Tweet Sentiment Analyzer (NLP)</h3>
          <p className="text-gray-300 mb-4">
            Detect sentiment (positive/negative) in text data.
          </p>
          <Link
            to="/models/nlp"
className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block w-fit self-start border border-gray-600 hover:border-blue-500 transition duration-300"          >
            Explore Model
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
>    View All Models
  </Link>
      </div>
    </section>
  );
};

export default Projects;