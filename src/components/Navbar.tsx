import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold text-blue-500">Portfolio</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-500">About</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}