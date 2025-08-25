function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold mb-8">Our Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow rounded">
          <h4 className="text-xl font-semibold mb-2">Simulation AI Model</h4>
          <p className="text-gray-600">An AI model trained on simulation data for testing intelligent solutions.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h4 className="text-xl font-semibold mb-2">Coming Soon</h4>
          <p className="text-gray-600">Stay tuned for more groundbreaking projects from Omah Tech.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;