import React from 'react';
import logo from '../LOGO (2).png'
import reactIcon from './Skills/icons8-react-a-javascript-library-for-building-user-interfaces-24.png';
import nodeIcon from './Skills/icons8-node-js-48.png';
import jsIcon from './Skills/icons8-javascript-48 (1).png';
import mongoIcon from './Skills/icons8-mongo-db-48.png';
import tailwindIcon from './Skills/icons8-tailwind-css-48.png';
import htmlIcon from './Skills/icons8-html-5-48.png';
import bootstrapIcon from './Skills/icons8-bootstrap-48.png';
import cssIcon from './Skills/icons8-css-48 (1).png';
import githubicon from './Skills/icons8-github-30.png';

function Skills() {
  return (
    <div id="skills" className="relative bg-[#1A0B2E] text-white py-20">
      {/* Purple glow background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here are my
            <span className="text-purple-500"> skills</span> 
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            improving new skills everyday
          </p>

          {/* Top row of tech icons */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {[reactIcon, nodeIcon, jsIcon , mongoIcon, tailwindIcon].map((icon, index) => (
              <div key={index} className="bg-[#2A1B3D] p-3 rounded-full">
                <img src={icon} alt={`Tech ${index + 1}`} className="w-8 h-8" />
              </div>
            ))}
          </div>

          {/* Bottom row of tech icons */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[htmlIcon, bootstrapIcon, cssIcon, githubicon].map((icon, index) => (
              <div key={index} className="bg-[#2A1B3D] p-3 rounded-full">
                <img src={icon} alt={`Design Tool ${index + 1}`} className="w-8 h-8" />
              </div>
            ))}
          </div>

          {/* Central logo with glow */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-purple-600/50 rounded-full blur-3xl"></div>
            <div className="relative z-10 bg-[#2A1B3D] p-6 rounded-full w-full h-full flex items-center justify-center">
              <img src={logo} alt="Your Logo" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;