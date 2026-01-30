
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'IoT Smart System',
      category: 'IoT & AI',
      description: 'A comprehensive project that integrates Internet of Things (IoT) devices with Artificial Intelligence (AI) to enable smart control and monitoring of connected systems.',
      technologies: ['React.js', 'Node.js', 'Sensors', 'AI APIs'],
      image: '/src/IMG-20251021-WA0000 (1).jpg'
    },
    {
      title: 'Web Info Maintenance',
      category: 'Web Development',
      description: 'A professional platform maintenance project focusing on UI optimization and frontend performance enhancement for a local Ugandan tech company.',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
      image: '/src/web dev.jpg'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  </div>
                  <button className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-lg shadow-indigo-600/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
