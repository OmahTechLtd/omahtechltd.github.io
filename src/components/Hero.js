import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import FloatingNodes from './FloatingNodes';

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.alert('Please enter a valid email address.');
      return;
    }
    if (email) {
      try {
        const response = await fetch('https://omahtechltd-github-io.onrender.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          window.alert('Thank you for joining the community!');
        } else {
          window.alert('Failed to subscribe. Please try again later.');
        }
      } catch (error) {
        window.alert('An error occurred. Please try again later.');
      }
    }
    setShowPopup(false);
    setEmail('');
  };

  const handleCancel = () => {
    setShowPopup(false);
    setEmail('');
  };

  return (
    <section className="min-h-[95vh] md:min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-black pt-28 md:pt-36">
      
      {/* Background Engineering Canvas Layers */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70"></div>
      <ParticleBackground />
      <FloatingNodes />

      <div className="relative z-10 max-w-4xl mx-auto pb-12 flex flex-col items-center">
        
        {/* Industry Focus Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a0a0a] border border-gray-800 text-xs text-gray-400 font-mono tracking-wider uppercase mb-8 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Upstream Operational Intelligence
        </div>

        {/* Crisp Enterprise Header */}
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6 max-w-3xl">
          The intelligence layer for upstream asset performance.
        </h1>

        {/* High-Authority Copy */}
        <p className="text-base md:text-xl text-gray-400 max-w-2xl font-normal leading-relaxed mb-10">
          From high-frequency production monitoring to brownfield optimization, we build production-grade data systems engineered specifically for the operational realities of Nigerian upstream assets.
        </p>
        
        {/* Sleek, Institutional CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex justify-center items-center px-7 py-3.5 bg-green-500 hover:bg-green-600 text-black text-sm font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/10 active:scale-[0.98]"
          >
            Get Started
          </a>
          <a
            href="#research"
            className="w-full sm:w-auto inline-flex justify-center items-center px-7 py-3.5 bg-[#0a0a0a] border border-gray-800 hover:border-gray-700 text-gray-300 text-sm font-semibold rounded-xl transition-all duration-300 active:scale-[0.98]"
          >
            View Our Research
          </a>
        </div>
      </div>

      {/* Subscription Modal Box */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleCancel}
        >
          <div
            className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white text-xl font-bold tracking-tight mb-2">Access the Intelligence Network</h2>
            <p className="text-gray-400 text-xs mb-6">Receive proprietary insights and production analytics updates directly from our engineering team.</p>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operator@company.com"
              className="w-full mb-5 px-4 py-3 rounded-xl bg-black text-white border border-gray-800 focus:border-green-500 focus:outline-none text-sm transition font-mono"
            />
            
            <div className="flex justify-end gap-3 text-xs font-semibold">
              <button
                onClick={handleCancel}
                className="px-4 py-2.5 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-900 transition"
              >
                Dismiss
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition"
              >
                Request Authorization
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}