import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="bg-[#0f172a] p-8 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold text-green-400 mb-4">Payment Successful 🎉</h1>
        <p className="text-gray-300 mb-6">
          Thank you for your payment. Your model training setup has been received.
          You’ll receive an email update within <span className="text-blue-400 font-semibold">2–5 business days</span>.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90"
        >
          Return Home
        </button>
      </div>
    </section>
  );
};

export default PaymentSuccess;