export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="bg-gradient-to-r from-black via-[#111111] to-[#222222] bg-opacity-80 p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent">
          About OmahTech</h2>
        <p className="text-gray-300 text-lg mt-6">
We build data-driven decision support systems for oil and gas operators across Africa, with offices in Lagos and Abuja. Our work sits at the intersection of petroleum engineering and machine learning, enabling us to design systems that reflect how upstream operations actually function.        
       </p>
        <p className="text-gray-300 text-lg mt-6">
We support operators managing assets that require stronger technical and analytical capacity by helping them monitor production, detect anomalies early, analyze asset performance, and improve field development decisions using operational data.        </p>
        <p className="text-gray-300 text-lg mt-6">
In addition, we collaborate with researchers requiring applied machine learning support, and individuals building practical skills in data and AI.

We are selective about the problems we take on. Every system we build is tied to a specific operational challenge and structured around real industry data, not generic off-the-shelf solutions.        </p>
      </div>
    </section>
  );
}