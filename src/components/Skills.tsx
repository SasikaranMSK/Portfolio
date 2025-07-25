import React from 'react';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C#', level: 70},
        { name: 'Java', level: 70 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'C', level: 70 }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Wrench size={24} />,
      skills: [
        { name: 'ASP.NET MVC', level: 85 },
        { name: 'Razor Pages', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Android Studio', level: 70 }
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'Oracle', level: 70 }
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud & Tools',
      icon: <Cloud size={24} />,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 }
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Proficiency in modern technologies and frameworks</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Technical Expertise</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• REST API Development & Testing</li>
                <li>• VPS Setup & Management</li>
                <li>• PC Hardware/Software Troubleshooting</li>
                <li>• Version Control with Git</li>
                <li>• Agile Development Methodology</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-teal-300">Certifications</h4>
              
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {[
    { title: "Mobile Phone Repairing", org: "International Tech Academy" },
    { title: "Cost of Software Quality", org: "Edapp" },
    { title: "Data Science Foundation", org: "Great Learning" },
    { title: "Intro to Machine Learning", org: "Kaggle" },
    { title: "Web Element Locator Strategies", org: "Applitools" },
    { title: "Codeless Test Automation with Selenium IDE", org: "Applitools" },
    { title: "API Test Automation with Postman", org: "Applitools" },
    { title: "Python for Beginners", org: "Sololearn" },
    { title: "SQL", org: "Sololearn" },
    { title: "Java", org: "Sololearn" },
  ].map((cert, index) => (
    <div key={index} className="bg-white/10 p-3 rounded-lg">
      <p className="font-medium text-sm md:text-base">{cert.title}</p>
      <p className="text-xs text-gray-300">{cert.org}</p>
    </div>
  ))}
</div>

                
              
            </div>
          </div>
        </div>

        {/* Certificates Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Certificates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate 1 - Mobile Phone Repairing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/6062380741448287771.jpg"
                  alt="Mobile Phone Repairing Certificate - International Tech Academy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Phone Repairing</h4>
                <p className="text-sm text-gray-600">International Tech Academy</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Certified</span>
                </div>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/Sasikaran Kumaraiya-2025-04-14T07_53_26.png"
                  alt="Cost of Software Quality Certificate"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cost of Software Quality</h4>
                <p className="text-sm text-gray-600">Edapp</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                </div>
              </div>
            </div>

            {/* Certificate 3  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/Sasi karan datascience.png"
                  alt="Data Science Foundation Certificate"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Data Science Foundation</h4>
                <p className="text-sm text-gray-600">Great Learning</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Certificates Gallery2*/}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate 4*/}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/K.Sasikaran - Intro to Machine Learning.png"
                  alt="Intro to Machine Learning"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Intro to Machine Learning</h4>
                <p className="text-sm text-gray-600">Kaggle</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                 
                </div>
              </div>
            </div>

            {/* Certificate 5*/}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/certificates_TAU-3d003e4d.png"
                  alt="Web Element Locator Strategies"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Web Element Locator Strategies</h4>
                <p className="text-sm text-gray-600">Applitools</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                </div>
              </div>
            </div>

            {/* Certificate 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/certificates_TAU-1495b514.png"
                  alt="Codeless Test Automation with Selenium IDE"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Codeless Test Automation with Selenium IDE</h4>
                <p className="text-sm text-gray-600">Applitools</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                  
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Certificates Gallery3 */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificat 7*/}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/certificates_TAU-65740664.png"
                  alt="API Test Automation with Postman"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">API Test Automation with Postman</h4>
                <p className="text-sm text-gray-600">Applitools</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                 
                </div>
              </div>
            </div>

            {/* Certificate 8 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/cert-24317300-1172.png"
                  alt="Python for Beginners"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Python for Beginners</h4>
                <p className="text-sm text-gray-600">Sololearn</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                </div>
              </div>
            </div>

            {/* Certificate 9 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/cert-24317300-1060.png"
                  alt="SQL Fundamentals"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">SQL</h4>
                <p className="text-sm text-gray-600">Sololearn</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                  
                </div>
              </div>
            </div>
          </div>
          

        </div>
        {/* Certificates Gallery3 */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
          {/* Certificate 10 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/certificates/cert-24317300-1068.png"
                  alt="Java Fundamentals"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop";
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Java</h4>
                <p className="text-sm text-gray-600">Sololearn</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Completed</span>
                  
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;