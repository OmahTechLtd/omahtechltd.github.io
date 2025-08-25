export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 to-indigo-700 text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">Omah Tech</h1>
      <p className="text-xl md:text-2xl mb-6 max-w-2xl animate-fadeIn">Empowering businesses with next-generation AI and ML solutions</p>
      <a href="#projects" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300">View Our Work</a>
    </section>
  );
}