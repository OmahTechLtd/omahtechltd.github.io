import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConsultationModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      source: "AI Consulting",
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch(
        "https://omahtechltd-github-io.onrender.com/organization",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      //  SUCCESS
      toast.success("Consultation request sent successfully!", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark"
      });

      alert(" Consultation request sent successfully!");

      e.target.reset();
      onClose();

    } catch (error) {
      console.error("Submission error:", error);

      //  ERROR
      toast.error("Failed to send. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark"
      });

      alert(" Failed to send. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-md p-6 bg-black rounded-lg shadow-lg ring-1 ring-white/10">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
        >
          &#10005;
        </button>

        <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
          Book a Consultation
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" required
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white" />

          <input type="email" name="email" placeholder="Email" required
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white" />

          <input type="text" name="company" placeholder="Company"
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white" />

          <textarea name="message" placeholder="Message" rows="4"
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white resize-none" />

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 px-5 py-3 font-medium text-black ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}