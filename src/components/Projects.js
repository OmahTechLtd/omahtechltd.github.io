import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "amine-anomaly",
    tag: "Production Intelligence",
    title: "Amine System Anomaly Detection",
    outcome: "Isolating early equipment degradation vectors before operational failure.",
    description: "Built an advanced machine learning framework to monitor multi-variable amine system dynamics, automatically flagging statistical deviations indicative of foaming, fouling, or solvent degradation.",
    stat: "Analyzed 49,915 operational data points | 2.87% anomaly threshold identified",
    link: "/projects/amine-anomaly",
  },
  {
    id: "amine-energy",
    tag: "Process Optimization",
    title: "Amine System Energy Optimisation",
    outcome: "Predictive reboiler control to reduce fuel gas penalties without compromising throughput.",
    description: "Engineered a predictive decision-support model that calculates optimal reboiler duty configurations against volatile feed conditions, protecting gas treatment targets while minimizing thermodynamic waste.",
    stat: "Validated against industrial gas treatment design parameters",
    link: "/projects/amine-energy",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black relative">
      
      {/* Subtle visual ambient glow */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Label */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          projects
        </div>

        {/* <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-4">
          Projects
        </h2> */}
        
        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          Deep-tech machine learning systems engineered and validated to resolve critical upstream process constraints.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-8 rounded-xl shadow-2xl flex flex-col justify-between hover:border-gray-900 transition-all group"
            >
              <div>
                <span className="text-xs font-mono font-semibold text-blue-500 uppercase tracking-widest mb-3 block">
                  {study.tag}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors tracking-tight">
                  {study.title}
                </h3>
                <p className="text-gray-200 text-sm font-semibold mb-4 leading-snug">
                  {study.outcome}
                </p>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {study.description}
                </p>
                <p className="text-gray-500 text-xs font-mono border-t border-gray-950 pt-4">
                  {study.stat}
                </p>
              </div>
              
              <Link
                to={study.link}
                className="mt-8 border border-gray-800 hover:border-gray-700 bg-transparent hover:bg-white/5 text-white px-6 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase font-bold text-center transition-all block w-full"
              >
View Project Framework              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;