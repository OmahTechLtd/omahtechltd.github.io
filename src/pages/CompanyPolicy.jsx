import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    title: "About OmahTech",
    content: [
      "OmahTech is an AI and machine learning company registered in Nigeria, with offices in Lagos and Abuja. We build data-driven systems and decision-support tools that help businesses operate more intelligently, researchers produce stronger work, and individuals develop practical AI skills.",
      "Everything we build is grounded in technical rigour, commercial relevance, and a commitment to responsible practice.",
    ],
  },
  {
    number: "02",
    title: "Data Privacy and Handling",
    content: [
      "We treat data shared with us as a professional responsibility. Any business, project, or personal data provided to OmahTech in the course of an engagement is used solely for the purpose of delivering the agreed service. We do not sell, share, or repurpose client data without explicit written consent.",
      "We comply with the Nigeria Data Protection Act (NDPA) and apply equivalent standards of care to clients in other jurisdictions. Data collected through our website contact forms is used only to respond to enquiries and is not retained beyond the period necessary to fulfil that purpose.",
    ],
  },
  {
    number: "03",
    title: "Confidentiality",
    content: [
      "Client information, project details, datasets, and business context shared with OmahTech are treated as confidential. We do not discuss, publish, or reference client work publicly without prior consent.",
      "Where a project is used as a case study or portfolio reference, we will seek explicit approval from the client before doing so.",
    ],
  },
  {
    number: "04",
    title: "Ethical AI Practice",
    content: [
      "We build AI systems that are fit for purpose, interpretable where it matters, and honest about their limitations. We do not build systems designed to deceive, discriminate, or cause harm. Where a model or tool has limitations that are material to how it is used, we communicate those limitations clearly to the client as part of delivery.",
      "We take bias seriously. Before deploying any model in a decision-making context, we assess it for unintended patterns that could produce unfair or misleading outputs.",
    ],
  },
  {
    number: "05",
    title: "Intellectual Property",
    content: [
      "Unless otherwise agreed in writing, intellectual property developed by OmahTech in the course of a client engagement belongs to the client upon full payment. Code, models, and documentation produced for a specific project are delivered to the client and are theirs to use, modify, and build upon.",
      "OmahTech retains the right to use general methodologies, frameworks, and non-proprietary techniques developed during engagements in future work.",
    ],
  },
  {
    number: "06",
    title: "Delivery and Support",
    content: [
      "We are committed to delivering work that meets the agreed scope, quality standard, and timeline. Where delays or changes arise, we communicate proactively and work with the client to find a practical path forward.",
      "For questions, issues, or follow-up support after delivery, clients can reach us at admin@omahtech.co. We aim to respond to all enquiries within two business days.",
    ],
  },
  {
    number: "07",
    title: "Disclaimer",
    content: [
      "AI and machine learning systems produce outputs based on patterns in data. While we design and test our models carefully, no model is infallible. Outputs should be treated as decision-support tools, not final authorities. Clients are responsible for applying appropriate human judgment before acting on model outputs in high-stakes or regulated contexts.",
      "By engaging OmahTech for any service, you acknowledge that AI-driven systems carry inherent uncertainty and agree to use the tools and outputs we deliver responsibly.",
    ],
  },
  {
    number: "08",
    title: "Updates to This Policy",
    content: [
      "This policy reflects OmahTech's current commitments and practices. As the company grows and the regulatory landscape evolves, we will update this document accordingly. Material changes will be communicated to active clients.",
    ],
  },
];

const CompanyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="border-b border-white/10 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
            Company Policy
          </h1>
          <p className="text-gray-400 text-lg">
            OmahTech's commitments to our clients, partners, and the people we work with.
          </p>
          <p className="text-gray-600 text-sm mt-4">Last updated: April 2026</p>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {sections.map((section) => (
          <div key={section.number} className="flex gap-8">
            <div className="hidden md:block">
              <span className="text-3xl font-bold text-gray-800 select-none">
                {section.number}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-green-400 mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-white/10 py-12 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm">
            Questions about this policy? Reach us at{" "}
            <a
              href="mailto:admin@omahtech.co"
              className="text-green-400 hover:underline"
            >
              admin@omahtech.co
            </a>
          </p>
          <a
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition text-sm"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;