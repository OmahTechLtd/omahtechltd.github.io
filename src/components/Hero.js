function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
      <h2 className="text-5xl font-extrabold mb-4">Building Intelligent AI Solutions</h2>
      <p className="text-lg mb-6 max-w-xl">
        Omah Tech Ltd empowers businesses and people with next-generation machine learning and AI products.
      </p>
      <a href="#projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
        View Our Work
      </a>
    </section>
  );
}

export default Hero;