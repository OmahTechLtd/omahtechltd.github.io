import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TrainingModal({ closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    trainingType: "Individual",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        source: "AI Training",
        timestamp: new Date().toISOString()
      };

      const response = await fetch(
        "https://omahtechltd-github-io.onrender.com/training",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) throw new Error("Server error");

      //  SUCCESS
      toast.success("Training request sent successfully!", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark"
      });

      alert(" Training request sent successfully!");

      setIsSubmitted(true);

    } catch (error) {
      console.error("Training request failed:", error);

      //  ERROR
      toast.error("Failed to send. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark"
      });

      alert(" Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg shadow-lg ring-1 ring-white/10 max-w-md w-full p-6 relative">
        <button onClick={closeModal} className="absolute top-3 right-3 text-white">
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
              Enroll in Training
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-gray-300">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                placeholder="Name"
                className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white" />

              <input type="email" name="email" value={formData.email} onChange={handleChange} required
                placeholder="Email"
                className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white" />

              <select name="trainingType" value={formData.trainingType} onChange={handleChange}
                className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white">
                <option value="Individual">Individual</option>
                <option value="Corporate">Corporate</option>
              </select>

              <textarea name="message" value={formData.message} onChange={handleChange}
                rows="4" placeholder="Message"
                className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white" />

              <button type="submit" disabled={loading}
                className="w-full py-2 border border-white/30 rounded-lg">
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center text-white">
            <h2 className="text-2xl mb-3">Thank you!</h2>
            <p className="mb-4">We will contact you shortly.</p>
            <button onClick={closeModal} className="border border-white px-4 py-2 rounded-lg">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}