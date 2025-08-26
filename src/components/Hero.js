import ParticleBackground from './ParticleBackground';
import FloatingNodes from './FloatingNodes';

export default function Hero() {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden
      bg-gradient-to-r from-blue-700 via-green-500 via-orange-400 to-black">

      <ParticleBackground />
      <FloatingNodes />

      <div className="relative z-10 max-w-4xl pb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
          AI Solutions for{' '}
          <span className="text-green-400">Nigeria</span>,{' '}
          <span className="text-orange-400">Africa</span>, and the{' '}
          <span className="text-blue-400">World</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fadeIn">
          Building intelligent AI solutions with Nigerian data, scaling to Africa, powering the world.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-gradient-to-r from-blue-500 to-orange-600 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-r from-orange-500 to-blue-800 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}