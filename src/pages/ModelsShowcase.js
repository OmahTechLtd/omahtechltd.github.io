import React, { useState, useEffect } from "react";
import ModelCard from "../components/ModelCard";
import ModelDemoModal from "../components/ModelDemoModal";

export default function ModelsShowcase() {
  const [models, setModels] = useState([]);
  const [demoUrl, setDemoUrl] = useState(null);

  useEffect(() => {
    // Load model data dynamically from the JSON file
    fetch("/src/data/models.json")
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => {
        console.error("Error loading models.json:", err);
        // Fallback data in case fetch fails
        setModels([
          {
            title: "Employee Attrition Prediction",
            description: "Predict employee churn based on HR data.",
            type: "Supervised",
            metric: "Accuracy: 0.83",
            demoUrl: "https://huggingface.co/spaces/Veraeze/employee-attrition-demo",
          },
          {
            title: "Credit Card Fraud Detection",
            description: "Detect anomalies in credit card transactions.",
            type: "Unsupervised",
            metric: "ROC-AUC: 0.98",
            demoUrl: "https://huggingface.co/spaces/Veraeze/credit_card_anomaly_demo",
          },
          {
            title: "Gas Flaring Prediction",
            description: "Predict total gas flared (MMSCF) using historical Nigerian gas production data.",
            type: "Supervised",
            metric: "R² Score: 0.501",
            demoUrl: "https://huggingface.co/spaces/Veraeze/gas_flaring_prediction",
        },
        ]);
      });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Daily Machine Learning Models</h1>
      <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
        Explore AI models trained daily as part of the 100 Days of AI Challenge. Click any model to view its live demo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <ModelCard
            key={index}
            model={model}
            onOpenDemo={(model) => setDemoUrl(model.demoUrl)}
          />
        ))}
      </div>

      <ModelDemoModal
        isOpen={!!demoUrl}
        demoUrl={demoUrl}
        onClose={() => setDemoUrl(null)}
      />
    </main>
  );
}