import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing clean, maintainable, and efficient code is my passion.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Palette className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Creating beautiful and intuitive user interfaces that users love.</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Globe className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Web Solutions</h3>
              <p className="text-gray-600">Building modern web applications that solve real problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}