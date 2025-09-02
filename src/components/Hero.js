import ParticleBackground from './ParticleBackground';
import FloatingNodes from './FloatingNodes';

export default function Hero() {
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
            className="relative inline-block px-6 py-2 bg-black border-2 border-transparent rounded-lg text-white text-lg font-semibold shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_10px_rgba(99,102,241,0.8),0_0_12px_rgba(34,197,94,0.8)] hover:scale-105 transition-transform before:absolute before:-inset-0.5 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]">
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="relative inline-block px-6 py-2 bg-black border-2 border-transparent rounded-lg text-white text-lg font-semibold shadow-[0_0_6px_rgba(59,130,246,0.5),0_0_8px_rgba(99,102,241,0.5),0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_10px_rgba(99,102,241,0.8),0_0_12px_rgba(34,197,94,0.8)] hover:scale-105 transition-transform before:absolute before:-inset-0.5 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-indigo-600 before:to-green-500 before:z-[-1]">
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}