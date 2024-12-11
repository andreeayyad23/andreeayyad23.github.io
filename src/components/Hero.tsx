import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" className="transform hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:contact@example.com" className="transform hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
}