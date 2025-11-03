import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Billing = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const baseCosts = {
    small: 70000,
    medium: 130000,
    large: 250000,
  };

  const [selectedSize, setSelectedSize] = useState("small");
  const [addons, setAddons] = useState({
    dashboard: false,
    optimization: false,
    reports: false,
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (location.state?.datasetSize) {
      setSelectedSize(location.state.datasetSize);
    }
  }, [location.state]);

  const addonCosts = {
    dashboard: 80000,
    optimization: 50000,
    reports: 40000,
  };

  const handleAddonChange = (e) => {
    const { name, checked } = e.target;
    setAddons((prev) => ({ ...prev, [name]: checked }));
  };

  const totalCost =
    baseCosts[selectedSize] +
    Object.entries(addons).reduce(
      (sum, [key, val]) => (val ? sum + addonCosts[key] : sum),
      0
    );

  // Paystack payment handler
  const handlePayment = () => {
    if (!termsAccepted) return;

    console.log("Paystack email:", (location.state && location.state.email) || "vera@omahtech.co");
    console.log("Paystack amount (kobo):", totalCost * 100);
    console.log("Validating amount before initializing Paystack:", totalCost > 0);

    const handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,      email:
        (location.state && location.state.email) || "vera@omahtech.co",
      amount: totalCost * 100, // convert to kobo
      currency: "NGN",
      callback: (response) => {
        // Payment successful
        navigate("/payment-success", {
          state: { amount: totalCost, addons, selectedSize },
        });
      },
      onClose: () => alert("Payment cancelled"),
    });

    handler.openIframe();
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
        Billing Plans
      </h1>
      <p className="text-gray-300 max-w-2xl text-center mb-8">
        Choose the plan that best fits your research or organizational needs.
      </p>

      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-8 rounded-xl shadow-xl w-full max-w-xl mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-400">
          Base Training Cost
        </h2>
        <p className="text-gray-400 mb-4 text-sm">
          Small (0–5 MB), Medium (5–50 MB), Large (50 MB+)
        </p>

        <div className="flex flex-col space-y-3 mb-6">
          {["small", "medium", "large"].map((size) => (
            <label key={size} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                disabled
                className="accent-green-400"
              />
              <span className={selectedSize === size ? "text-green-400" : "text-gray-400"}>
                {size.charAt(0).toUpperCase() + size.slice(1)} - ₦{baseCosts[size].toLocaleString()}
              </span>
            </label>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-3 text-blue-400">Add-ons</h3>
        <div className="flex flex-col space-y-3 mb-6">
          {Object.keys(addons).map((addon) => (
            <label key={addon} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name={addon}
                checked={addons[addon]}
                onChange={handleAddonChange}
                className="accent-blue-400"
              />
              <span>
                {addon.charAt(0).toUpperCase() + addon.slice(1)} (+₦{addonCosts[addon].toLocaleString()})
              </span>
            </label>
          ))}
        </div>

        <div className="text-xl font-bold mb-6">
          Total Cost: <span className="text-green-400">₦{totalCost.toLocaleString()}</span>
        </div>

        <p className="text-gray-400 mb-6 text-sm">
          Model training takes 2–5 business days. Dashboard requests may take longer.
        </p>

        <label className="flex items-center space-x-3 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="accent-green-400"
          />
          <span className="text-gray-300 text-sm">I agree to the terms and conditions</span>
        </label>

        <button
          onClick={handlePayment}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
            termsAccepted
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Pay with Paystack
        </button>
      </div>
    </section>
  );
};

export default Billing;