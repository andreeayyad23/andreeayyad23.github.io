import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
          Creative Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up">
          Crafting beautiful and functional digital experiences with passion and precision
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-600" size={32} />
        </div>
      </div>
    </section>
  );
}