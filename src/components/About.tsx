import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A motivated and adaptable Software Engineering student seeking opportunities to contribute technical expertise and grow within forward-thinking development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Bachelor of Software Engineering
                  </h4>
                  <p className="text-gray-600 mb-2">The Open University of Sri Lanka — Jaffna</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar size={16} />
                    <span>2021 – Present </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Coursework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Web Development',
                'OOP (Java, C#)',
                'Database Systems',
                'Data Structures',
                'Data Science',
                'Computer Security Concepts',
                'Web application development',
                'Mobile App Development',
                'Information systems and data management',
                'User experience engineering',
                'Communication and Computer Technology',
                'Embedded Systems and Internet of Things',
                'Computer Architecture and Operating Systems'


              ].map((course, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <BookOpen size={20} className="text-blue-600" />
                  <span className="font-medium text-gray-800">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Objective</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            Passionate about full-stack development, cloud platforms, and modern frameworks, with hands-on training and project experience in both front-end and back-end technologies. Always eager to learn new technologies and contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;