import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code, description: 'Building responsive and interactive user interfaces with modern frameworks' },
  { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and visually appealing user experiences' },
  { name: 'Web Performance', icon: Globe, description: 'Optimizing applications for speed and efficiency' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Profile"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm John Doe</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate web developer with 5 years of experience in creating modern web applications.
              I specialize in React, TypeScript, and building beautiful user interfaces that provide exceptional user experiences.
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4">
                    <skill.icon className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}