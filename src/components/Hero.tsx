import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo Section */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/sasikaran-photo.jpg"
                  alt="Sasikaran - Software Engineering Student"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "https://github.com/SasikaranMSK/Portfolio/blob/main/sasikaran-photo.JPG";
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-600 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-blue-600">Sasikaran Kumaraiya </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-3xl leading-relaxed">
                Software Engineering student passionate about 
                <span className="text-teal-600 font-semibold"> full-stack development</span>, 
                <span className="text-orange-600 font-semibold"> cloud platforms</span>, and 
                <span className="text-blue-600 font-semibold"> modern frameworks</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                <span>Maviddapuram, Jaffna, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-teal-600" />
                <span>sasikarankumaraiya@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-orange-600" />
                <span>+94754167496</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                View My Work
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/SasikaranMSK"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-gray-50"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/sasi-karan-k"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-blue-50"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="mailto:sasikarankumaraiya@gmail.com"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:bg-teal-50"
              >
                <Mail size={24} className="text-teal-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
