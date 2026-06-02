export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          About OmahTech</h2>
        <p className="text-gray-300 text-lg mt-6">
          We are an AI and data company with offices in Lagos and Abuja. Our work sits at the intersection of petroleum engineering and machine learning, which means the systems we build are grounded in how operations actually run, not just how data looks on paper.
        </p>
        <p className="text-gray-300 text-lg mt-6">
          We work primarily with oil and gas operators, particularly those managing assets that require technical capacity they are still building. We help them monitor production, detect anomalies early, analyse asset performance, and make development decisions backed by data.
        </p>
        <p className="text-gray-300 text-lg mt-6">
          We also work with researchers who need technical ML support to bring their projects to life, and individuals who want to build real, applied AI skills.
        </p>
        <p className="text-gray-300 text-lg mt-6">
          We are intentional about the projects we take on. Every piece of work is built around a specific operational problem and a specific dataset, not off-the-shelf tools applied generically.
        </p>
      </div>
    </section>
  );
}