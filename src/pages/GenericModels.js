import React, { useState } from "react";
import modelDetails from "../data/modelDetails.js";
import { useNavigate } from "react-router-dom";
import { useNavigate as useNavigateModal } from "react-router-dom";

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
                // ensure selectedModel always has a `model` key used by modelDetails
                setSelectedModel({
                  ...recommendation,
                  model: recommendation.model || recommendation.title,
                });
                setShowModal("learn");
              }}
            >
              Learn More
            </button>
          </div>
        )}
        {/* Train Model Button — always visible */}
      <button
  onClick={() => {
    setSelectedModel({ title: "Custom Model", desc: "User-defined model setup.", model: "Custom Model" });
    setShowModal("setup");
  }}
  className="mt-6 bg-gradient-to-r from-green-500 to-[#1e293b] hover:opacity-90 px-6 py-3 rounded-lg font-semibold shadow-lg"
>
  Request Consultation
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
            setSelectedModel({ ...card, model: card.title });
            setShowModal("setup");
          }}
          className="mt-6 bg-gradient-to-r from-green-500 to-[#1e293b] hover:opacity-90 px-6 py-3 rounded-lg font-semibold shadow-lg"
        >
          Request Consultation
        </button>
      </div>
    ))}
  </div>
</div>
      

      {/* Modal for Model Details (Learn More) */}
      {showModal === 'learn' && selectedModel && (() => {
        const modelKey = selectedModel.model || selectedModel.title;
        const details = modelDetails[modelKey];
        if (!details) return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-[#111827] border border-blue-700 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-white relative">
              <h2 className="text-2xl font-bold mb-2 text-blue-400">Information not available</h2>
              <p className="text-gray-300">We don't have detailed information for this model yet.</p>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1e293b] px-3 py-1 rounded-lg border border-blue-700"
                onClick={() => { setShowModal(false); setSelectedModel(null); }}
              >
                Close
              </button>
            </div>
          </div>
        );

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-[#111827] border border-blue-700 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-white relative">
              <h2 className="text-2xl font-bold mb-2 text-blue-400">{modelKey}</h2>
              <p className="mb-4 text-gray-300 italic">{selectedModel.description || details.short || details.description}</p>

              <div className="mb-3">
                <span className="font-semibold text-green-300">Use Case:</span>
                <p className="ml-2 text-gray-200">{details.useCase || '—'}</p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-green-300">Strengths:</span>
                <p className="ml-2 text-gray-200">{details.strengths || '—'}</p>
              </div>

              {Array.isArray(details.sampleDatasets) && (
                <div className="mb-6">
                  <span className="font-semibold text-green-300">Sample Datasets:</span>
                  <ul className="list-disc list-inside ml-4 text-gray-200">
                    {details.sampleDatasets.map((ds, idx) => (
                      <li key={idx}>{ds}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#1e293b] px-3 py-1 rounded-lg border border-blue-700"
                onClick={() => { setShowModal(false); setSelectedModel(null); }}
              >
                Close
              </button>
            </div>
          </div>
        );
      })()}

      {/* Modal for Model Setup before Billing (Flow B) */}
      {showModal === "setup" && selectedModel && (
        <ModelSetupModal
          model={selectedModel}
          onClose={() => setShowModal(false)}
          onProceed={() => {
            setShowModal(false);
            alert("Your request has been submitted. We will reach out to book a consultation.");
          }}
        />
      )}
    </section>
  );
};

export default GenericModels;
// Model Setup Modal Component for consultation request
const ModelSetupModal = ({ model, onClose, onProceed }) => {
  const [fileInput, setFileInput] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [problemStatement, setProblemStatement] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [datasetCategory, setDatasetCategory] = useState(""); // Small, Medium, Large
  const navigate = useNavigateModal();

  // Handler for file input change
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileInput(file);
      // Determine dataset size in MB and set category
      const sizeMB = file.size / (1024 * 1024);
      let category = "";
      if (sizeMB <= 5) category = "Small";
      else if (sizeMB > 5 && sizeMB <= 50) category = "Medium";
      else category = "Large";
      setDatasetCategory(category);
      setUploading(true);
      setUploadComplete(false);
      setTimeout(() => {
        setUploading(false);
        setUploadComplete(true);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#181e2a] border border-blue-700 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white relative">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Consultation Request: {model.title || model.model || "Custom Model"}
        </h2>
        <form
          className="flex flex-col gap-5"
          onSubmit={async (e) => {
            e.preventDefault();

            if (!problemStatement || problemStatement.trim() === "") {
              alert("Please provide a brief summary before submitting.");
              return;
            }

            setSubmitting(true);

            try {
              const payload = {
                model: model.title || model.model || "Custom Model",
                dataset_category: datasetCategory || "Not selected",
                problem_statement: problemStatement,
                file_name: fileInput ? fileInput.name : "No file provided",
                source: "AI Models Consultation",
                timestamp: new Date().toISOString()
              };

              const response = await fetch("https://omahtechltd-github-io.onrender.com/consultation", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
              });

              if (!response.ok) {
                throw new Error("Server error while submitting consultation");
              }

              const result = await response.json();

              alert(" Your consultation request has been sent successfully!");
              setSubmitting(false);
              onProceed();

            } catch (error) {
              console.error("Error submitting consultation:", error);
              setSubmitting(false);
              alert("❌ Something went wrong. Please try again.");
            }
          }}
        >
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300">
              Dataset Source{" "}
              <span className="inline-block align-middle ml-1">
                {uploading ? (
                  <span title="Uploading..." className="animate-pulse">⏳</span>
                ) : uploadComplete ? (
                  <span title="Upload complete">✅</span>
                ) : null}
              </span>
            </label>
            <p className="text-xs text-gray-400 mb-2">
              Upload a dataset file if you want us to review it during consultation.
            </p>

            {/* File Upload Option */}
            <input
              type="file"
              accept=".csv, .xlsx"
              className="w-full px-3 py-2 mb-3 rounded-lg bg-[#232d3b] border border-gray-700 focus:border-blue-500 outline-none text-white"
              onChange={handleFileChange}
              disabled={uploading}
            />
            {fileInput && (
              <div className="text-xs text-gray-400 mt-1">
                File: <span className="text-green-300">{fileInput.name}</span>{" "}
                ({(fileInput.size / (1024 * 1024)).toFixed(2)} MB) — Category:{" "}
                <span className="text-blue-300">{datasetCategory || "Unknown"}</span>
              </div>
            )}
          </div>
          {/* Brief Summary Section */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-300" htmlFor="problemStatement">
              Brief Summary (required, max 1200 characters ≈ 200 words)
            </label>
            <textarea
              id="problemStatement"
              maxLength={1200}
              rows={4}
              required
              className={`w-full px-3 py-2 rounded-lg bg-[#232d3b] border ${
                problemStatement.trim() === "" ? "border-red-500" : "border-gray-700"
              } focus:border-blue-500 outline-none text-white`}
              placeholder="Describe your problem and what you hope to achieve (required)"
              value={problemStatement}
              onChange={e => setProblemStatement(e.target.value)}
            />
            {problemStatement.trim() === "" && (
              <p className="text-red-400 text-sm mt-1">Please provide a brief summary before proceeding.</p>
            )}
            <div className="text-xs text-gray-400 text-right">{problemStatement.length}/1200</div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={uploading || submitting}
            className={`mt-2 px-4 py-2 rounded-lg text-white font-medium transition flex items-center justify-center ${
              (uploading || submitting)
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 active:scale-95"
            }`}
          >
            {submitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Submitting...
              </>
            ) : (
              "Submit Consultation Request"
            )}
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