import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Alex Chen</h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital experiences. 
              Always learning, always building.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Alex Chen
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;