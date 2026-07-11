import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black relative">
      
      {/* Structural Visual Boundary Line Thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
      
      {/* Ambient lighting layers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-900/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Clean, Elevated Section Tag */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          About OmahTech
        </div>

        {/* Top Block: Direct, Clean Narrative Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            As local operators step up to drive Nigeria's energy future, maximizing production efficiency is a high-stakes challenge. Acquiring assets is only the first step; unlocking their true financial value requires deep operational data insight.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            OmahTech bridges the gap between traditional petroleum engineering and applied machine learning. We deploy custom data systems that translate complex field metrics into clear, profitable decisions.
          </p>
        </div>

        {/* Bottom Block: Balanced 3-Column Identity Profile with Color and Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-950 pt-16">
          
          {/* Identity Column 1: Our Mission */}
          <div className="relative group">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-blue-500/50 font-bold">01</span>
              <div>
                <h4 className="text-base font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Our Mission
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To equip indigenous operators with the same analytical depth typically reserved for supermajors. We replace legacy guesswork with precise machine learning models to ensure mature fields reach their maximum physical and financial potential.
                </p>
              </div>
            </div>
          </div>

          {/* Identity Column 2: Our Focus */}
          <div className="relative group">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-green-500/50 font-bold">02</span>
              <div>
                <h4 className="text-base font-bold tracking-tight mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Our Focus
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our systems are engineered exclusively for independent producers, marginal field developers, and joint ventures navigating the distinct operational realities of the Nigerian basin.
                </p>
              </div>
            </div>
          </div>

          {/* Identity Column 3: Our Commitment */}
          <div className="relative group">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-blue-500/50 font-bold">03</span>
              <div>
                <h4 className="text-base font-bold tracking-tight mb-3 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Our Commitment
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
We build for operational utility, not business hype. Every system we deliver is functional, secure, and designed to fit directly into your asset team's daily operations.                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Metadata Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-gray-950 text-left">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">Corporate Registration</div>
            <div className="text-xs font-semibold text-gray-300">Omah Tech Enterprises Ltd.</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">Operational Hubs</div>
            <div className="text-xs font-semibold text-gray-300">Lagos & Abuja, Nigeria</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">Strategic Scope</div>
            <div className="text-xs font-semibold text-gray-300">Upstream Asset Analytics</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">Deployment Model</div>
            <div className="text-xs font-semibold text-gray-300">Applied Production Intelligence</div>
          </div>
        </div>

      </div>
    </section>
  );
}