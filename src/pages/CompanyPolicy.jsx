import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    number: "01",
    title: "About OmahTech",
    content: [
      "OmahTech is an operational intelligence and machine learning enterprise registered in Nigeria, with active engineering hubs in Lagos and Abuja. We design and deploy production-grade data pipelines, predictive models, and asset analytics specifically tailored for upstream independent operators.",
      "Our work is strictly grounded in technical engineering rigour, commercial asset optimization, and a commitment to secure, responsible data practices within the energy sector.",
    ],
  },
  {
    number: "02",
    title: "Data Privacy and Handling",
    content: [
      "We treat operational wellhead metrics, SCADA data, and reservoir logs shared with us as a critical professional responsibility. Any production or corporate data provided to OmahTech during an engagement is used solely to deliver the agreed analytical service. We do not sell, leak, share, or repurpose operator datasets without explicit written authorization.",
      "We strictly comply with the Nigeria Data Protection Act (NDPA) and apply equivalent technical safeguards across all operational jurisdictions. Information collected via our portal forms is used exclusively to process technical inquiries and is not stored beyond the period required to fulfill that purpose.",
    ],
  },
  {
    number: "03",
    title: "Confidentiality",
    content: [
      "Client data pipelines, infrastructure details, asset performance metrics, and general business contexts shared with OmahTech are strictly confidential. We do not discuss, publish, or reference client asset metrics publicly without prior formal consent.",
      "Where specific performance outcomes or case studies are integrated into our professional portfolio, we secure explicit, written approval from the operator before deployment.",
    ],
  },
  {
    number: "04",
    title: "Ethical Machine Learning Practice",
    content: [
      "We engineer machine learning models that are fit for industrial purpose, clear in their tracking parameters, and completely transparent regarding operational boundaries. We do not design tools meant to obfuscate asset risks or deliver misleading metrics. Where a predictive view or optimization model contains structural performance limits, we communicate those boundaries clearly to your engineering leads upon delivery.",
      "We continuously audit our predictive analytics to isolate data anomalies, preventing false trend diagnostics from causing unnecessary downtime or incorrect maintenance alerts.",
    ],
  },
  {
    number: "05",
    title: "Intellectual Property",
    content: [
      "Unless otherwise finalized in writing, custom machine learning code, tailored model architecture, and project-specific technical documentation developed by OmahTech belongs entirely to the client upon full payment. These core assets are delivered to the operator to safely use, modify, and build upon internally.",
      "OmahTech retains the baseline right to utilize general, non-proprietary methodologies, foundational frameworks, and mathematically standard machine learning techniques in our subsequent engineering operations.",
    ],
  },
  {
    number: "06",
    title: "Delivery and Technical Support",
    content: [
      "We are committed to delivering production intelligence that satisfies the exact project scope, asset safety metrics, and timeline agreed upon. If structural configuration changes or data delivery delays occur, we communicate proactively and collaborate directly with the operator's technical leads.",
      "For post-delivery integration inquiries, pipeline anomalies, or follow-up engineering support, clients can reach our desk at admin@omahtech.co. We aim to respond to all technical requests within two business days.",
    ],
  },
  {
    number: "07",
    title: "Industrial Disclaimer",
    content: [
      "Machine learning models generate trend diagnostics based on historic and real-time field data patterns. While we train and validate our predictive pipelines with high precision, no statistical model is entirely infallible. All automated outputs must be utilized as asset decision-support tools rather than final engineering authorities. Operators maintain final responsibility for executing human oversight and engineering judgment before taking high-stakes actions in regulated field environments.",
      "By partnering with OmahTech for any technical or deployment service, you acknowledge the probabilistic nature of applied machine learning and agree to utilize our engineering outputs responsibly.",
    ],
  },
  {
    number: "08",
    title: "Updates to This Policy",
    content: [
      "This policy represents OmahTech's absolute operational framework and client commitments. As the technical and regulatory landscape governing energy data in Nigeria changes, we will update this system infrastructure accordingly. Material changes will be actively updated and communicated to current operators.",
    ],
  },
];

const CompanyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased selection:bg-green-500/30 selection:text-white">
      
      {/* Header Panel */}
      <div className="border-b border-gray-950 py-20 px-6 relative bg-gradient-to-b from-[#020202] to-black">
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono font-bold text-green-400 uppercase tracking-widest mb-4">
            00 / Regulatory Protocol
          </p>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Company Policy
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
            OmahTech's explicit structural commitments to our operators, technical partners, and the production environments we optimize.
          </p>
          <p className="text-gray-600 text-xs font-mono uppercase tracking-wider mt-6">
            Last Updated: July 2026
          </p>
        </div>
      </div>

      {/* Main Structural Policy Sections */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section) => (
          <div key={section.number} className="flex flex-col md:flex-row gap-4 md:gap-10 border-t border-gray-950 pt-8 first:border-0 first:pt-0">
            <div className="w-12 shrink-0">
              <span className="font-mono text-xs font-bold text-blue-500/40 tracking-wider">
                {section.number}
              </span>
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-mono uppercase tracking-wider text-white font-bold mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-400 text-xs md:text-sm leading-relaxed tracking-tight">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Interface Control */}
      <div className="border-t border-gray-950 py-16 px-6 bg-gradient-to-t from-[#020202] to-black">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-gray-500 text-xs font-mono">
            Policy inquiries:{" "}
            <a
              href="mailto:admin@omahtech.co"
              className="text-green-400 hover:text-green-300 transition underline decoration-green-500/30 underline-offset-4"
            >
              admin@omahtech.co
            </a>
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-xs font-mono text-gray-400 hover:text-white border border-gray-900 hover:border-white/20 bg-[#030303] px-4 py-2.5 rounded-lg transition tracking-wider uppercase group"
          >
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Return to Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicy;