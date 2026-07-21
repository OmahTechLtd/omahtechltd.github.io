import { FaLinkedin, FaInstagram } from "react-icons/fa";
import logoPart1 from '../assets/logo.png';
import logoPart2 from '../assets/logoname.png';
import { SiCrunchbase } from "react-icons/si";


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6 border-t border-gray-950 mt-20 relative">

      {/* Top accent visual boundary thread */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gray-900 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6">

        {/* Column 1: Logo + Tagline + Corporate Logistics */}
        <div className="space-y-4 max-w-sm">

          {/* Logo */}
          <div className="flex items-center space-x-1.5">
            <img src={logoPart1} alt="OmahTech Logo" className="h-7 w-auto object-contain" />
            <img src={logoPart2} alt="OmahTech" className="h-7 w-auto object-contain" />
          </div>

          {/* Tagline */}
          <p className="text-[11px] font-mono text-gray-500 tracking-wide leading-relaxed">
            Building operational intelligence for upstream oil and gas.
          </p>

          {/* Address */}
          <div className="space-y-1 pt-2">
            <h3 className="text-[11px] font-mono uppercase tracking-widest text-gray-500 font-bold">
              Head Office
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed tracking-tight">
              SUITE C97/420, Citiscape Shariff Mall,<br />
              Aminu Kano Crescent, Wuse 2, Abuja, Nigeria
            </p>
            <span className="text-gray-600 text-xs font-mono block">
              Phone: +234 702 567 4599
            </span>
            <a
              href="mailto:admin@omahtech.co"
              className="text-gray-600 text-xs font-mono hover:text-green-400 transition block"
            >
              admin@omahtech.co
            </a>
          </div>
        </div>

        {/* Column 2: Social Channels */}
        <div className="flex flex-col md:items-end space-y-3">
          <h3 className="text-[11px] font-mono uppercase tracking-widest text-gray-500 font-bold md:text-right">
            Connect
          </h3>
          <div className="flex gap-5 text-lg text-gray-500 justify-start md:justify-end">
            <a
              href="https://www.linkedin.com/company/omah-tech/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.crunchbase.com/organization/omah-tech-enterprises-ltd" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Crunchbase Profile"
            >
              <SiCrunchbase />
            </a>
            <a
              href="https://instagram.com/omah.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Single-Line Navigation */}
      <div className="max-w-6xl mx-auto border-t border-gray-950 mt-12 pt-6">
        <div className="flex flex-wrap items-center gap-x-12 gap-y-3 text-xs font-mono tracking-wider uppercase">
          <span className="text-[10px] text-gray-600 font-bold tracking-widest mr-2">
            Quick Links:
          </span>
          <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="/#about" className="text-gray-400 hover:text-white transition">About</a>
          <a href="/#services" className="text-gray-400 hover:text-white transition">Services</a>
          {/* <a href="/#projects" className="text-gray-400 hover:text-white transition">Projects</a> */}
          <a href="/#research" className="text-gray-400 hover:text-white transition">Research</a>
          <a href="/#contact" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
      </div>

      {/* Footer Meta System */}
      <div className="max-w-6xl mx-auto border-t border-gray-950 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-[10px] font-mono uppercase tracking-wider order-2 sm:order-1">
          © {new Date().getFullYear()} Omah Tech Enterprises Ltd. All rights reserved.
        </p>
        <div className="order-1 sm:order-2">
          <a
            href="/company-policy"
            className="text-gray-500 hover:text-green-400 transition font-mono text-[10px] uppercase tracking-wider border border-gray-900 bg-[#030303] px-3 py-1.5 rounded-md"
          >
            Company Policy
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;