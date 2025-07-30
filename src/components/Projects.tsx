import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Ed-Tech",
      description: "An end-to-end AI-powered platform for dynamic quiz generation and automated essay evaluation, seamlessly integrated with the OpenAI API. Built using React for the frontend, Django for the backend, and PostgreSQL for robust data management.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Django", "PostgreSQL", "OpenAI", "Mantine UI", "Tailwind CSS"],
      githubLink: "#",
      featured: true
    },
    {
      title: "Adamson University",
      description: "A microservices-based Learning Management System (LMS) integrated with the Microsoft Graph API for seamless event tracking, notifications, and single sign on (SSO).",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Laravel", "Shadcn", "TailwindCSS", "MySQL", "Microsoft Graph", "Zustand", "Redis"],
      liveLink: "#",
      featured: true
    },
    {
      title: "Amlic",
      description: "A combined Inventory and HRIS with RBAC (Role-based Access Control) platform designed to efficiently monitor daily stock inflow and outflow, while managing employee data and activity in real-time.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Laravel", "Shadcn", "TailwindCSS", "MySQL"],
      liveLink: "#",
      featured: false
    },
    {
      title: "CPU Benchmark Scraper",
      description: "A CLI tool built with Puppeteer for scraping and extracting benchmark data from cpubenchmark site. It automates headless browsing to gather structured performance metrics for comparison and analysis.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Puppeteer", "Javascript"],
      githubLink: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies and optimized for performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience. 
            Each project demonstrates different aspects of modern web development.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                project.featured ? 'lg:grid lg:grid-cols-2 bg-gradient-to-r from-blue-50 to-slate-50' : 'bg-white'
              }`}
            >
              <div className={`relative overflow-hidden ${project.featured ? '' : 'h-64'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className={`p-8 ${project.featured ? 'flex flex-col justify-center' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                  <div className="flex space-x-3">
                    {Boolean(project?.liveLink) && (
                      <a
                        href={project.liveLink}
                        className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                      >
                        <ExternalLink size={20}/>
                      </a>
                    )}
                    {Boolean(project?.githubLink) && (
                      <a
                        href={project.githubLink}
                        className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                      >
                        <Github size={20}/>
                      </a>
                    )}

                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
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