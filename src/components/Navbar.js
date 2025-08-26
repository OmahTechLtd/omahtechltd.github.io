import { useState } from "react";
import logoPart1 from '../assets/logo.png';
import logoPart2 from '../assets/logoname.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50 h-12">
  <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
        <div className="flex items-center h-full space-x-1">
            <img src={logoPart1} alt="OmahTech Logo Part 1" className="h-12 w-auto object-contain" />
        <img src={logoPart2} alt="OmahTech Logo Part 2" className="h-12 w-auto object-contain" />
</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-4 pb-4 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}