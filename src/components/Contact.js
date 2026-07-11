import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.REACT_APP_FORMSPREE_ID}`;

const serviceConfig = {
  "ai-data-solutions": {
    title: "Data Systems & Implementation",
    subtitle: "Provide details regarding your asset and operational challenge to initiate a system build.",
    cta: "Start a Project",
    fields: "business",
  },
  "ai-strategy-advisory": {
    title: "Advisory & Asset Strategy",
    subtitle: "Schedule a diagnostic consultation to evaluate data readiness and map asset pain points.",
    cta: "Book a Consultation",
    fields: "advisory",
  },
  "research-collaboration": {
    title: "Research Collaboration",
    subtitle: "Share your research details below and we will get back to you within 24 hours.",
    cta: "Submit Collaboration Request",
    fields: "research",
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
    "w-full bg-[#020202] border border-gray-950 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500/40 transition placeholder-gray-600";

  const labelClass = "block text-xs font-mono text-blue-500 uppercase tracking-wider mb-2";

  const renderFields = () => {
    if (!config) return null;

    if (config.fields === "business") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="name"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={labelClass}>Business Email</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Company Name</label>
            <input
              name="company"
              required
              onChange={handleChange}
              className={inputClass}
              placeholder="Your company"
            />
          </div>

          <div>
            <label className={labelClass}>What are you looking to solve?</label>
            <select
              name="area_of_interest"
              required
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select your focus area</option>
              <option>Production decline and forecasting</option>
              <option>Equipment monitoring and anomaly detection</option>
              <option>Data organisation and historical analysis</option>
              <option>Production optimisation</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Describe your operational challenge or goal</label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              className={`${inputClass} h-28 resize-none`}
              placeholder="Tell us briefly about the operational challenge you are trying to solve."
            />
          </div>

          <div>
            <label className={labelClass}>Where are you right now?</label>
            <select
              name="project_stage"
              required
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select your current stage</option>
              <option>We have production data but no analysis system</option>
              <option>We have existing systems that are not delivering insight</option>
              <option>We are ready to build something new</option>
              <option>Not sure yet, need guidance first</option>
            </select>
          </div>
        </>
      );
    }

    if (config.fields === "advisory") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="name"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={labelClass}>Business Email</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Company Name</label>
              <input
                name="company"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="Your company"
              />
            </div>
            <div>
              <label className={labelClass}>Primary Asset Focus</label>
              <select
                name="asset_focus"
                required
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select focus tier</option>
                <option>Independent Upstream Operator</option>
                <option>Marginal Field Developer</option>
                <option>Joint Venture or Partnership Asset</option>
                <option>Other Asset Management</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              What operational issues or readiness challenges would you like to discuss?
            </label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              className={`${inputClass} h-28 resize-none`}
              placeholder="Share a brief overview of the production issues, data gaps, or operational bottlenecks you want to address."
            />
          </div>
        </>
      );
    }

    if (config.fields === "research") {
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                name="name"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                className={inputClass}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Institution, Company or University</label>
            <input
              name="institution"
              required
              onChange={handleChange}
              className={inputClass}
              placeholder="Where are you currently working or studying?"
            />
          </div>

          <div>
            <label className={labelClass}>Briefly describe your project or research focus</label>
            <textarea
              name="message"
              required
              onChange={handleChange}
              className={`${inputClass} h-28 resize-none`}
              placeholder="What is your research project about and what kind of support or collaboration are you looking for?"
            />
          </div>
        </>
      );
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black relative">
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          Contact
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base max-w-md mx-auto mb-12 leading-relaxed">
          Select a service from the options above, and the right form will appear right here.
        </p>

        {!config ? (
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-12 rounded-xl shadow-2xl text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse mx-auto mb-3"></div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider">
              Please select a service or option above to open the form
            </p>
          </div>
        ) : submitted ? (
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-12 rounded-xl shadow-2xl text-center">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 mx-auto mb-3"></div>
            <h3 className="text-base font-bold text-white tracking-tight mb-2">
              Message Received
            </h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. We will review your message and get back to you within
              24 hours.
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 md:p-10 rounded-xl shadow-2xl relative">
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

            <div className="mb-8 border-b border-gray-950/80 pb-4">
              <h3 className="text-base font-bold text-blue-500 tracking-tight">
                {config.title}
              </h3>
              <p className="text-gray-500 text-xs mt-1">{config.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">{renderFields()}</div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-xs font-mono tracking-wider uppercase font-bold text-black bg-green-500 hover:bg-green-400 py-4 rounded-lg transition-all duration-300 disabled:opacity-40"
              >
                {loading ? "Sending..." : config.cta}
              </button>
            </form>
          </div>
        )}

        <div className="flex justify-center gap-8 mt-16 pt-8 border-t border-gray-950 text-gray-600 text-xl">
          <a
            href="https://www.linkedin.com/company/omah-tech/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/OmahTechLtd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/omah.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a href="mailto:admin@omahtech.co" className="hover:text-white transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}