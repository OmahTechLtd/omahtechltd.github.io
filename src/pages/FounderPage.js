import React from "react";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder.jpg";
import { FaLinkedin, FaResearchgate, FaOrcid, FaBookOpen } from "react-icons/fa";

export default function FounderPage() {
  return (
    <div className="bg-black text-white min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Engineering Canvas Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Back Home */}
        <div className="mb-16">
          <Link
                              to="/"
                              className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider uppercase mb-12 group"
                            >
                              <span className="transform group-hover:-translate-x-1 transition-transform mr-2">←</span>
                              Back to Home
                            </Link>
        </div>

        {/* Clean Header Block with Circle Image Placement */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 pb-8 border-b border-gray-900">
          
          {/* Circular Frame Profile Asset mimicking your reference design */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-900 p-1 bg-gradient-to-b from-gray-800 to-black shrink-0 shadow-xl">
            <img 
              src={founderImage} 
              alt="Vera I. Ezeagu" 
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>

          <div className="text-center sm:text-left">
            <div className="text-[10px] font-mono uppercase tracking-widest text-blue-500 mb-1">
              Leadership Registry
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
              Vera I. Ezeagu
            </h1>
            <p className="text-sm font-mono text-green-400 mt-1 uppercase tracking-wider">
              Founder & CEO, OmahTech Enterprises Ltd.
            </p>
          </div>
        </div>

        {/* Core Domain Competency Tags Grid */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono">
          <span className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-gray-950 text-gray-400 text-xs">
            Petroleum Engineering
          </span>
          <span className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-gray-950 text-gray-400 text-xs">
            Machine Learning
          </span>
          <span className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-gray-950 text-gray-400 text-xs">
            Software Engineering
          </span>
        </div>

        {/* Precise Refined Biography Content */}
        <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base max-w-3xl">
          <p>
            <strong className="text-white font-semibold">Vera I. Ezeagu</strong> is the Founder and CEO of <strong className="text-white font-semibold">OmahTech Enterprises Ltd.</strong> She combines expertise in petroleum engineering, machine learning, and software engineering to build operational intelligence systems for Nigeria's upstream oil and gas sector.
          </p>

          <p>
            Her research focuses on production forecasting, anomaly detection, and data collaboration among upstream operators. She has co-authored papers presented at SPE NAICE, with work published through SPE OnePetro, Zenodo, and ResearchGate.
          </p>

          <p>
            Vera holds an <strong className="text-white font-semibold">MSc in Petroleum Engineering</strong> from the African University of Science and Technology, Abuja, and a <strong className="text-white font-semibold">BEng in Petroleum Engineering</strong> from Afe Babalola University. She developed her software engineering expertise through Semicolon Africa's Techpreneurship Programme, which deepened her interest in data analysis and led to her machine learning practice. She gained industry experience at Indorama Eleme Petrochemicals in Port Harcourt.
          </p>
        </div>

        {/* Secondary Social Verification Tray */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex gap-6 justify-center sm:justify-start text-xl text-gray-600">
          <a href="https://www.linkedin.com/in/YOURPROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://www.researchgate.net/profile/YOURPROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaResearchgate />
          </a>
          <a href="https://orcid.org/YOURORCID" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaOrcid />
          </a>
          <a href="https://onepetro.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaBookOpen />
          </a>
        </div>

      </div>
    </div>
  );
}