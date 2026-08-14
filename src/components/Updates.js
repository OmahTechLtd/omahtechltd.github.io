import React from "react";
import { Link } from "react-router-dom";

export const updates = [
  {
    id: 6,
    category: "Research",
    date: "August 2026",
    status: "New",
    title: "Five Conversations Shaping Nigeria's Upstream Digital Future",
    description: "An industry report on what SPE NAICE 2026 conversations mean for indigenous operators.",
    link: "#research",
    image: null,
  },
  {
    id: 1,
    category: "Research",
    date: "June 2026",
    status: null,
    title: "Second independent study published on Zenodo",
    description: "A three-tier data collaboration framework for Nigeria's upstream sector.",
    link: "#research",
    image: null,
  },
  {
    id: 2,
    category: "Research",
    date: "May 2026",
    status: null,
    title: "First independent study published on Zenodo",
    description: "Terminal-level production forecasting across 30 Nigerian export terminals.",
    link: "#research",
    image: null,
  },
  {
    id: 3,
    category: "Conferences",
    date: "August 2026",
    status: null,
    title: "SPE NAICE 2026, Eko Hotel, Lagos",
    description: "Presented two co-authored peer-reviewed papers at the SPE Nigeria Annual International Conference and Exhibition.",
    image: null,
  },
  {
    id: 5,
    category: "Company",
    date: "November 2025",
    status: null,
    title: "Meeting with CBI",
    description: "Explored opportunities in Nigeria's upstream data and AI space.",
    image: null,
  },
];

export const UpdateCard = ({ date, status, title, description, link, image }) => (
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
      {link && (
       <a 
          href={link}
          className="inline-flex items-center text-[11px] font-mono text-green-400 hover:text-green-300 transition-colors tracking-wider uppercase mt-3"
        >
          View full paper
          <span className="ml-1">→</span>
        </a>
      )}
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
    <section id="updates" className="py-12 md:py-24 px-6 bg-black relative">
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/5 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-sm md:text-base font-mono font-bold tracking-widest text-blue-500 uppercase mb-6 md:mb-12 text-center">
          Insights & Activity
        </div>

        <p className="text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 md:mb-16 leading-relaxed">
          A running timeline of research, conference activity, and company milestones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {categories.map((cat) => {
            const items = updates.filter((u) => u.category === cat.name).slice(0, 2);
            return (
              <div
                key={cat.name}
                className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-4 md:p-6 rounded-xl shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-4 md:mb-6 block border-b border-gray-950 pb-3">
                    {cat.label}
                  </span>
                  <div className="space-y-4 md:space-y-6">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className={
                          index === 0
                            ? "group cursor-pointer"
                            : "hidden md:block group cursor-pointer border-t border-gray-950 pt-4 md:pt-6"
                        }
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

        <div className="text-center mt-8 md:mt-12">
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