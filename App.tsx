
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-800 bg-slate-950/50 backdrop-blur-md">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Tugume Jasper. Built with Passion, React & Gemini.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="mailto:tugumejasper30@gmail.com" className="text-slate-500 hover:text-indigo-400 transition-colors">Email</a>
            <a href="tel:+256743688205" className="text-slate-500 hover:text-indigo-400 transition-colors">Call Me</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Button */}
      <ChatAssistant />
    </div>
  );
};

export default App;
