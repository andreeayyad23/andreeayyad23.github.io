import React from 'react';

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
  { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Agile"] }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <div className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}