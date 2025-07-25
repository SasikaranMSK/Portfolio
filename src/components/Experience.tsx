import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Developed responsive web applications using HTML, CSS, JavaScript and Razor Pages with ASP.NET MVC',
    'Collaborated in a team to build, test, and deploy applications with Agile methodology',
    'Assisted in back-end logic using Python and C#, integrated with SQL Server/MySQL',
    'Created and managed virtual private servers on AWS, Azure, Digital Ocean, Contabo',
    'Used Postman to test and debug RESTful APIs',
    'Version-controlled projects using Git and GitHub'
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">Hands-on professional experience in full-stack development</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Software Engineering Intern (Full-Stack)</h3>
                  <p className="text-blue-100 text-lg">Unicom TIC, Jaffna</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 text-blue-100">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>April 2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Jaffna, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Responsibilities & Achievements</h4>
              <div className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                <h5 className="font-semibold text-gray-900 mb-2">Impact & Learning</h5>
                <p className="text-gray-700">
                  Gained valuable experience in enterprise-level development, working with modern technologies and methodologies. 
                  Enhanced skills in cloud infrastructure management and API development while contributing to real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;