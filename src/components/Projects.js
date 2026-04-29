import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "oil-and-gas",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Amine System Anomaly Detection",
    outcome: "Flagged early signs of equipment degradation before they became operational failures.",
    description:
      "We built a machine learning model that monitors amine system behaviour in real time and automatically flags unusual operating conditions including foaming, fouling, flooding, and solvent degradation. Engineers get more time to respond and less time reacting."    stat: "2.87% of operating points flagged as anomalies across 49,915 data samples",
    link: "/projects/oil-and-gas",
  },
  {
    id: "gas-flaring",
    tag: "Oil & Gas",
    tagColor: "text-blue-400",
    title: "Gas Flaring Prediction Model",
    outcome: "Predicted flaring volumes across Nigerian oil fields using five years of operational data.",
    description:
      "Using historical data from 2020 to 2025, we trained a predictive model that estimates gas flaring output based on field-level operational inputs. The result is a tool that helps operators anticipate flaring levels and plan accordingly, with direct implications for regulatory compliance and cost management."    stat: "Built on Nigerian oil and gas data across multiple field types",
    link: "/projects/oil-and-gas",
  },
  {
    id: "sales-forecasting",
    tag: "Retail & Business",
    tagColor: "text-orange-400",
    title: "Sales Forecasting Dashboard",
    outcome: "Gave a retail business a 12-month forward view of expected revenue by product category.",
    description:
      "We built an interactive forecasting dashboard that takes historical sales data and generates a 12-month projection with confidence ranges. Business owners can upload their own data, explore seasonal trends, and walk into planning conversations with numbers they can defend.",
    stat: "12-month forecast with high and low estimate ranges, built on 4 years of transaction data",
    link: "/projects/real-estate",
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

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
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