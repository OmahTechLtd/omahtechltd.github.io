function Services() {
  return (
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
  );
}

export default Services;