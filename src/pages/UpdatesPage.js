import React from "react";
import { Link } from "react-router-dom";
import { updates, UpdateCard } from "../components/Updates";

const categories = [
  { name: "Research", label: "Research Publications" },
  { name: "Conferences", label: "Technical Conventions" },
  { name: "Company", label: "Company Updates" },
];

const UpdatesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">

      {/* Top visual boundary */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      {/* Background lighting */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto py-28 px-6">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-green-400 transition-colors tracking-wider uppercase mb-12 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform mr-2">←</span>
          Back to Home
        </Link>

        {/* Section Label */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-4 text-center">
          Insights & Activity
        </div>

        {/* Description */}
        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-20 leading-relaxed">
          Everything OmahTech has been working on, across research, conferences, and company activity.
        </p>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((cat) => {
            const items = updates.filter((u) => u.category === cat.name);
            if (items.length === 0) return null;
            return (
              <div key={cat.name}>

                {/* Category label */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                    {cat.label}
                  </span>
                  <div className="flex-1 h-[1px] bg-gray-950"></div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl shadow-2xl group relative"
                    >
                      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
                      <UpdateCard {...item} />
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default UpdatesPage;