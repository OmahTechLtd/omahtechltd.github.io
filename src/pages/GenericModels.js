import React, { useState } from "react";

const GenericModels = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! What kind of problem are you trying to solve? (e.g., classification, regression, clustering)" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    const updatedMessages = [...messages, newMessage];

    // Simple bot logic
    let botReply = "";
    if (input.toLowerCase().includes("classification")) {
      botReply = "✅ Sounds like a classification problem. You might consider Logistic Regression, Decision Trees, or Random Forests.";
    } else if (input.toLowerCase().includes("regression")) {
      botReply = "📈 Regression problem detected. Linear Regression, Ridge, or XGBoost could be great fits.";
    } else if (input.toLowerCase().includes("clustering")) {
      botReply = "🔍 For clustering, K-Means or DBSCAN might be a good start.";
    } else {
      botReply = "🤔 Interesting... can you tell me more about your dataset size or type?";
    }

    setMessages([...updatedMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Generic Models Assistant
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        This assistant will guide researchers and students in selecting and training
        models. Start by describing your problem below 
      </p>

      {/* Chatbot UI */}
      <div className="w-full max-w-lg h-96 bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl flex flex-col p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[80%] ${
              msg.sender === "bot"
                ? "bg-teal-600 text-white self-start"
                : "bg-blue-600 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex mt-4 w-full max-w-lg">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-lg bg-[#111111] text-white border border-gray-700 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
        />
        <button
          onClick={handleSend}
          className="bg-teal-600 hover:bg-teal-700 px-4 rounded-r-lg font-medium"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default GenericModels;