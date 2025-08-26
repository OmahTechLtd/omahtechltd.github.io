import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden
  bg-gradient-to-r from-blue-700 via-green-500 via-orange-400 to-black">
  {/* Particle background component */}
  <ParticleBackground />

  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
      OmahTech — AI Solutions Built for Nigeria, Africa, and the World
    </h1>
    <p className="text-lg md:text-2xl text-gray-200 mb-8 animate-fadeIn">
      Starting with local insights, scaling intelligent solutions to solve global challenges.
    </p>
    <div className="flex justify-center gap-4">
      <a href="#services" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Explore Our Solutions
      </a>
      <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
        Join Our Community
      </a>
    </div>
  </div>
</section>
  );
}