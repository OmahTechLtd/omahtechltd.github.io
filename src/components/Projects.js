import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "amine-anomaly",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Amine System Anomaly Detection",
    outcome: "Flagged early signs of equipment degradation before they became operational failures.",
    description:
      "We built a machine learning model that monitors amine system behaviour and automatically flags unusual operating conditions including foaming, fouling, flooding, and solvent degradation. Engineers get more time to respond and less time reacting.",
    stat: "2.87% of operating points flagged as anomalies across 49,915 data samples",
    link: "/projects/amine-anomaly",
  },
  {
    id: "amine-energy",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Amine System Energy Optimisation",
    outcome: "Predicted optimal reboiler duty to cut energy use without compromising gas treatment performance.",
    description:
      "Using simulation data from an industrial amine regeneration system, we trained a model that recommends the most energy-efficient reboiler settings for a given set of operating conditions. The result is a decision-support tool that helps operators reduce energy costs while maintaining acid gas removal targets.",
    stat: "Built on Aspen HYSYS simulation data from an industrial amine regeneration system",
    link: "/projects/amine-energy",
  },
  {
    id: "crude-oil-production",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Crude Oil Production Anomaly Detection",
    outcome: "Identified four high-confidence anomaly periods in Nigeria's national production record using a four-model consensus framework.",
    description:
      "We applied four independent anomaly detection methods to 71 months of national crude oil and condensate production data from NUPRC. By requiring agreement across models before flagging a month, we reduced false positives and identified production events with structural significance.",
    stat: "71 months of national production data, January 2020 to November 2025",
    link: "/projects/crude-oil-production",
  },
  {
    id: "terminal-production-forecast",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Terminal-Level Production Decline Analysis and Forecasting",
    outcome: "Forecasted monthly crude oil and condensate production across 30 Nigerian export terminals and classified each terminal's trajectory using 76 months of NUPRC data.",
    description:
      "We built a dual-model forecasting system using Prophet and XGBoost to project production volumes at the terminal level across Nigeria's upstream export infrastructure. Each terminal is classified as Growing, Recovering, Stable, or Declining based on its trend trajectory, giving operators and investors a portfolio-level view of where Nigerian production is headed.",
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
    </section>
  );
};

export default Projects;