import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Sasikaran</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Software Engineering student passionate about creating innovative solutions with modern technologies. 
            Always open to new opportunities and collaborations.
          </p>
          
          <div className="flex justify-center items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">
              © 2025 Sasikaran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;