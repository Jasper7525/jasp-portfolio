
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Intern - Web Developer',
      company: 'Web Info Ltd, Uganda',
      date: 'June – August 2024',
      description: 'Assisted in website development and maintenance. Participated in front-end design and user interface optimization. Gained hands-on experience in real-world web projects.',
      type: 'work'
    }
  ];

  const education = [
    {
      degree: 'Bachelor’s Degree in Computer Science',
      school: 'Kabale University, Uganda',
      date: '2022 – Present',
      description: 'Focusing on software engineering, data structures, and emerging technologies like IoT.',
      type: 'edu'
    },
    {
      degree: 'A-Level Certificate (UACE)',
      school: 'Gombe Secondary School',
      date: '2019 – 2020',
      description: 'Advanced level studies preparing for higher education.',
      type: 'edu'
    },
    {
      degree: 'O-Level Certificate (UCE)',
      school: 'Faiha High School',
      date: '2015 – 2018',
      description: 'Foundation secondary education.',
      type: 'edu'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Experience & Education</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Section */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-white">
              <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-sm">💼</span>
              <span>Work History</span>
            </h4>
            <div className="space-y-8 border-l-2 border-slate-800 ml-5 pl-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950"></div>
                  <div className="glass p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                    <span className="text-indigo-400 text-sm font-semibold mb-2 block">{exp.date}</span>
                    <h5 className="text-xl font-bold mb-1">{exp.role}</h5>
                    <p className="text-indigo-300 mb-4">{exp.company}</p>
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h4 className="text-2xl font-bold mb-8 flex items-center space-x-3 text-white">
              <span className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-sm">🎓</span>
              <span>Academic Background</span>
            </h4>
            <div className="space-y-8 border-l-2 border-slate-800 ml-5 pl-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950"></div>
                  <div className="glass p-6 rounded-2xl hover:bg-slate-800/50 transition-colors">
                    <span className="text-purple-400 text-sm font-semibold mb-2 block">{edu.date}</span>
                    <h5 className="text-xl font-bold mb-1">{edu.degree}</h5>
                    <p className="text-purple-300 mb-4">{edu.school}</p>
                    <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
