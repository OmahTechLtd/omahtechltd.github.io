import React, { useState } from "react";
import modelDetails from "../data/modelDetails.js";
import { useNavigate } from "react-router-dom";

const GenericModels = () => {
  const navigate = useNavigate();

  const [outputType, setOutputType] = useState("");
  const [dataType, setDataType] = useState("");
  const [datasetSize, setDatasetSize] = useState("");
  const [selectedModel, setSelectedModel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getRecommendation = () => {
    if (!outputType || !dataType || !datasetSize) return null;

    // Simple recommendation logic based on selections
    if (outputType === "Number") {
      if (dataType === "Tables") {
        if (datasetSize === "Small") {
          return {
            model: "Linear Regression",
            description: "A simple model for predicting numerical values from tabular data."
          };
        } else {
          return {
            model: "Gradient Boosting Machines",
            description: "Powerful ensemble models for numerical prediction on larger datasets."
          };
        }
      } else if (dataType === "Text") {
        return {
          model: "Recurrent Neural Networks",
          description: "Models suited for sequential numerical predictions from text data."
        };
      } else {
        return {
          model: "Neural Networks",
          description: "Flexible models for numeric output with various data types."
        };
      }
    }

    if (outputType === "Category") {
      if (dataType === "Images") {
        return {
          model: "Convolutional Neural Networks",
          description: "Effective for image classification tasks."
        };
      } else if (dataType === "Text") {
        return {
          model: "Transformer Models",
          description: "State-of-the-art models for text classification."
        };
      } else {
        return {
          model: "Random Forest",
          description: "Robust classifier for tabular and mixed data."
        };
      }
    }

    if (outputType === "Groups/Clusters") {
      return {
        model: "K-Means Clustering",
        description: "Unsupervised method to segment data into groups."
      };
    }

    if (outputType === "Actions over time") {
      return {
        model: "Reinforcement Learning Agents",
        description: "Models that learn optimal actions through interaction over time."
      };
    }

    return null;
  };

  const recommendation = getRecommendation();

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Generic Models Assistant
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        This assistant will guide researchers and students in selecting and training
        models. Just pick the options below or skip straight to training.
      </p>

      {/* Model Recommender Form */}
      <div className="w-full max-w-3xl bg-[#0b0f19]/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 flex flex-col gap-8">
        {/* Output Type */}
        <div className="bg-[#111827]/70 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <span className="text-blue-400 font-bold">1.</span> Type of Output Expected
          </h3>
          <p className="text-gray-400 text-sm mb-3">What kind of result do you want to predict?</p>
          <select
            id="outputType"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-blue-500 outline-none text-white transition-all"
          >
            <option value="">Select an option</option>
            <option value="Number">A number (e.g., prices, scores)</option>
            <option value="Category">A category (e.g., yes/no, spam/not spam)</option>
            <option value="Groups/Clusters">Groups/clusters (e.g., segmenting customers)</option>
            <option value="Actions over time">Actions over time (e.g., a game agent learning moves)</option>
          </select>
        </div>

        {/* Data Type */}
        <div className="bg-[#111827]/70 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <span className="text-blue-400 font-bold">2.</span> Type of Data
          </h3>
          <p className="text-gray-400 text-sm mb-3">What kind of data are you working with?</p>
          <select
            id="dataType"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-blue-500 outline-none text-white transition-all"
          >
            <option value="">Select an option</option>
            <option value="Text">Text</option>
            <option value="Images">Images</option>
            <option value="Tables">Tables</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        {/* Dataset Size */}
        <div className="bg-[#111827]/70 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <span className="text-blue-400 font-bold">3.</span> Dataset Size
          </h3>
          <p className="text-gray-400 text-sm mb-3">How large is your dataset?</p>
          <select
            id="datasetSize"
            value={datasetSize}
            onChange={(e) => setDatasetSize(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 focus:border-blue-500 outline-none text-white transition-all"
          >
            <option value="">Select an option</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Recommendation Result */}
        {recommendation && (
          <div className="bg-gradient-to-r from-blue-900/40 to-green-900/40 p-5 rounded-xl border border-green-600 animate-pulse-slow">
            <h2 className="text-xl font-bold mb-2 text-green-400">Recommended Model:</h2>
            <p className="font-semibold text-white">{recommendation.model}</p>
            <p className="mt-1 text-gray-300">{recommendation.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg shadow transition"
              onClick={() => {
                console.log("📘 Opening modal for:", recommendation.model);
                setSelectedModel(recommendation);
                setShowModal(true);
              }}
            >
              Learn More
            </button>
          </div>
        )}
        {/* Train Model Button — always visible */}
      <button
  onClick={() => {
    setSelectedModel({ title: "Custom Model", desc: "User-defined model setup." });
    setShowModal("setup");
  }}
  className="mt-6 bg-gradient-to-r from-green-500 to-[#1e293b] hover:opacity-90 px-6 py-3 rounded-lg font-semibold shadow-lg"
>
  Train Model
</button>
      </div>
{/* Phase 2 — Prebuilt Model Cards */}
<div className="mt-12 w-full max-w-5xl">
  <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
    Prebuilt Model Options
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Regression Model",
        desc: "Predict continuous outcomes like prices, sales, or scores.",
      },
      {
        title: "Classification Model",
        desc: "Classify data into categories such as spam detection or churn.",
      },
      {
        title: "Clustering Model",
        desc: "Group similar data points for insights or segmentation.",
      },
      {
        title: "NLP/Text Model",
        desc: "Analyze or generate text for sentiment, summaries, or chat.",
      },
      {
        title: "Vision Model",
        desc: "Identify patterns, objects, or scenes in images.",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="bg-[#111827]/80 border border-gray-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-6 shadow-lg hover:shadow-blue-900/50 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
          <p className="text-gray-300 mb-4">{card.desc}</p>
        </div>
        <button
          onClick={() => {
            setSelectedModel(card);
            setShowModal("setup");
          }}
          className="mt-6 bg-gradient-to-r from-green-500 to-[#1e293b] hover:opacity-90 px-6 py-3 rounded-lg font-semibold shadow-lg"
>
          Train This Model
        </button>
      </div>
    ))}
  </div>
</div>
      

      {/* Modal for Model Details (Learn More) */}
      {showModal === true && selectedModel && modelDetails[selectedModel.model] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-[#111827] border border-blue-700 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-white relative">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{selectedModel.model}</h2>
            <p className="mb-4 text-gray-300 italic">{selectedModel.description}</p>
            <div className="mb-3">
              <span className="font-semibold text-green-300">Use Case:</span>
              <p className="ml-2 text-gray-200">{modelDetails[selectedModel.model].useCase}</p>
            </div>
            <div className="mb-3">
              <span className="font-semibold text-green-300">Strengths:</span>
              <p className="ml-2 text-gray-200">{modelDetails[selectedModel.model].strengths}</p>
            </div>
            <div className="mb-6">
              <span className="font-semibold text-green-300">Sample Datasets:</span>
              <ul className="list-disc list-inside ml-4 text-gray-200">
                {modelDetails[selectedModel.model].sampleDatasets.map((ds, idx) => (
                  <li key={idx}>{ds}</li>
                ))}
              </ul>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1e293b] px-3 py-1 rounded-lg border border-blue-700"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Model Setup before Billing (Flow B) */}
      {showModal === "setup" && selectedModel && (
        <ModelSetupModal
          model={selectedModel}
          onClose={() => setShowModal(false)}
          onProceed={() => {
            setShowModal(false);
            navigate("/billing");
          }}
        />
      )}
    </section>
  );
};

