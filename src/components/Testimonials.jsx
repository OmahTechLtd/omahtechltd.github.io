import React from "react";

const testimonials = [
  {
    name: "David Kalu",
    role: "Researcher",
    organization: "University of Port Harcourt",
    quote:
      "I had research ideas and needed a competent ML expert to handle the technical side. OmahTech delivered. The project scored 80/100 and was accepted for presentation at an energy conference. Top notch professionalism and quality outputs throughout.",
    result: "Project accepted for energy conference",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4">

      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        A Word From a Client
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
        Real feedback from people we have worked with.
      </p>

      <div className="max-w-3xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] border border-gray-800 rounded-xl p-8"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "{t.quote}"
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.role}, {t.organization}</p>
              </div>
              <span className="text-xs font-semibold text-green-400 uppercase tracking-widest bg-green-400/10 px-3 py-1 rounded-full">
                {t.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;