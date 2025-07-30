import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Excellent communication skills and agile methodology experience"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Driven",
      description: "Focus on delivering high-quality products on time"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 3+ years of experience building web applications
            that users love. I combine technical expertise with design thinking to create 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I started my journey in web development during college, where I discovered 
                my passion for creating digital solutions. Since then, I've built everything from simple landing
                pages to complex enterprise applications.
              </p>
              <p>
                I believe in continuous learning and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me mentoring other developers, or exploring new frameworks.
              </p>
              <p>
                My goal is to join a dynamic team where I can contribute my skills while 
                continuing to grow as a developer and make a meaningful impact.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;