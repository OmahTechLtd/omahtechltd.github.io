export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
<h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
        Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Simulation AI Model</h3>
          <p className="text-gray-300 text-lg">An AI model trained on simulation data for testing intelligent solutions across industries.</p>
        </div>
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Coming Soon</h3>
          <p className="text-gray-300 text-lg">Stay tuned for more groundbreaking AI and ML projects from Omah.</p>
        </div>
      </div>
    </section>
  );
}