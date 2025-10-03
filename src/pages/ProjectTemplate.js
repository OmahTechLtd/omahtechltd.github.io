import React from "react";

export default function ProjectTemplate({ 
  title, 
  industry, 
  problem, 
  dataset, 
  models, 
  results, 
  charts = [], 
  links = [], 
  ctaNote 
}) {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          <span className="font-semibold">{industry}</span>: {problem}
        </p>

        {/* Quick-access CTA Button */}
        {links.length > 0 && (
          <div className="mb-10">
            <a
              href={links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 px-4 py-2 rounded-md font-medium text-white text-sm inline-block"
            >
              {links[0].label}
            </a>
          </div>
        )}

        {/* Dataset */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">Dataset & EDA</h2>
          <p className="text-gray-400">{dataset}</p>
          {charts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {charts.slice(0, 3).map((chart, idx) => (
                <div key={idx}>
                  <img src={chart.src} alt={chart.title} className="rounded-lg" />
                  <p className="text-sm text-gray-400 mt-2 text-center">{chart.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Models */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-blue-400">Modeling Approach</h2>
          <ul className="list-disc list-inside text-gray-400">
            {models.map((m, idx) => (
              <li key={idx}>{m}</li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-orange-400">Results</h2>
          <p className="text-gray-400">{results}</p>
          {charts.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {charts.slice(3).map((chart, idx) => (
                <div key={idx}>
                  <img src={chart.src} alt={chart.title} className="rounded-lg" />
                  <p className="text-sm text-gray-400 mt-2 text-center">{chart.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Conclusion */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Conclusion</h2>
          <p className="text-gray-400">
            This project highlights how AI can be applied in {industry}. Future work will expand with real-world Nigerian datasets and deeper analysis.
          </p>
        </div>

        {/* CTA Section */}
        {links.length > 0 && (
          <div className="mt-10 flex flex-col items-center gap-6 text-center">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 px-8 py-3 rounded-lg font-medium text-white text-lg"
              >
                {link.label}
              </a>
            ))}
            {ctaNote && <p className="text-gray-400 text-sm">{ctaNote}</p>}
          </div>
        )}
      </div>
    </section>
  );
}