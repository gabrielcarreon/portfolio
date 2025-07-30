import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "ReactJS",
        "jQuery",
        "Zustand",
        "TypeScript & JavaScript",
        "Tailwind CSS",
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Python & Django",
        "PHP & Laravel",
        "REST API",
        {
          name: "Database",
          subSkills: ["MSSQL", "PostgreSQL", "MYSQL", "MariaDB", "Redis", "Firestore"]
        },
        "RBAC (Role-based Access Control)",
        "Microservices Architecture",
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "BASH & Powershell",
        "Git & GitHub",
        "Docker",
        {
          name: "AWS",
          subSkills: ["EC2", "S3", "Lightsail", "Route 53"]
        },
        "Vite"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Professional Cybersecurity Certificate",
      issuer: "Google",
      date: "2024",
      status: "Active"
    },
    {
      name: "Database Administration Fundamentals",
      issuer: "Microsoft",
      date: "2020",
      status: "Active"
    },
    {
      name: "Java Level 1",
      issuer: "CCA",
      date: "2022",
      status: "Active"
    },
  ];

  const renderSkill = (skill: any, index: number) => {
    if (typeof skill === 'string') {
      return (
        <div
          key={index}
          className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-all duration-200"
        >
          <span className="text-slate-700 font-medium text-center">{skill}</span>
        </div>
      );
    } else {
      return (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-all duration-200">
            <span className="text-slate-700 font-medium text-center">{skill.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 ml-4">
            {skill.subSkills.map((subSkill: string, subIndex: number) => (
              <div
                key={subIndex}
                className="flex items-center justify-center p-2 bg-blue-25 rounded-md border border-blue-100 text-sm"
              >
                <span className="text-blue-700 font-medium">{subSkill}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I work with modern technologies and tools to build scalable, 
            efficient applications that meet business requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => renderSkill(skill, skillIndex))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">{cert.name}</h4>
                    <p className="text-slate-600 text-sm mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">{cert.date}</span>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-green-600 text-sm font-medium">{cert.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;