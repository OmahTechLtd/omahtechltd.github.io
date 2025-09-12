import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConsultationModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qivxk34",    //  EmailJS Service ID
        "template_u4y05zm",   //  Template ID
        e.target,
        "tefVZMAa7f6_ULKWs"   //  Public Key
      )
      .then(
        () => {
          toast.success("Consultation request sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          setLoading(false);
          e.target.reset();
          onClose(); 
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send. Please try again later.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      

      <div className="relative w-full max-w-md p-6 bg-black rounded-lg shadow-lg ring-1 ring-white/10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
          aria-label="Close modal"
        >
          &#10005;
        </button>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
          Book a Consultation
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="px-4 py-2 rounded bg-black/70 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`mt-2 rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 px-5 py-3 font-medium text-black transition ${
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