import { Link } from "react-router-dom";
// import founderImage from "../assets/founder.jpg";
import { FaLinkedin, FaResearchgate, FaOrcid, FaBookOpen, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";


export default function FounderPage() {
  return (
    <div>
    <div className="bg-black text-white min-h-screen py-20 px-4">
        <Link to="/" className="text-sm text-green-400 hover:underline mb-10 inline-block">
          ← Back to Home
        </Link>

    <div className="bg-black text-white min-h-screen py-4 px-4">
      <div className="max-w-6xl mx-auto">

        {/* <div className="border-t border-gray-800 mb-14"></div> */}

        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          About OmahTech
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
From production monitoring and equipment performance to operational research and asset analysis, we build data systems aligned with real upstream operations.
        </p>

        <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">

            <div className="p-8 lg:p-10 flex flex-col justify-start">

              <h1 className="text-3xl font-bold text-green-400 mb-2">Omah Tech Enterprises Ltd.</h1>
              <p className="text-gray-300 text-lg mb-6">Helping oil and gas operators unlock more value from their assets using data and AI
</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm">Upstream Oil & Gas</span>
                <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">Machine Learning</span>
                <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-sm">Applied Research</span>
              </div>

              <div className="space-y-5 text-gray-300 leading-8">

                <p>
                  <strong className="text-white">OmahTech</strong> is a technology company thst builds <strong className="text-white">data-driven decision support systems for oil and gas operators across Africa</strong>, with offices in Lagos and Abuja. Our work sits at the intersection of petroleum engineering and machine learning, enabling us to design systems that reflect how upstream operations actually function.        
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

              <div className="flex gap-5 mt-10 text-2xl text-white">
                <a href="https://www.linkedin.com/company/omah-tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                            <FaLinkedin />
                          </a>
                          <a href="https://x.com/OmahTechLtd" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                            <FaTwitter />
                          </a>
                          <a href="https://instagram.com/omah.tech" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                            <FaInstagram />
                          </a>
                          <a href="mailto:admin@omahtech.co" className="hover:text-green-400 transition">
                            <FaEnvelope />
                          </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
    
    <div className="bg-black text-white min-h-screen py-4 px-4">
      <div className="max-w-6xl mx-auto">

        {/* <div className="border-t border-gray-800 mb-14"></div> */}

        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          Meet the Founder
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          The engineering, machine learning, and research expertise behind Omah Tech's AI-powered data systems.
        </p>

        <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          {/* <div className="grid lg:grid-cols-2"> */}

            {/* <div className="flex justify-center items-start p-8">
              <img
                src={founderImage}
                alt="Vera I. Ezeagu"
                className="rounded-xl object-cover max-h-[620px] w-10%"
              />
            </div> */}

            <div className="p-8 lg:p-10 flex flex-col justify-start">

              <h1 className="text-3xl font-bold text-green-400 mb-2">Vera I. Ezeagu</h1>
              <p className="text-gray-300 text-lg mb-6">Founder & CEO, Omah Tech Enterprises Ltd.</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm">Machine Learning Engineer</span>
                <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">Petroleum Engineer</span>
                <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-sm">Researcher</span>
              </div>

              <div className="space-y-5 text-gray-300 leading-8">

                <p>
                  <strong className="text-white">Vera I. Ezeagu</strong> is the Founder and CEO of <strong className="text-white">OmahTech Enterprises Ltd.</strong>, a company developing AI-powered data systems for Nigeria's upstream oil and gas industry. She combines expertise in petroleum engineering, machine learning, and software engineering to build practical tools that help operators make faster, data-driven decisions.
                </p>

                <p>
                  Her research focuses on applying machine learning to production forecasting, anomaly detection, and data collaboration within Nigeria's upstream sector. She has co-authored peer-reviewed papers presented at SPE NAICE, and her work is available through SPE OnePetro, Zenodo, and ResearchGate.
                </p>

                <p>
                  Vera holds an <strong className="text-white">MSc in Petroleum Engineering</strong> from the African University of Science and Technology (AUST), Abuja, and a <strong className="text-white">BEng in Petroleum Engineering</strong> from Afe Babalola University, Ado-Ekiti. She further developed her machine learning expertise through Semicolon Africa's Techpreneurship Programme.
                </p>

                <p>
                  Alongside her work in petroleum engineering and machine learning, Vera has worked as a software engineer, designing and building web applications before founding OmahTech.
                </p>

                <p>
                  She also completed an engineering internship at <strong className="text-white">Indorama Eleme Petrochemicals Limited (IEPL)</strong> in Port Harcourt, formerly Eleme Petrochemicals Company Limited (EPCL), a wholly owned subsidiary of the Nigerian National Petroleum Corporation (NNPC) before its privatization. The experience provided practical exposure to large-scale industrial operations within Nigeria's energy sector.
                </p>

              </div>

              <div className="flex gap-5 mt-10 text-2xl text-white">
                <a href="https://www.linkedin.com/in/YOURPROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <FaLinkedin />
                </a>
                <a href="https://www.researchgate.net/profile/YOURPROFILE" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <FaResearchgate />
                </a>
                <a href="https://orcid.org/YOURORCID" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <FaOrcid />
                </a>
                <a href="https://onepetro.org" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                  <FaBookOpen />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
     </div>
    // </div>
  );
}