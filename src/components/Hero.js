import { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import FloatingNodes from './FloatingNodes';

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');

  const handleJoinCommunity = () => {
    setShowPopup(true);
  };

  const handleSubmit = async () => {
    // Email validation regex (simple version)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.alert('Please enter a valid email address.');
      return;
    }
    if (email) {
      try {
const response = await fetch('https://omahtechltd-github-io.onrender.com/subscribe', {          method: 'POST',
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
    <section className="min-h-[90vh] md:min-h-[70vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-black pt-24 md:pt-32">

      <ParticleBackground />
      <FloatingNodes />

      <div className="relative z-10 max-w-4xl pb-8 pt-12 md:pt-16">
       <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
  AI solutions for real-world industries
</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fadeIn">
  Starting in Africa, built for the world. We help businesses and researchers unlock practical AI that scales globally.
</p>
        
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="relative inline-block px-6 py-2 bg-black border-2 border-transparent rounded-lg text-white text-lg font-semibold shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)] hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-opacity transition-transform before:absolute before:-inset-0.5 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]">
            Explore Solutions
          </a>
          <button
            onClick={handleJoinCommunity}
            className="relative inline-block px-6 py-2 bg-black border-2 border-transparent rounded-lg text-white text-lg font-semibold shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)] hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-opacity transition-transform before:absolute before:-inset-0.5 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]"
          >
            Join Community
          </button>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-95 flex justify-center items-center z-50"
          onClick={handleCancel}
        >
          <div
            className="bg-gray-800 p-6 rounded-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-white text-xl mb-4">Join the Community</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}