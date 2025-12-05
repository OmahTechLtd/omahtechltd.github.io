import React from "react";

export default function AgentCard({ agent, onOpenDemo }) {
  return (
    <div className="bg-[#111827]/80 border border-gray-700 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{agent.name}</h3>
        <p className="text-gray-300 mb-4">{agent.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onOpenDemo(agent)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
        >
          Open Demo
        </button>
        <a
          href={agent.readme || "#"}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-transparent border border-white/10 text-gray-300 hover:bg-white/5"
        >   
            View Details
        </a>
      </div>
    </div>
  );
}