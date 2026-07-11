import React from "react";
import { Link } from "react-router-dom";
import founderImage from "../assets/founder.jpg";
import { FaLinkedin, FaResearchgate, FaOrcid, FaBookOpen } from "react-icons/fa";

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 bg-black relative">
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        {/* <div className="text-xs font-mono tracking-widest text-blue-500 uppercase mb-12 text-center">
          06 / Leadership Directive
        </div> */}
        
        <div className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] rounded-xl border border-gray-950 shadow-2xl overflow-hidden p-8 md:p-12 relative">
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Box: Styled as a crisp, distinct internal frame asset */}
            <div className="col-span-1 lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm lg:max-w-none aspect-[4/5] overflow-hidden rounded-xl border border-gray-950 p-2 bg-black shadow-inner">
                <img 
                  src={founderImage} 
                  alt="Vera I. Ezeagu" 
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </div>

            {/* Content Container with Double Blue Quotes */}
            <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left relative pr-4">
              
              {/* Electric Blue Opening Quote */}
              <span className="text-6xl text-blue-500 font-serif leading-none absolute -top-4 -left-2 pointer-events-none select-none">“</span>
              
              <blockquote className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed pt-4 mb-6 italic relative z-10 pl-6">
                Nigeria's upstream future belongs to indigenous operators. The data exists. The fields exist. The operators exist. We are building the intelligence layer that connects all three.
                
                {/* Electric Blue Closing Quote matched perfectly */}
                <span className="text-6xl text-blue-500 font-serif leading-none absolute -bottom-8 inline-block ml-1 pointer-events-none select-none">”</span>
              </blockquote>

              <div className="mb-6 mt-2 pl-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">Vera I. Ezeagu</h3>
                <p className="text-green-400 font-mono text-xs md:text-sm tracking-wider uppercase font-semibold mt-1">
                  Founder & CEO, Omah Tech Enterprises Ltd.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8 font-mono pl-6">
                <span className="px-3 py-1 rounded-lg bg-[#020202] border border-gray-900 text-gray-400 text-xs">
                  Petroleum Engineer
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#020202] border border-gray-900 text-gray-400 text-xs">
                  Machine Learning Engineer
                </span>
              </div>

              <div className="mb-8 pl-6">
                <Link 
                  to="/founder" 
                  className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-white bg-[#050505] border border-gray-900 hover:border-green-500 px-5 py-3 rounded-lg transition-all duration-300 group"
                >
                  View Full Profile 
                  <span className="transform group-hover:translate-x-1 transition-transform ml-2">→</span>
                </Link>
              </div>

              <div className="flex gap-5 text-xl text-gray-600 pl-6">
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
        </div>
      </div>
    </section>
  );
}