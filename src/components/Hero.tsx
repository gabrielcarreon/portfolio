import React from 'react';
import {ArrowDown, Download, Github, Linkedin, Mail} from 'lucide-react';
import image from "../assets/new.png"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <section id="home"
             className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Gabriel Carreon
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-light">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                I create beautiful, responsive web applications with modern technologies.
                Passionate about clean code, user experience, and solving complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              {/*<button className="border border-slate-400 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2">*/}
              {/*  <Download size={20} />*/}
              {/*  Download Resume*/}
              {/*</button>*/}
            </div>

            <div className="flex space-x-6">
              <a target="_blank"
                 href="https://github.com/gabrielcarreon"
                 className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Github size={24}/>
              </a>
              <a     target="_blank"
                     href="https://www.linkedin.com/in/gabrielolivercarreon/"
                 className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Linkedin size={24}/>
              </a>
              <a target="_blank"
                 href="https://mail.google.com/mail/?view=cm&fs=1&to=gabriel.oliver.carreon@gmail.com"
                 className="text-slate-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
                <Mail size={24}/>
              </a>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute inset-0 w-72 h-72 mx-auto my-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={32}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;