import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenericModels = () => {
  const navigate = useNavigate();

  const [outputType, setOutputType] = useState("");
  const [dataType, setDataType] = useState("");
  const [datasetSize, setDatasetSize] = useState("");

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
        models. Just pick the options below 👇 or skip straight to training.
      </p>

      {/* Model Recommender Form */}
      <form className="w-full max-w-lg bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl p-6 flex flex-col gap-6">
        <div>
          <label className="block mb-2 font-semibold" htmlFor="outputType">
            1. Type of output expected
          </label>
          <select
            id="outputType"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select an option</option>
            <option value="Number">A number (e.g., prices, scores)</option>
            <option value="Category">A category (e.g., yes/no, spam/not spam)</option>
            <option value="Groups/Clusters">Groups/clusters (e.g., segmenting customers)</option>
            <option value="Actions over time">Actions over time (e.g., a game agent learning moves)</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="dataType">
            2. Type of data
          </label>
          <select
            id="dataType"
            value={dataType}
            onChange={(e) => setDataType(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select an option</option>
            <option value="Text">Text</option>
            <option value="Images">Images</option>
            <option value="Tables">Tables</option>
            <option value="Mixed">Mixed</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold" htmlFor="datasetSize">
            3. Dataset size
          </label>
          <select
            id="datasetSize"
            value={datasetSize}
            onChange={(e) => setDatasetSize(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white"
          >
            <option value="">Select an option</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {recommendation && (
          <div className="bg-green-700 p-4 rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-2">Recommended Model:</h2>
            <p className="font-semibold">{recommendation.model}</p>
            <p className="mt-1 text-gray-200">{recommendation.description}</p>
          </div>
        )}
      </form>

      {/* Train Model Button — always visible */}
      <button
        onClick={() => navigate("/billing")}
        className="mt-6 bg-gradient-to-r from-green-500 to-[#1e293b] hover:opacity-90 px-6 py-3 rounded-lg font-semibold shadow-lg"
      >
        Train Model
      </button>
    </section>
  );
};

export default GenericModels;