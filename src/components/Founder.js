import { Link } from "react-router-dom";
import founderImage from "../assets/founder.jpg";
import { FaLinkedin, FaResearchgate, FaOrcid, FaBookOpen } from "react-icons/fa";

export default function Founder() {
  return (
    <section id="founder" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="border-t border-gray-800 mb-14"></div>

        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-500 bg-clip-text text-transparent text-center">
          Meet the Founder
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          The engineering, machine learning, and research expertise behind OmahTech's AI-powered data systems.
        </p>

        <div className="bg-gradient-to-r from-black via-[#111111] to-[#1a1a1a] rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">

            <div className="flex justify-center items-start p-8">
              <img
                src={founderImage}
                alt="Vera I. Ezeagu"
                className="rounded-xl object-cover max-h-[420px] w-full"
              />
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">

              <h3 className="text-3xl font-bold text-green-400 mb-2">Vera I. Ezeagu</h3>
              <p className="text-gray-300 text-lg mb-6">Founder & CEO, OmahTech Enterprises Ltd.</p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-sm">Machine Learning Engineer</span>
                <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">Petroleum Engineer</span>
                <span className="px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-sm">Researcher</span>
              </div>

              <p className="text-gray-300 leading-8 mb-6">
                <strong className="text-white">Vera I. Ezeagu</strong> is the Founder and CEO of <strong className="text-white">OmahTech Enterprises Ltd.</strong>, a company developing AI-powered data systems for Nigeria's upstream oil and gas industry. She combines expertise in petroleum engineering, machine learning, and software engineering to build practical tools that help operators make faster, data-driven decisions.
              </p>

              <Link to="/founder" className="text-sm text-green-400 hover:underline mb-10 inline-block">
                Read more →
              </Link>

              <div className="flex gap-5 text-2xl text-white">
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
    </section>
  );
}