export default GenericModels;
// Model Setup Modal Component for training configuration 
const ModelSetupModal = ({ model, onClose, onProceed }) => {
  const [datasetLink, setDatasetLink] = useState("");
  const [epochs, setEpochs] = useState(10);
  const [outputFormat, setOutputFormat] = useState("CSV");
  const [fileInput, setFileInput] = useState(null);
  // Optionally, you can add validation, but keeping simple for now
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#181e2a] border border-blue-700 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white relative">
<h2 className="text-2xl font-bold mb-4 text-blue-400">
  Train: {model.title || model.model || "Custom Model"}
</h2>
        <form
          className="flex flex-col gap-5"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("modelName", model.title || model.model || "Custom Model");
            formData.append("datasetLink", datasetLink);
            formData.append("epochs", epochs);
            formData.append("outputFormat", outputFormat);

            if (fileInput) {
              formData.append("datasetFile", fileInput);
            }

            try {
              const res = await fetch("http://localhost:5000/training-setup", {
                method: "POST",
                body: formData,
              });

              if (res.ok) {
                alert("Training setup submitted successfully!");
                onProceed(); // navigates to billing
              } else {
                alert("Failed to submit training setup. Please try again.");
              }
            } catch (err) {
              console.error("Error submitting training setup:", err);
              alert("Error submitting training setup.");
            }
          }}
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300">
    Dataset Source
  </label>
  <p className="text-xs text-gray-400 mb-2">
    Upload a dataset file (CSV/XLSX) or provide an online link.
  </p>

  {/* File Upload Option */}
  <input
    type="file"
    accept=".csv, .xlsx"
    className="w-full px-3 py-2 mb-3 rounded-lg bg-[#232d3b] border border-gray-700 focus:border-blue-500 outline-none text-white"
    onChange={(e) => setFileInput(e.target.files[0])}
  />
<p className="text-xs text-gray-400 mb-2 text-center">
    OR
  </p>
  {/* Link Option */}
  <input
    type="url"
    placeholder="https://your-dataset-link.com"
    className="w-full px-3 py-2 rounded-lg bg-[#232d3b] border border-gray-700 focus:border-blue-500 outline-none text-white"
    value={datasetLink}
    onChange={(e) => setDatasetLink(e.target.value)}
  />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300" htmlFor="epochs">
              Number of Epochs
            </label>
            <input
              id="epochs"
              type="number"
              min={1}
              max={1000}
              className="w-full px-3 py-2 rounded-lg bg-[#232d3b] border border-gray-700 focus:border-blue-500 outline-none text-white"
              value={epochs}
              onChange={e => setEpochs(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300" htmlFor="outputFormat">
              Output Format
            </label>
            <select
              id="outputFormat"
              value={outputFormat}
              onChange={e => setOutputFormat(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-[#232d3b] border border-gray-700 focus:border-blue-500 outline-none text-white"
              required
            >
              <option value="CSV">CSV</option>
              <option value="JSON">JSON</option>
              <option value="Model File">Model File</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition"
          >
          Complete Setup
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1e293b] px-3 py-1 rounded-lg border border-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};