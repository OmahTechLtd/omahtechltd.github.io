import React, { useState, useEffect } from "react";
import ModelCard from "../components/ModelCard";
import ModelDemoModal from "../components/ModelDemoModal";

export default function ModelsShowcase() {
  const [models, setModels] = useState([]);
  const [demoUrl, setDemoUrl] = useState(null);

  useEffect(() => {
    // Option A: fetch from /data/models.json (served statically)
    fetch("/data/models.json")
      .then((r) => r.json())
      .then(setModels)
      .catch(() => {
        // fallback hardcoded
        setModels([
          {
            title: "Employee Attrition",
            description: "Predict employee churn",
            demoUrl: "http://localhost:7860", // local Gradio dev
            readme: "/models/supervised/employee_attrition/summary.md"
          },
          {
            title: "Credit Card Anomaly",
            description: "Detect suspicious transactions",
            demoUrl: "http://localhost:7861",
            readme: "/models/unsupervised/credit_card_anomaly/summary.md"
          }
        ]);
      });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Daily Models</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {models.map((m, i) => (
          <ModelCard key={i} model={m} onOpenDemo={(model) => setDemoUrl(model.demoUrl)} />
        ))}
      </div>

      <ModelDemoModal isOpen={!!demoUrl} demoUrl={demoUrl} onClose={() => setDemoUrl(null)} />
    </main>
  );
}