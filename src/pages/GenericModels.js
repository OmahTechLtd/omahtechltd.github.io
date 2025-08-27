import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GenericModels = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’ll help you figure out the right type of model for your project." },
    { sender: "bot", text: "What type of output are you expecting?", options: [
      "A number (e.g., prices, scores)",
      "A category (e.g., yes/no, spam/not spam)",
      "Groups/clusters (e.g., segmenting customers)",
      "Actions over time (e.g., a game agent learning moves)"
    ]}
  ]);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    const newUserMessage = { sender: "user", text: option };
    let botReply = null;

    if (option.startsWith("A number")) {
      botReply = { 
        sender: "bot", 
        text: "📈 That sounds like a **Regression problem**. You might use Linear Regression for simplicity, or Random Forest/XGBoost for robustness." 
      };
    } else if (option.startsWith("A category")) {
      botReply = { 
        sender: "bot", 
        text: "✅ That’s a **Classification problem**. Options include Logistic Regression (fast) or Decision Trees / Neural Nets (more accurate)." 
      };
    } else if (option.startsWith("Groups")) {
      botReply = { 
        sender: "bot", 
        text: "🔍 That’s **Unsupervised learning**. K-Means or DBSCAN clustering would be good choices." 
      };
    } else if (option.startsWith("Actions")) {
      botReply = { 
        sender: "bot", 
        text: "🎮 That’s **Reinforcement Learning**. You’d likely need a Q-learning or Policy Gradient approach." 
      };
    }

    setMessages((prev) => [...prev, newUserMessage, botReply]);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Generic Models Assistant
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        This assistant will guide researchers and students in selecting and training
        models. Just pick the options below 👇 or skip straight to training.
      </p>

      {/* Chat UI */}
      <div className="w-full max-w-lg h-96 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl flex flex-col p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-3">
            <div
              className={`p-3 rounded-lg max-w-[85%] ${
                msg.sender === "bot"
                  ? "bg-green-600 text-white self-start"
                  : "bg-blue-600 text-white self-end ml-auto"
              }`}
            >
              {msg.text}
            </div>

            {/* Render options as buttons */}
            {msg.options && (
              <div className="flex flex-col gap-2 mt-2">
                {msg.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm text-left"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

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