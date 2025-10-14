import React, { useState } from "react";
import ConsultationModal from "../components/ConsultationModal";

const CustomModels = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#0b0b0b] text-gray-200 min-h-screen px-6 py-20 flex flex-col items-center">
      
      {/* === HERO SECTION === */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
          Custom AI Models
        </h1>
        <p className="text-gray-400 text-lg">
          We design, train, and deploy enterprise-grade machine learning models
          that turn your business data into intelligent decisions.  
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center justify-center rounded-lg px-0 py-0 mt-8"
        >
          <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 opacity-40 blur-xl transition-opacity group-hover:opacity-60"></span>
          <span className="rounded-lg bg-black/60 px-8 py-3 font-medium ring-1 ring-white/10 cursor-pointer">
            Book a consultation
          </span>
        </button>
      </div>

      {/* === OUR APPROACH === */}
      <div className="max-w-5xl w-full grid md:grid-cols-4 gap-8 mb-20 text-center">
        {[
          {
            title: "Discovery & Strategy",
            desc: "We align AI goals with your business objectives to ensure measurable impact.",
          },
          {
            title: "Data & Engineering",
            desc: "From collection to cleaning, we prepare robust data pipelines for model training.",
          },
          {
            title: "Model Development",
            desc: "We build, test, and fine-tune advanced ML models tailored to your unique challenges.",
          },
          {
            title: "Deployment & MLOps",
            desc: "We deploy scalable, monitored AI solutions that grow with your infrastructure.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#111111] to-[#1c1c1c] p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-green-500 font-semibold text-lg mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* === CAPABILITIES === */}
      <div className="max-w-5xl w-full mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          What We Build
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Predictive Analytics",
            "Natural Language Processing",
            "Computer Vision",
            "Recommendation Systems",
            "Intelligent Automation",
            "Data Forecasting",
          ].map((cap, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-[#1a1a1a] rounded-full border border-gray-700 text-sm hover:border-teal-500 transition"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {/* === TECH STACK === */}
      <div className="max-w-5xl w-full mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Our Technology Stack
        </h2>
        <p className="text-gray-400 mb-6">
          We leverage industry-standard frameworks and cloud platforms for performance and scalability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "TensorFlow",
            "PyTorch",
            "Scikit-Learn",
            "Hugging Face",
            "LangChain",
            "OpenAI API",
            "AWS Sagemaker",
            "Azure ML",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-[#1a1a1a] rounded-full border border-gray-700 text-sm hover:border-blue-500 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* === CTA SECTION === */}
      <div className="max-w-3xl text-center bg-gradient-to-br from-[#101010] to-[#1a1a1a] p-10 rounded-2xl shadow-lg border border-gray-800">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
          Let’s Build Something Smart Together
        </h3>
        <p className="text-gray-400 mb-6">
          Ready to bring AI into your workflow? Share your goals and we’ll help you design
          the perfect intelligent system for your business.
        </p>
        <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-teal-700 hover:opacity-90 transition font-semibold">
          Start Your Project
        </button>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CustomModels;