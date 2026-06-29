import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "amine-anomaly",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Amine System Anomaly Detection",
    outcome: "Flagged early signs of equipment degradation before they became operational failures.",
    description: "We built a machine learning model that monitors amine system behaviour and automatically flags unusual operating conditions including foaming, fouling, flooding, and solvent degradation. Engineers get more time to respond and less time reacting.",
    stat: "2.87% of operating points flagged as anomalies across 49,915 data samples",
    link: "/projects/amine-anomaly",
  },
  {
    id: "amine-energy",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Amine System Energy Optimisation",
    outcome: "Predicted optimal reboiler duty to cut energy use without compromising gas treatment performance.",
    description: "Using simulation data from an industrial amine regeneration system, we trained a model that recommends the most energy-efficient reboiler settings for a given set of operating conditions. The result is a decision-support tool that helps operators reduce energy costs while maintaining acid gas removal targets.",
    stat: "Built on Aspen HYSYS simulation data from an industrial amine regeneration system",
    link: "/projects/amine-energy",
  },
  {
    id: "crude-oil-production",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Crude Oil Production Anomaly Detection",
    outcome: "Identified four high-confidence anomaly periods in Nigeria's national production record using a four-model consensus framework.",
    description: "We applied four independent anomaly detection methods to 71 months of national crude oil and condensate production data from NUPRC. By requiring agreement across models before flagging a month, we reduced false positives and identified production events with structural significance.",
    stat: "71 months of national production data, January 2020 to November 2025",
    link: "/projects/crude-oil-production",
  },
  {
    id: "terminal-production-forecast",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Terminal-Level Production Decline Analysis and Forecasting",
    outcome: "Forecasted monthly crude oil and condensate production across 30 Nigerian export terminals and classified each terminal's trajectory using 76 months of NUPRC data.",
    description: "We built a dual-model forecasting system using Prophet and XGBoost to project production volumes at the terminal level across Nigeria's upstream export infrastructure. Each terminal is classified as Growing, Recovering, Stable, or Declining based on its trend trajectory, giving operators and investors a portfolio-level view of where Nigerian production is headed.",
    stat: "76 months of terminal-level data across 30 terminals, January 2020 to April 2026",
    link: "/projects/terminal-production-forecast",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">

      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Our Work
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
        A look at some of the problems we have solved and the tools we have built.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300"
          >
            <div>
              <span className={`text-xs font-semibold uppercase tracking-widest mb-2 block ${study.tagColor}`}>
                {study.tag}
              </span>
              <h3 className="text-xl font-semibold mb-3 text-green-400">{study.title}</h3>
              <p className="text-white text-sm font-medium mb-3">{study.outcome}</p>
              <p className="text-gray-400 text-sm mb-4">{study.description}</p>
              <p className="text-gray-500 text-xs italic">{study.stat}</p>
            </div>
            <Link
              to={study.link}
              className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center inline-block border border-gray-600 transition duration-300"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>

      {/* Independent Research */}
      <div className="max-w-6xl mx-auto px-4 mt-20">

        <div className="border-t border-gray-800 mb-12"></div>

        <h3 className="text-2xl font-bold mb-2 text-white text-center">
          Independent Research
        </h3>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Original studies and peer-reviewed conference papers produced by OmahTech on Nigerian upstream production data.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 — Terminal Forecast, Published */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-blue-400">
                Oil & Gas | Published
              </span>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Terminal-Level Production Decline Analysis and Forecasting
              </h3>
              <p className="text-gray-400 text-sm">
                The first terminal-level ML forecasting study applied to NUPRC public production data across 30 Nigerian export terminals. XGBoost achieved 7.88% mean MAPE against 88.90% for Prophet across 26 terminals, with R-squared values above 0.96 across all terminal size tiers.
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://doi.org/10.5281/zenodo.20641691"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
              >
                Read Paper →
              </a>
              <a
                href="https://terminal-forecast-dashboard.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
              >
                Live Dashboard →
              </a>
            </div>
          </div>

          {/* Card 2 — Locked Out, Published */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-blue-400">
                Oil & Gas | Published
              </span>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Locked Out of the Intelligence Revolution: Nigeria's Upstream Data Gap and a Framework for Industry Data Collaboration
              </h3>
              <p className="text-gray-400 text-sm">
                A three-tier federated learning framework proposing a neutral data collaboration model for Nigerian upstream operators, addressing the structural data gap left by IOC exits and the barriers preventing indigenous operators from accessing AI-grade intelligence.
              </p>
            </div>
            <a
              href="https://doi.org/10.5281/zenodo.20813414"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
            >
              Read Paper →
            </a>
          </div>

          {/* Card 3 — In Progress */}
          <div className="relative bg-gradient-to-r from-black via-[#0d0d0d] to-[#111111] p-8 rounded-xl border border-dashed border-gray-700 flex flex-col justify-between opacity-75">
            <span className="absolute top-4 right-4 text-xs font-semibold text-gray-500 border border-gray-700 px-2 py-1 rounded-full">
              In Progress
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block text-gray-500">
                Oil & Gas | In Progress
              </span>
              <h3 className="text-xl font-semibold mb-3 text-gray-400">
                Trajectory versus Driver: Unsupervised Classification of Nigeria's Crude Oil Export Infrastructure
              </h3>
              <p className="text-gray-500 text-sm">
                A multivariate study extending the terminal-level analysis to ask not just where each terminal went, but what drove it there. Uses unsupervised machine learning to classify terminals by production driver across security, oil price, and OPEC policy signals simultaneously.
              </p>
            </div>
          </div>

          {/* Card 4 — SPE NAICE 2026, Anomaly Detection */}
          <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  Oil & Gas
                </span>
                <span className="text-xs font-semibold text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full">
                  SPE NAICE 2026
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Univariate Time-Series Anomaly Detection in Crude Oil Production Volumes Using Unsupervised Learning Techniques
              </h3>
              <p className="text-gray-400 text-sm">
                A co-authored conference paper accepted and presented at the SPE Nigeria Annual International Conference and Exhibition 2026 in Lagos. Applies unsupervised learning techniques to anomaly detection in crude oil production volumes.
              </p>
            </div>
          </div>

          {/* Card 5 — SPE NAICE 2026, Comparative Forecasting */}
<div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
  <div>
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        Oil & Gas
      </span>
      <span className="text-xs font-semibold text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full">
        SPE NAICE 2026
      </span>
    </div>

    <h3 className="text-xl font-semibold mb-3 text-green-400">
      Comparative Production Modeling and Forecasting of Crude Oil and Natural Gas in Nigeria
    </h3>

    <p className="text-gray-400 text-sm">
      A co-authored conference paper accepted and presented at SPE NAICE 2026 in Lagos. Presents a comparative analysis of production modelling and forecasting approaches for Nigerian crude oil and natural gas.
    </p>
  </div>
</div>

          {/* Card 6 — SPE NAICE 2020, Bypassed Oil */}
<div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] p-8 rounded-xl shadow-xl border border-gray-800 flex flex-col justify-between hover:border-green-800 transition duration-300">
  <div>
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        Oil & Gas
      </span>
      <span className="text-xs font-semibold text-orange-400 border border-orange-400/30 px-2 py-0.5 rounded-full">
        SPE NAICE 2020
      </span>
    </div>

    <h3 className="text-xl font-semibold mb-3 text-green-400">
      Estimation of Bypassed Oil Volume after Waterflooding an Undersaturated Reservoir
    </h3>

    <p className="text-gray-400 text-sm">
      A co-authored peer-reviewed conference paper presented at SPE NAICE 2020. Applies reservoir simulation to estimate bypassed oil remaining after waterflooding in an undersaturated reservoir, quantifying 22.97 MMSTB of unrecovered reserves and providing insights to improve sweep efficiency and reservoir recovery planning.
    </p>
  </div>

  <a
    href="https://doi.org/10.2118/203656-MS"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium text-center border border-gray-600 transition duration-300 text-sm"
  >
    Read Paper →
  </a>
</div>

        </div>
      </div>

    </section>
  );
};

export default Projects;