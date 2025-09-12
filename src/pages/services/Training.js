import React from "react";
import { FaGlobeAfrica, FaChalkboardTeacher, FaTools, FaRocket } from "react-icons/fa";

const Training = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-white/60">
            Services
          </p>

          <h1 className="mt-2 text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent">
Train With Us        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Hands-on AI training for individuals and teams to solve Africa’s biggest challenges 
          and create world-class innovations.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="relative inline-block px-6 py-3 bg-black rounded-lg text-white text-lg font-semibold
              shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)]
              hover:shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_10px_rgba(99,102,241,0.8),0_0_12px_rgba(34,197,94,0.8)]
              hover:scale-105 transition-transform before:absolute before:-inset-0.5 before:rounded-lg
              before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]"
          >
            Enroll Now
          </a>
        </div>
      </div>

      {/* Training Offerings */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-green-400">Training for Individuals</h2>
          <p className="mt-3 text-gray-300">
            Learn the fundamentals of machine learning, data preparation, and AI-powered 
            decision-making through hands-on projects and mentorship. Build a career-ready portfolio.
          </p>
        </div>

        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] p-8 rounded-xl shadow-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-green-400">Corporate Training</h2>
          <p className="mt-3 text-gray-300">
            Upskill your team with tailored workshops designed to meet your industry’s unique challenges.
            Drive AI adoption with custom strategies and actionable insights.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-300 bg-clip-text ">
          Why Choose OmahTech Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <FaGlobeAfrica className="text-green-400 text-4xl mx-auto mb-2" />
            <p className="text-gray-300 text-sm">Africa-focused solutions</p>
          </div>
          <div>
            <FaChalkboardTeacher className="text-indigo-400 text-4xl mx-auto mb-2" />
            <p className="text-gray-300 text-sm">Mentorship from experts</p>
          </div>
          <div>
            <FaTools className="text-blue-400 text-4xl mx-auto mb-2" />
            <p className="text-gray-300 text-sm">Hands-on learning</p>
          </div>
          <div>
            <FaRocket className="text-green-400 text-4xl mx-auto mb-2" />
            <p className="text-gray-300 text-sm">Career-ready skills</p>
          </div>
        </div>
      </div>

      {/* Final Call to Action
      <div className="text-center mt-16">
        <a
          href="/contact"
          className="relative inline-block px-6 py-3 bg-black rounded-lg text-white text-lg font-semibold
            shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)]
            hover:shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_10px_rgba(99,102,241,0.8),0_0_12px_rgba(34,197,94,0.8)]
            hover:scale-105 transition-transform before:absolute before:-inset-0.5 before:rounded-lg
            before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]"
        >
          Enroll now
        </a>
      </div> */}
    </section>
  );
};

export default Training;