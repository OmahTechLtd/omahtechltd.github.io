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
    description: "OmahTech will be presenting at the SPE Nigeria Annual International Conference and Exhibition, August 3 to 5, 2026.",
    image: null,
  },
  {
    id: 4,
    category: "Conferences",
    date: "June 2026",
    status: null,
    title: "Two papers presented at SPE NAICE 2026",
    description: "OmahTech co-authored two peer-reviewed papers presented at the SPE Nigeria Annual International Conference and Exhibition in Lagos.",
    image: null,
  },
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
  <div>
    {image && (
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
    )}
    <div className="flex items-center gap-2 mb-2">
      <p className="text-xs text-gray-500">{date}</p>
      {status && (
        <span className="text-xs text-orange-400 font-semibold">{status}</span>
      )}
    </div>
    <h4 className="text-sm font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-xs leading-6">{description}</p>
  </div>
);

const categories = [
  { name: "Research", color: "text-blue-400" },
  { name: "Conferences", color: "text-orange-400" },
  { name: "Company", color: "text-green-400" },
];

const Updates = () => {
  return (
    <section id="updates" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">


        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          Latest Updates
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          What OmahTech has been working on.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const items = updates.filter((u) => u.category === cat.name).slice(0, 2);
            return (
              <div
                key={cat.name}
                className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 p-6 hover:border-green-800 transition duration-300"
              >
                <span className={`text-xs font-semibold uppercase tracking-widest mb-6 block ${cat.color}`}>
                  {cat.name}
                </span>
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className={index < items.length - 1 ? "border-b border-gray-800 pb-6" : ""}
                    >
                      <UpdateCard {...item} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/updates" className="text-sm text-green-400 hover:underline">
            See all updates →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Updates;