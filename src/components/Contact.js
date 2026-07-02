import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`;

const serviceConfig = {
  "ai-data-solutions": {
    title: "Data Systems & Implementation",
    subtitle: "Tell us about your business and we'll take it from there.",
    cta: "Discuss Your Project",
    fields: "business",
  },
  "ai-strategy-advisory": {
    title: "Advisory & Systems Design",
    subtitle: "A structured consultation to identify opportunities for data-driven operational improvement.",
    cta: "Request a Consultation",
    fields: "advisory",
  },
  "ml-project-implementation": {
    title: "ML Project Implementation",
    subtitle: "Share your project details and we'll get back to you within 24 hours.",
    cta: "Get Started",
    fields: "project",
  },
  "ml-training": {
    title: "Training Programmes: Join the Waitlist",
    subtitle: "Be the first to know when we launch.",
    cta: "Join Waitlist",
    fields: "training",
  },
};

export default function Contact({ selectedService }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const config = selectedService ? serviceConfig[selectedService] : null;

  useEffect(() => {
    setFormData({});
    setSubmitted(false);
  }, [selectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-green-500 transition";
  const labelClass = "block text-sm text-gray-400 mb-1";

  const renderFields = () => {
    if (!config) return null;

    if (config.fields === "business") {
      return (
        <>
          <div>
            <label className={labelClass}>Full Name</label>
            <input name="name" required onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label className={labelClass}>Business Email</label>
            <input name="email" type="email" required onChange={handleChange} className={inputClass} placeholder="you@company.com" />
          </div>
          <div>
            <label className={labelClass}>Company Name</label>
            <input name="company" required onChange={handleChange} className={inputClass} placeholder="Your company" />
          </div>
          <div>
            <label className={labelClass}>What are you looking to improve?</label>
            <select name="industry" required onChange={handleChange} className={inputClass}>
              <option value="">Select Area of Interest</option>
              <option>Production Monitoring</option>
              <option>Asset Performance</option>
              <option>Equipment Performance</option>
              <option>Operational Research</option>
              <option>Data Strategy & Systems Design</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Describe the operational challenge or objective.</label>
            <textarea name="message" required onChange={handleChange} className={`${inputClass} h-28 resize-none`} placeholder="e.g. production monitoring, equipment performance, data integration, anomaly detection, or another operational challenge." />
          </div>
          <div>
            <label className={labelClass}>Project Stage</label>
            <select name="industry" required onChange={handleChange} className={inputClass}>
              <option value="">Select project stage</option>
              <option>Exploring possibilities</option>
              <option>Planning a project</option>
              <option>Existing system needs improvement</option>
              <option>Looking for technical partner</option>
            </select>
          </div>
          <div></div>
        </>
      );
    }

    if (config.fields === "advisory") {
      return (
        <>
          <div>
            <label className={labelClass}>Full Name</label>
            <input name="name" required onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label className={labelClass}>Business Email</label>
            <input name="email" type="email" required onChange={handleChange} className={inputClass} placeholder="you@company.com" />
          </div>
          <div>
            <label className={labelClass}>Company Name</label>
            <input name="company" required onChange={handleChange} className={inputClass} placeholder="Your company" />
          </div>
          <div>
            <label className={labelClass}>Company Size</label>
            <select name="company_size" required onChange={handleChange} className={inputClass}>
              <option value="">Select company size</option>
              <option>1 - 10</option>
              <option>11 - 50</option>
              <option>51 - 200</option>
              <option>200+</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Tell us about the operational challenge you’d like to explore.</label>
            <textarea name="message" required onChange={handleChange} className={`${inputClass} h-28 resize-none`} placeholder="Share a brief overview of the operational challenge you'd like to discuss" />
          </div>
        </>
      );
    }

    if (config.fields === "project") {
      return (
        <>
          <div>
            <label className={labelClass}>Full Name</label>
            <input name="name" required onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input name="email" type="email" required onChange={handleChange} className={inputClass} placeholder="your@email.com" />
          </div>
          <div>
            <label className={labelClass}>Institution or University</label>
            <input name="institution" required onChange={handleChange} className={inputClass} placeholder="Where are you studying or working?" />
          </div>
          <div>
            <label className={labelClass}>Briefly describe your project</label>
            <textarea name="message" required onChange={handleChange} className={`${inputClass} h-28 resize-none`} placeholder="What is your project about?" />
          </div>
        </>
      );
    }

    if (config.fields === "training") {
      return (
        <>
          <div>
            <label className={labelClass}>Full Name</label>
            <input name="name" required onChange={handleChange} className={inputClass} placeholder="Your full name" />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input name="email" type="email" required onChange={handleChange} className={inputClass} placeholder="your@email.com" />
          </div>
          <div>
            <label className={labelClass}>Which programme are you interested in?</label>
            <select name="programme" required onChange={handleChange} className={inputClass}>
              <option value="">Select a programme</option>
              <option>AI Tools Training, Beginner (5 Weeks)</option>
              <option>Machine Learning Training, Beginner (8 Weeks)</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>What are you hoping to learn?</label>
            <textarea name="message" required onChange={handleChange} className={`${inputClass} h-28 resize-none`} placeholder="Tell us what brought you here..." />
          </div>
        </>
      );
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          Get in Touch
        </h2>

        {!config ? (
          <div className="bg-[#111111] p-8 rounded-xl shadow-xl text-center mt-6">
            <p className="text-gray-300 text-lg">
              Select a service above and the right form will appear here.
            </p>
          </div>
        ) : submitted ? (
          <div className="bg-[#111111] p-8 rounded-xl shadow-xl text-center mt-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">Message received.</h3>
            <p className="text-gray-300">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="bg-[#111111] p-8 rounded-xl shadow-xl mt-6">
            <h3 className="text-xl font-semibold text-green-400 mb-1">{config.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{config.subtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFields()}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition mt-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : config.cta}
              </button>
            </form>
          </div>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-white text-2xl">
          <a href="https://www.linkedin.com/company/omah-tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/OmahTechLtd" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/omah.tech" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaInstagram />
          </a>
          <a href="mailto:admin@omahtech.co" className="hover:text-green-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}