import React from 'react';
import { ExternalLink, Github, Database, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive web-based system to manage student records and grades with user authentication and responsive UI.',
      technologies: ['ASP.NET MVC', 'SQLite', 'C#', 'Windows Forms'],
      features: [
        'User authentication and authorization',
        'CRUD operations for student records',
        'Exam management',
        'Time Table management',
        'Responsive design',
        'Role-based access control'
      ],
      icon: <Database size={32} className="text-blue-600" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Basic Banking Application',
      description: 'A comprehensive console based system to manage banking operations with user authentication, Deposit, Withdrawal.',
      technologies: ['Python', 'File Handling'],
      features: [
        'User authentication and authorization',
        'CRUD operations for banking records',
        'Transaction management',
        'Account balance inquiry',
        'Console-based UI',
        'Role-based access control'
      ],
      icon: <Database size={32} className="text-blue-600" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Designed and deployed a personal portfolio site to showcase projects and skills with integrated contact functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'EmailJS', 'GitHub Pages'],
      features: [
        'Responsive design',
        'Interactive contact form',
        'Project showcase',
        'GitHub Pages deployment',
        'SEO optimized'
      ],
      icon: <Globe size={32} className="text-teal-600" />,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Car Rental System',
      description: 'A web-based application to manage car rentals, including user authentication, car listings, and booking management.',
      technologies: ['ASP.NET MVC','Razor Pages', 'JavaScript', 'CSS', 'Entity Framework', 'SQL Server', 'Bootstrap'],
      features: [
        'Responsive design',
        'User authentication and authorization',
        'Car listings with search and filter',
        'Booking management',
        'Admin dashboard for car management',
        'User reviews and ratings',
        'Car listings'
      ],
      icon: <Globe size={32} className="text-teal-600" />,
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      title: 'To-Do App (React)',
      description: 'A task management application built with React showcasing modern frontend development practices and state management.',
      technologies: ['React', 'JavaScript', 'LocalStorage', 'CSS3', 'React Hooks'],
      features: [
        'Task creation and deletion',
        'Mark tasks as complete',
        'Local storage persistence',
        'Clean and intuitive UI',
        'React Hooks implementation'
      ],
      icon: <Smartphone size={32} className="text-orange-600" />,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A showcase of my technical skills and problem-solving abilities</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="lg:flex">
                <div className="lg:w-1/3 p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg text-white`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3 p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <Github size={18} />
                      View Code
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Additional Experience</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">VPS Management</h4>
                <p className="text-sm text-blue-100">Created and configured VPS environments for personal use and hosting applications</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Technical Support</h4>
                <p className="text-sm text-blue-100">Assisted friends and peers in solving software installation and hardware issues</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Open Source</h4>
                <p className="text-sm text-blue-100">Regular contributor to open-source repositories and technical forums</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;