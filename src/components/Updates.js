import React from "react";
import { Link } from "react-router-dom";

export const updates = [
  {
    id: 1,
    category: "Research",
    date: "June 2026",
    status: null,
    title: "Second independent study published on Zenodo",
    description: "Our paper proposing a three-tier data collaboration framework for Nigeria's upstream sector is now available on Zenodo.",
    image: null,
  },
  {
    id: 2,
    category: "Research",
    date: "May 2026",
    status: null,
    title: "First independent study published on Zenodo",
    description: "Our terminal-level production forecasting study across 30 Nigerian export terminals is now available on Zenodo with a live interactive dashboard.",
    image: null,
  },
  {
    id: 3,
    category: "Conferences",
    date: "August 2026",
    status: "Upcoming",
    title: "SPE NAICE 2026 — Eko Hotel, Lagos",
    description: "OmahTech co-authored two peer-reviewed papers that will be presented at the SPE Nigeria Annual International Conference and Exhibition in Lagos.",
    image: null,
  },
  // {
  //   id: 4,
  //   category: "Conferences",
  //   date: "June 2026",
  //   status: null,
  //   title: "Two papers presented at SPE NAICE 2026",
  //   description: "OmahTech co-authored two peer-reviewed papers presented at the SPE Nigeria Annual International Conference and Exhibition in Lagos.",
  //   image: null,
  // },
  {
    id: 5,
    category: "Company",
    date: "November 2025",
    status: null,
    title: "Meeting with CBI",
    description: "OmahTech met with CBI to explore opportunities in Nigeria's upstream data and AI space.",
    image: null,
  },
];

export const UpdateCard = ({ date, status, title, description, image }) => (
  <div className="flex flex-col h-full justify-between">
    <div>
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      )}
      <div className="flex items-center gap-2 mb-2">
        <p className="text-xs text-gray-500 font-mono">{date}</p>
        {status && (
          <span className="px-2 py-0.5 text-[10px] bg-orange-500/10 text-orange-400 rounded font-mono font-semibold uppercase tracking-wider border border-orange-500/20">
            {status}
          </span>
        )}
      </div>
      <h4 className="text-sm font-bold text-white mb-2 group-hover:text-green-400 transition-colors tracking-tight">
        {title}
      </h4>
      <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
    </div>
  </div>
);

const categories = [
  { name: "Research", label: "Research Publications" },
  { name: "Conferences", label: "Technical Conventions" },
  { name: "Company", label: "Company Updates" },
];

const Updates = () => {
  return (
    <section id="updates" className="py-24 px-6 bg-black relative">
      {/* Structural Visual Boundary Line Thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      {/* Visual lighting layer */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-12 text-center">
          Insights & Activity
        </div>

        {/* <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center mb-4">
          Latest Activities
        </h2> */}
        
        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-16 leading-relaxed">
Tracking our latest research, conference activity, and company milestones.        </p>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const items = updates.filter((u) => u.category === cat.name).slice(0, 2);
            return (
              <div
                key={cat.name}
                className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-6 rounded-xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-6 block border-b border-gray-950 pb-3">
                    {cat.label}
                  </span>
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`group cursor-pointer ${
                          index < items.length - 1 ? "border-b border-gray-950 pb-6" : ""
                        }`}
                      >
                        <UpdateCard {...item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/updates"
            className="inline-flex items-center text-xs font-mono text-green-400 hover:text-green-300 transition-colors tracking-wider uppercase group"
          >
            View All Updates
            <span className="transform group-hover:translate-x-1 transition-transform ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Updates;