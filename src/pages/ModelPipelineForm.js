import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ModelPipelineForm = () => {
  const location = useLocation();
  const { plan } = location.state || {};

  // form state
  const [dataset, setDataset] = useState(null);
  const [target, setTarget] = useState("");
  const [modelType, setModelType] = useState("classification");

  const handleFileChange = (e) => {
    setDataset(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // later this is where backend API request would go
    alert(`Form submitted!\nPlan: ${plan}\nTarget: ${target}\nModel Type: ${modelType}`);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
        Model Pipeline 
      </h1>

      {/* Show selected plan */}
      <p className="text-gray-300 mb-6">
        You selected the <span className="font-semibold text-green-400">{plan || "No Plan"}</span> plan.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        {/* Dataset Upload */}
        <div>
          <label className="block mb-2 font-medium">Upload Dataset (CSV)</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="w-full p-2 bg-black border border-gray-600 rounded-lg"
          />
          {dataset && (
            <p className="text-sm text-gray-400 mt-2">
              Selected file: {dataset.name}
            </p>
          )}
        </div>

        {/* Target variable */}
        <div>
          <label className="block mb-2 font-medium">Target Variable</label>
          <input
            type="text"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="e.g., price, churn, label"
            className="w-full p-2 bg-black border border-gray-600 rounded-lg"
            required
          />
        </div>

        {/* Model type */}
        <div>
          <label className="block mb-2 font-medium">Model Type</label>
          <select
            value={modelType}
            onChange={(e) => setModelType(e.target.value)}
            className="w-full p-2 bg-black border border-gray-600 rounded-lg"
          >
            <option value="classification">Classification</option>
            <option value="regression">Regression</option>
            <option value="clustering">Clustering</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-teal-700 px-6 py-2 rounded-lg font-medium"
        >
          Submit Pipeline
        </button>
      </form>
    </section>
  );
};

export default ModelPipelineForm;