import React from "react";
import { Link } from "react-router-dom";


export default function ProjectTemplate({ title, industry, problem, dataset, models, results }) {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          <span className="font-semibold">{industry}</span> : {problem}
        </p>

        {/* Dataset */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">Dataset & EDA</h2>
          <p className="text-gray-400">{dataset}</p>
          <div className="bg-gray-800 h-40 rounded-lg mt-4 flex items-center justify-center">
            <span className="text-gray-500">[Placeholder for EDA Charts]</span>
          </div>
        </div>

        {/* Models */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Modeling Approach</h2>
          <ul className="list-disc list-inside text-gray-400">
            {models.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-orange-400">Results</h2>
          <p className="text-gray-400">{results}</p>
          <div className="bg-gray-800 h-40 rounded-lg mt-4 flex items-center justify-center">
            <span className="text-gray-500">[Placeholder for Result Visuals]</span>
          </div>
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Conclusion</h2>
          <p className="text-gray-400">
            This demo highlights how AI can be applied in {industry}. Future work will expand with real-world Nigerian datasets and deeper analysis.
          </p>
        </div>

        {/* <Link
        to="/#projects"
        className="bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 px-6 py-2 rounded-lg font-medium"
      >
        ← Back to Projects
      </Link> */}
      </div>
    </section>
  );
}