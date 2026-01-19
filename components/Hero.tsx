
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
      <div className="mb-6 inline-flex items-center space-x-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-400 text-sm font-medium animate-bounce">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span>Open for Opportunities</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
        Building the Future with <br />
        <span className="gradient-text">IoT & Intelligence</span>
      </h1>

      <p className="max-w-2xl text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
        I'm Tugume Jasper, a Computer Science student and software developer passionate about creating innovative solutions at the intersection of web, IoT, and AI.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-indigo-600/30 transition-all transform hover:scale-105"
        >
          View Projects
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl text-lg font-bold border border-slate-700 transition-all transform hover:scale-105"
        >
          Let's Talk
        </button>
      </div>

      <div className="mt-20 flex items-center space-x-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <span className="text-2xl font-bold">React</span>
        <span className="text-2xl font-bold">Node.js</span>
        <span className="text-2xl font-bold">IoT</span>
        <span className="text-2xl font-bold">Python</span>
        <span className="text-2xl font-bold">AI</span>
      </div>
    </section>
  );
};

export default Hero;
