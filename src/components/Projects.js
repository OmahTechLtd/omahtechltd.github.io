export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Simulation AI Model</h3>
          <p className="text-gray-600">An AI model trained on simulation data for testing intelligent solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-gray-600">Stay tuned for more groundbreaking projects from Omah Tech.</p>
        </div>
      </div>
    </section>
  );
}