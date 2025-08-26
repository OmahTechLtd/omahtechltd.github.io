import { useState } from "react";

function ModelAssistant() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (key, value) => {
    setAnswers({ ...answers, [key]: value });
    setStep(step + 1);
  };

  // Step 1: What type of output?
  if (step === 0) {
    return (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">🤖 Model Assistant</h2>
        <p className="mb-4">What type of output are you expecting?</p>
        <div className="grid gap-4">
          <button onClick={() => handleAnswer("output", "number")} className="bg-blue-500 text-white px-4 py-2 rounded">
            A number (e.g., prices, scores)
          </button>
          <button onClick={() => handleAnswer("output", "category")} className="bg-blue-500 text-white px-4 py-2 rounded">
            A category (e.g., yes/no, spam/not spam)
          </button>
          <button onClick={() => handleAnswer("output", "groups")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Groups/clusters (e.g., customer segments)
          </button>
          <button onClick={() => handleAnswer("output", "actions")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Actions over time (e.g., learning moves in a game)
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Suggestions based on output type
  if (step === 1) {
    let suggestion = "";
    let demoLink = "#"; // later: link this to real demo project

    if (answers.output === "number") {
      suggestion = "Regression (Linear Regression, Random Forest)";
      demoLink = "#regression-demo";
    } else if (answers.output === "category") {
      suggestion = "Classification (Logistic Regression, Decision Trees)";
      demoLink = "#classification-demo";
    } else if (answers.output === "groups") {
      suggestion = "Unsupervised Learning (Clustering - KMeans)";
      demoLink = "#clustering-demo";
    } else if (answers.output === "actions") {
      suggestion = "Reinforcement Learning (Q-Learning, Policy Gradients)";
      demoLink = "#reinforcement-demo";
    }

    return (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">✅ Recommendation</h2>
        <p className="mb-4">
          Based on your answers, I recommend: <span className="font-semibold">{suggestion}</span>.
        </p>
        <a
          href={demoLink}
          className="inline-block bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          View Demo
        </a>
        <div className="mt-4">
          <button
            onClick={() => setStep(0)}
            className="text-blue-500 underline"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default ModelAssistant;