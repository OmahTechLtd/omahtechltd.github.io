export default function Services() {
  return (
    <section id="services" className="py-16 px-4">
<h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
    Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">AI Consulting</h3>
          <p className="text-gray-300 text-lg">Helping Nigerian businesses adopt AI with solutions built on local data.</p>
        </div>
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Custom Models</h3>
          <p className="text-gray-300 text-lg">Developing ML models tailored to your business needs, leveraging African datasets.</p>
        </div>
        <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h3 className="text-xl font-semibold mb-2 text-green-700">Training</h3>
          <p className="text-gray-300 text-lg">Educating teams and individuals on AI, ML, and data-driven practices for African markets.</p>
        </div>
      </div>
    </section>
  );
}