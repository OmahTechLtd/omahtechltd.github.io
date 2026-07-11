import React from "react";

const testimonials = [
  {
    name: "David Kalu",
    role: "Project Manager",
    organization: "University of Port Harcourt",
    quote:
      "I had research ideas and needed a competent ML expert to handle the technical side. OmahTech delivered. The project scored 80/100 and was accepted for presentation at an energy conference. Top notch professionalism and quality outputs throughout.",
    result: "Project accepted for energy conference",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-black relative">
      {/* Structural Visual Boundary Line Thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      {/* Visual continuity lighting layer */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-900/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          Collaborator Feedback
        </div>

        {/* Clean, normal, direct header */}
        {/* <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-4">
          Client Feedback
        </h2> */}
        
        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
          Direct outcomes and feedback from our technical collaborations and research engineering projects.
        </p>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 rounded-xl p-8 md:p-10 shadow-2xl relative"
            >
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic font-normal">
                "{t.quote}"
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-6 border-t border-gray-950/80 pt-6">
                <div>
                  <p className="text-white font-bold tracking-tight text-base">{t.name}</p>
                  <p className="text-gray-500 text-xs font-mono mt-1">
                    {t.role}, {t.organization}
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/5 border border-green-500/10 text-[11px] font-mono tracking-wider text-green-400 uppercase font-semibold">
                  <span className="w-1 h-1 rounded-full bg-green-400"></span>
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;