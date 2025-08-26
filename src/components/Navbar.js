import { useState } from "react";
import logoPart1 from '../assets/logo.png';
import logoPart2 from '../assets/logoname.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50 h-12 px-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center space-x-1 h-full">
        <img src={logoPart1} alt="Omah Logo Part 1" className="h-10 w-auto object-contain" />
        <img src={logoPart2} alt="Omah Logo Part 2" className="h-10 w-auto object-contain" />
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Search Icon */}
        <div className="relative">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="text-white hover:text-green-400 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z" />
            </svg>
          </button>

          {/* Search Card Popover */}
          {searchOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-900 p-4 rounded-lg shadow-lg z-50">
              <input 
                type="text" 
                placeholder="Search docs..." 
                className="w-full bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
              />
            </div>
          )}
        </div>

        {/* Hamburger Icon for Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white hover:text-green-400 transition flex items-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg z-50">
              <li><a href="#about" className="block px-4 py-2 hover:bg-gray-800 transition">About</a></li>
              <li><a href="#services" className="block px-4 py-2 hover:bg-gray-800 transition">Services</a></li>
              <li><a href="#projects" className="block px-4 py-2 hover:bg-gray-800 transition">Projects</a></li>
              <li><a href="#contact" className="block px-4 py-2 hover:bg-gray-800 transition">Contact</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {menuOpen && (
          <ul className="absolute right-0 top-12 w-48 bg-gray-900 rounded-lg shadow-lg z-50 flex flex-col">
            <li><a href="#about" className="block px-4 py-2 hover:bg-gray-800 transition">About</a></li>
            <li><a href="#services" className="block px-4 py-2 hover:bg-gray-800 transition">Services</a></li>
            <li><a href="#projects" className="block px-4 py-2 hover:bg-gray-800 transition">Projects</a></li>
            <li><a href="#contact" className="block px-4 py-2 hover:bg-gray-800 transition">Contact</a></li>
          </ul>
        )}
      </div>

    </nav>
  );
}