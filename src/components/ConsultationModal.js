import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_qivxk34",       // EmailJS Service ID
        "template_u4y05zm",      // EmailJS Template ID
        formData,
        "tefVZMAa7f6_ULKWs"        // EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", company: "", message: "" });
        },
        () => {
          setStatus("error");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
          Book a Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 hover:opacity-90 transition-all"
          >
            Submit
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-400 text-sm mt-3 text-center">
            ✅ Your request has been sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3 text-center">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}