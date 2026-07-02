import React from "react";
import { Link } from "react-router-dom";
import { updates, UpdateCard } from "../components/Updates";

const categories = [
  { name: "Research", color: "text-blue-400" },
  { name: "Conferences", color: "text-orange-400" },
  { name: "Company", color: "text-green-400" },
];

const UpdatesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <Link to="/" className="text-sm text-green-400 hover:underline mb-10 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          Updates
        </h1>
        <p className="text-gray-400 mb-16 max-w-xl">
          Everything OmahTech has been working on, across research, conferences, and company activity.
        </p>

        {categories.map((cat) => {
          const items = updates.filter((u) => u.category === cat.name);
          return (
            <div key={cat.name} className="mb-16">
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-6 ${cat.color}`}>
                {cat.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 p-6 hover:border-green-800 transition duration-300"
                  >
                    <UpdateCard {...item} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default UpdatesPage;