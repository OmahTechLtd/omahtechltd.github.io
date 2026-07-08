import { Link } from "react-router-dom";


export default function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="bg-black text-white min-h-screen py-20 px-4">
        

    {/* <div className="bg-black text-white min-h-screen py-4 px-4"> */}
      <div className="max-w-6xl mx-auto">

        {/* <div className="border-t border-gray-800 mb-14"></div> */}

        {/* <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          About OmahTech
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
From production monitoring and equipment performance to operational research and asset analysis, we build data systems aligned with real upstream operations.
        </p> */}

        <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">

            <div className="p-8 lg:p-10 flex flex-col justify-start">

              <h1 className="text-3xl font-bold text-green-400 mb-2">About OmahTech</h1>
              <p className="text-gray-300 text-lg mb-6">Omah Tech Enterprises Ltd.</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm">Upstream Oil & Gas</span>
                <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">Machine Learning</span>
                <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-sm">Applied Research</span>
               <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">AI</span>

              </div>

              <div className="space-y-5 text-gray-300 leading-8">

                <p>
                  <strong className="text-white">OmahTech</strong> is a technology company that builds <strong className="text-white">data-driven decision support systems for oil and gas operators across Africa</strong>, with offices in Lagos and Abuja. Our work sits at the intersection of petroleum engineering and machine learning, enabling us to design systems that reflect how upstream operations actually function.        
                </p>

                <p>
We support operators managing assets that require stronger technical and analytical capacity by helping them monitor production, detect anomalies early, analyze asset performance, and improve field development decisions using operational data.        
                </p>

                <p>
In addition, we collaborate with researchers requiring applied machine learning support, and individuals building practical skills in data and AI.
                </p>

                <p>
We are selective about the problems we take on. Every system we build is tied to a specific operational challenge and structured around real industry data, not generic off-the-shelf solutions.        
                </p>


              </div>

<Link to="/founder" className="text-sm text-green-400 hover:underline mb-10 inline-block">
                Read more →
              </Link>
      </div>
      </div>
      </div>
      </div>
      {/* </div> */}
    </section>
  );
}