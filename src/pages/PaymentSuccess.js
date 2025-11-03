import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 10px 2px #34d399, 0 0 20px 5px #10b981;
            }
            50% {
              box-shadow: 0 0 20px 4px #34d399, 0 0 30px 8px #10b981;
            }
          }
        `}
      </style>
      <div className="bg-[#0f172a] p-10 rounded-3xl shadow-lg text-center max-w-lg w-full">
        <div
          className="mx-auto mb-8 w-24 h-24 rounded-full border-4 border-green-400 flex items-center justify-center animate-glow"
          style={{ animationName: "glow", animationDuration: "2s", animationIterationCount: "infinite", animationTimingFunction: "ease-in-out" }}
        >
          <svg
            className="w-12 h-12 text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-green-400 mb-4">Payment Successful</h1>
        <p className="text-gray-300 mb-8">
          Your payment has been processed successfully. Thank you for your purchase.
        </p>
        <div className="bg-[#1e293b] rounded-lg p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-green-400 mb-2">Transaction Summary</h2>
          <p className="text-gray-300">Transaction ID: <span className="font-mono">#1234567890abcdef</span></p>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
          >
            Return Home
          </button>
          <button
            onClick={() => console.log("View Dashboard clicked")}
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-semibold transition"
          >
            View Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;