export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">AI Consulting</h3>
          <p className="text-gray-600">Helping businesses understand and adopt AI technologies effectively.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Custom Models</h3>
          <p className="text-gray-600">Developing ML models tailored to your business needs.</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold mb-2">Training</h3>
          <p className="text-gray-600">Educating teams and individuals on AI, ML, and data-driven practices.</p>
        </div>
      </div>
    </section>
  );
}