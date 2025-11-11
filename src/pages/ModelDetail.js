import React from "react";
import { useParams, Link } from "react-router-dom";
import modelsData from "../data/models.json";

const ModelDetail = () => {
  const { id } = useParams();
  const model = modelsData.find((m) => m.id === id);

  if (!model) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold mb-4">Model not found</h2>
        <Link
          to="/models"
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg"
        >
          Back to Models
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-gray-200 py-16 px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          {model.title}
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{model.description}</p>
      </div>

      {/* Project Context */}
      {(model.industry || model.problem_statement) && (
        <section className="mb-10 space-y-3">
          <h2 className="text-2xl font-semibold text-green-400">Project Context</h2>
          {model.industry && (
            <p className="text-gray-300">
              <strong>Industry:</strong> {model.industry}
            </p>
          )}
          {model.problem_statement && (
            <p className="text-gray-300 leading-relaxed">{model.problem_statement}</p>
          )}
        </section>
      )}

      {/* Project Summary */}
      {model.summary && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">Project Summary</h2>
          <p className="text-gray-300 leading-relaxed">{model.summary}</p>
        </section>
      )}

      {/* Modeling Approach */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Modeling Approach</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300 text-lg">
          <li><strong>Algorithm:</strong> {model.algorithm}</li>
          <li><strong>Dataset:</strong> {model.dataset}</li>
          {model.features && <li><strong>Key Features Used:</strong> {model.features.join(", ")}</li>}
          {model.tools && <li><strong>Tools & Frameworks:</strong> {model.tools.join(", ")}</li>}
        </ul>
      </section>

      {/* Technical Stack */}
      {model.technical_stack && model.technical_stack.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Technical Stack</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300 text-lg">
            {model.technical_stack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Key Findings */}
      {model.findings && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Key Findings</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300 text-lg">
            {model.findings.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Performance Metrics */}
      {model.metrics && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Performance Metrics</h2>
          <ul className="space-y-2 text-gray-300 text-lg">
            {Object.entries(model.metrics).map(([key, value]) => (
              <li key={key}>
                <span className="capitalize text-gray-400">{key}:</span>{" "}
                <span className="font-medium text-white">
                  {typeof value === "number" ? value.toFixed(2) : value}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Results Interpretation */}
      {model.results_interpretation && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Results Interpretation</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{model.results_interpretation}</p>
        </section>
      )}

      {/* EDA Charts and Insights */}
      {model.eda_charts && model.eda_charts.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-400 mb-6">EDA Visualizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {model.eda_charts.map((chart, index) => (
                <figure key={index} className="text-center">
                  <img
                    src={chart.src}
                    alt={chart.caption || `EDA chart ${index + 1}`}
                    className="rounded-lg shadow-md"
                  />
                  {chart.caption && (
                    <figcaption className="text-sm text-gray-400 mt-2">{chart.caption}</figcaption>
                  )}
                </figure>
              ))}
            </div>
            {model.eda_insights && (
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">EDA Insights</h3>
                <ul className="list-disc ml-6 space-y-2 text-gray-300 text-lg">
                  {model.eda_insights.map((insight, i) => (
                    <li key={i}>{insight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Deployment & Links */}
      <section className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">Deployment</h2>
        <p className="text-gray-300 mb-6 text-lg">
          This model is deployed using <strong>Gradio</strong> on{" "}
          <strong>Hugging Face Spaces</strong> for live interaction.
        </p>
        <a
          href={model.huggingface_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
        >
          Launch Model Demo
        </a>
      </section>

      {/* Back Button */}
      <div className="text-center">
        <Link
          to="/models"
          className="text-gray-400 hover:text-white font-semibold"
        >
          ← Back to All Models
        </Link>
      </div>
    </section>
  );
};

export default ModelDetail;