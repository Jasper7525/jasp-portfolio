
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face" 
                alt="Tugume Jasper" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-600/30 -z-10 rounded-2xl blur-xl animate-float"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-indigo-500/20 -z-10 rounded-2xl"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Designing Digital Experiences with Purpose.
            </h3>
            
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Based in Uganda and currently pursuing a Bachelor’s Degree in Computer Science at <span className="text-indigo-400 font-semibold">Kabale University</span>. I am a 24-year-old developer driven by the potential of technology to solve real-world problems.
            </p>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              My journey is defined by a curiosity for how hardware (IoT) and software (AI/Frontend) can work together to create seamless, "smart" ecosystems. I thrive in dynamic environments where I can learn and contribute to innovative projects.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-indigo-400 font-bold text-2xl mb-1">2+</h4>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-indigo-400 font-bold text-2xl mb-1">5+</h4>
                <p className="text-slate-500 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="p-3 bg-slate-800 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Email</p>
                <p className="text-sm font-medium">tugumejasper30@gmail.com</p>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Phone</p>
                <p className="text-sm font-medium">+256 743688205</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
