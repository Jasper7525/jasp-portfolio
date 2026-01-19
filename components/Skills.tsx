
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        
      ]
    },
    {
      title: 'Web & Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Node.js', level: 80 },
      ]
    },
    {
      title: 'Engineering',
      skills: [
        { name: 'IoT Systems', level: 88 },
        { name: 'AI Integration', level: 82 },
        { name: 'Database (MySQL)', level: 75 },
      ]
    },
    {
      title: 'Tools & Systems',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        
        { name: 'Windows', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Technical Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-8 text-indigo-400 border-b border-slate-800 pb-4">{category.title}</h4>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass p-10 rounded-3xl max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-white mb-2">Soft Skills & Attributes</h4>
            <p className="text-slate-400">Collaborative, Creative, Hardworking, and Analytical</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['English Proficient', 'Problem Solver', 'Team Player', 'Quick Learner'].map((attr, aIdx) => (
              <span key={aIdx} className="px-4 py-2 bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 rounded-lg font-medium">
                {attr}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
