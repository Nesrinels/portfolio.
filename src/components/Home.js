import React from 'react';
import image from './image.png';
import Skills from './Skills.js';
import Projects from './Projects.js';
function Home() {
  return (
    <div className="bg-[#1A0B2E] min-h-screen text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm text-purple-400">
              Hello! I am <span className="font-semibold">Nesrine Lounissi</span>
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              A Fullstack Developer
              <br />
              <span className="text-purple-500">JS</span>
            </h1>
            <p className="text-gray-400 mt-6">
            A full stack web developer specializing in building responsive and scalable web applications.
             I create seamless user experiences while ensuring robust and maintainable code.
            </p>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-96 h-96">
              {/* Background glow effect */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-purple-900/30 rounded-full blur-3xl"></div>
              </div>
              <img 
                src={image} 
                alt="Developer avatar" 
                className="absolute inset-0 z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <Skills />
      <Projects />
      


    </div>
    
  );
}

export default Home;