import { useState } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-xl shadow-xl animate-fadeIn text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          We’d love to hear from you! Click the button below to see our contact options.
        </p>

        {/* Contact Us Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-600 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 mb-4"
        >
          Contact Us
        </button>

        {/* Contact Options */}
        {open && (
          <div className="flex justify-center gap-6 mt-4 text-white text-2xl">
            <a href="https://www.linkedin.com/company/108520214/admin/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/OmahTechLtd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="mailto:vera@omahtech.co" className="hover:text-red-400 transition">
              <FaEnvelope />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}