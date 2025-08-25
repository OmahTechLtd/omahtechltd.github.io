function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Omah Tech</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
        <h2 className="text-5xl font-extrabold mb-4">Building Intelligent AI Solutions</h2>
        <p className="text-lg mb-6 max-w-xl">
          Omah Tech Ltd empowers businesses and people with next-generation machine learning and AI products.
        </p>
        <a href="#projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          View Our Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-4">About Us</h3>
        <p className="text-gray-700 leading-relaxed">
          At Omah Tech, we specialize in developing cutting-edge AI solutions that solve real-world problems.
          Our mission is to drive digital transformation by making artificial intelligence accessible, scalable, and impactful.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow rounded">
              <h4 className="text-xl font-semibold mb-2">AI Consulting</h4>
              <p className="text-gray-600">Helping businesses understand and adopt AI technologies effectively.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h4 className="text-xl font-semibold mb-2">Custom Models</h4>
              <p className="text-gray-600">Developing machine learning models tailored to your business needs.</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h4 className="text-xl font-semibold mb-2">Training</h4>
              <p className="text-gray-600">Educating teams and individuals on AI, ML, and data-driven practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-6">We’d love to hear from you! Reach us through our official email below.</p>
          <a href="mailto:info@omahtech.com" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
            omahtechltd@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © {new Date().getFullYear()} Omah Tech Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;