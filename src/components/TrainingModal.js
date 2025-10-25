import React, { useState } from "react";
import emailjs from "emailjs-com";

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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_qivxk34",
        "template_u4y05zm",
        formData,
        "tefVZMAa7f6_ULKWs"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg shadow-lg ring-1 ring-white/10 max-w-md w-full p-6 relative">
        <button
          onClick={closeModal}
          className="px-2 py-0 bg-black border border-white/20 rounded-lg text-white text-lg font-semibold shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition-all duration-200"
          aria-label="Close modal"
        >
          ×
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
              Enroll in Training
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-300">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="trainingType" className="block mb-1 font-medium text-white/80">Training Type</label>
                <select
                  id="trainingType"
                  name="trainingType"
                  value={formData.trainingType}
                  onChange={handleChange}
                  className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Individual" className="bg-black/70 text-white">Individual</option>
                  <option value="Corporate" className="bg-black/70 text-white">Corporate</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-white/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black/70 border border-white/20 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-black border border-white/20 rounded-lg text-white text-lg font-semibold shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition-all duration-200"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center text-white/90">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
              Thank you for enrolling!
            </h2>
            <p className="mb-6">
              We have received your information and will get back to you shortly.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-black border border-white/20 rounded-lg text-white text-lg font-semibold shadow-[0_0_8px_rgba(255,255,255,0.2)] hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:scale-[1.03] transition-all duration-200"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}