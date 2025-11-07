import React from "react";

export default function ModelDemoModal({ isOpen, demoUrl, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-80 p-6">
      <div className="bg-[#0b1220] rounded-2xl w-full max-w-5xl h-[80vh] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 px-3 py-1 bg-[#111827] rounded text-white"
        >
          Close
        </button>
        <iframe
          src={demoUrl}
          title="Model Demo"
          className="w-full h-full border-0"
          sandbox="allow-forms allow-modals allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
}