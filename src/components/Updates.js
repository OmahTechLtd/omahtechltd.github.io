import React from "react";

const Updates = () => {
  return (
    <section id="updates" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="border-t border-gray-800 mb-14"></div>

        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          Latest Updates
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          What OmahTech has been working on.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Research */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden hover:border-green-800 transition duration-300">
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 block">
                Research
              </span>
              <div className="space-y-6">

                <div className="border-b border-gray-800 pb-6">
                  <p className="text-xs text-gray-500 mb-2">June 2026</p>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Second independent study published on Zenodo
                  </h4>
                  <p className="text-gray-400 text-xs leading-6">
                    Our paper proposing a three-tier data collaboration framework for Nigeria's upstream sector is now available on Zenodo.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">May 2026</p>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    First independent study published on Zenodo
                  </h4>
                  <p className="text-gray-400 text-xs leading-6">
                    Our terminal-level production forecasting study across 30 Nigerian export terminals is now available on Zenodo with a live interactive dashboard.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Conferences */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden hover:border-green-800 transition duration-300">
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-4 block">
                Conferences
              </span>
              <div className="space-y-6">

                <div className="border-b border-gray-800 pb-6">
                  <p className="text-xs text-gray-500 mb-2">August 2026 — Upcoming</p>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    SPE NAICE 2026 — Eco Hotel, Lagos
                  </h4>
                  <p className="text-gray-400 text-xs leading-6">
                    OmahTech will be presenting at the SPE Nigeria Annual International Conference and Exhibition, August 3 to 5, 2026.
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">June 2026</p>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Two papers presented at SPE NAICE 2026
                  </h4>
                  <p className="text-gray-400 text-xs leading-6">
                    OmahTech co-authored two peer-reviewed papers presented at the SPE Nigeria Annual International Conference and Exhibition in Lagos.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Company */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden hover:border-green-800 transition duration-300">
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-4 block">
                Company
              </span>
              <div className="space-y-6">

                <div>
                  <p className="text-xs text-gray-500 mb-2">July 2026</p>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Meeting with CBI
                  </h4>
                  <p className="text-gray-400 text-xs leading-6">
                    OmahTech met with CBI to explore opportunities in Nigeria's upstream data and AI space.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Updates;