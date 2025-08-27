import React from "react";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const navigate = useNavigate();

  const handleContinue = (plan) => {
    // 👇 Pass the selected plan to the pipeline page
    navigate("/models/pipeline", { state: { plan } });
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Billing Plans
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        Choose the plan that best fits your research or organizational needs.
      </p>

      {/* Pricing cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Basic plan */}
        <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-6 rounded-xl shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-green-400">Basic</h2>
            <p className="text-gray-400 mb-4">For students and small projects.</p>
            <p className="text-2xl font-bold mb-4">$10</p>
          </div>
          <button
            onClick={() => handleContinue("Basic")}
            className="bg-green-600 hover:bg-teal-700 px-6 py-2 rounded-lg font-medium mt-4"
          >
            Continue with Basic
          </button>
        </div>

        {/* Pro plan */}
        <div className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] p-6 rounded-xl shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-400">Pro</h2>
            <p className="text-gray-400 mb-4">For researchers and organizations.</p>
            <p className="text-2xl font-bold mb-4">$50</p>
          </div>
          <button
            onClick={() => handleContinue("Pro")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium mt-4"
          >
            Continue with Pro
          </button>
        </div>
      </div>
    </section>
  );
};

export default Billing;