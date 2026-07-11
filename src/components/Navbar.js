import { useState, useEffect, useRef } from "react";
import logoPart1 from '../assets/logo.png';
import logoPart2 from '../assets/logoname.png';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef(null);
  const searchRef = useRef(null);

  const keywordMap = {
    about: { label: "About", link: "/#about" },
    services: { label: "Services", link: "/#services" },
    // projects: { label: "Projects", link: "/#projects" },
    research: { label: "Research", link: "/#research" },
    contact: { label: "Contact", link: "/#contact" },
  };

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Mutually exclusive toggle functions
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
    setSearchQuery('');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSearchOpen(false);
  };

  const filteredItems = Object.keys(keywordMap)
    .filter(key => key.toLowerCase().includes(searchQuery.toLowerCase()))
    .map(key => keywordMap[key]);

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-gray-950 fixed w-full top-0 left-0 z-50 h-14 px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center h-full">
        <Link to="/" className="flex items-center space-x-1.5 h-full">
          <img src={logoPart1} alt="OmahTech Logo" className="h-8 w-auto object-contain" />
          <img src={logoPart2} alt="OmahTech" className="h-8 w-auto object-contain" />
        </Link>
      </div>

      {/* Desktop Navigation & Actions */}
      <div className="hidden md:flex items-center space-x-6">

        {/* Search Engine Trigger */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={toggleSearch}
            className={`transition-colors p-1.5 rounded-md ${searchOpen ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 1 0-10.6-10.6 7.5 7.5 0 0 0 10.6 10.6z" />
            </svg>
          </button>

          {/* Search Popover */}
          {searchOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 p-4 rounded-xl shadow-2xl z-50">
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="w-full bg-[#050505] border border-gray-900 text-white text-xs font-mono px-3 py-2.5 rounded-lg focus:outline-none focus:border-green-500/40 transition placeholder-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <ul className="mt-3 max-h-44 overflow-auto space-y-1">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.link}
                        className="block px-3 py-2 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg cursor-pointer transition"
                        onClick={() => setSearchOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600 text-[11px] font-mono uppercase tracking-wider text-center py-2">
                    No results found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Menu Drawer Trigger */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className={`transition-colors p-1.5 rounded-md ${menuOpen ? 'text-green-400' : 'text-gray-400 hover:text-white'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menu Popover */}
          {menuOpen && (
            <ul className="absolute right-0 mt-3 w-56 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 rounded-xl shadow-2xl p-2 z-50 space-y-0.5">
              <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
              <li><a href="#about" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">About</a></li>
              <li><a href="#services" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Services</a></li>
              {/* <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Projects</a></li> */}
              <li><a href="#research" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Research</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Contact</a></li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <button onClick={toggleMenu} className="focus:outline-none text-gray-400 hover:text-white transition">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {menuOpen && (
          <ul className="absolute right-4 top-16 w-56 bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-gray-950 rounded-xl shadow-2xl p-2 z-50 flex flex-col space-y-0.5">
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Services</a></li>
            {/* <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Projects</a></li> */}
            <li><a href="#research" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Research</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2.5 text-xs font-mono tracking-wider uppercase text-gray-400 hover:text-white hover:bg-[#050505] border border-transparent hover:border-gray-900 rounded-lg transition">Contact</a></li>
          </ul>
        )}
      </div>

    </nav>
  );
}