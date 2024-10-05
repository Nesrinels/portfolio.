import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import azro from './Projects/azro.png';
import AzroAdmin from './Projects/AzroAdmin.png';
import crustcravings from './Projects/CrustCravings.png';
import todolist from './Projects/todolist.png';

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen bg-[#1A0B2E] p-8">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-16">Projects</h1>
      
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Project 1 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="relative z-10 max-w-xl md:-mr-24 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">Project 1</h2>
            <h3 className="text-xl text-purple-400 mb-4">delivery website</h3>
            
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
              <p className="text-white/80 mb-4">
                AzroExpress is a logistics management platform that helps users track 
                shipments and explore service options. Built with pure HTML and CSS, it 
                delivers a clean, user-friendly interface for managing orders and delivery services.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">HTML</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">CSS</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={azro}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a 
              href="https://github.com/Nesrinels/Azro-Express.git" 
              className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Project 2 - reversed layout */}
        <div className="relative flex flex-col md:flex-row-reverse items-center">
          <div className="relative z-10 max-w-xl md:-ml-24 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2 text-right">Project 2</h2>
          <h3 className="text-xl text-purple-400 mb-4 text-right">Admin dashboard</h3>
            
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
              <p className="text-white/80 mb-4">
              A responsive front-end admin dashboard using only pure HTML and CSS.
              The dashboard includes detailed order tracking, stock management, and client entry forms
              with a user-friendly interface to enhance efficiency in managing stock entries, exits, and deliveries.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">HTML</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">CSS</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={AzroAdmin}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a 
              href="https://github.com/Nesrinels/Azro-admin.git" 
              className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="relative z-10 max-w-xl md:-mr-24 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-2">Project 3</h2>
            <h3 className="text-xl text-purple-400 mb-4">Crust and Cravings</h3>
            
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
              <p className="text-white/80 mb-4">
                AzroExpress is a logistics management platform that helps users track 
                shipments and explore service options. Built with pure HTML and CSS, it 
                delivers a clean, user-friendly interface for managing orders and delivery services.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">HTML</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">CSS</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">Bootstrap</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={crustcravings}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a 
              href="https://github.com/Nesrinels/pizza-website.git" 
              className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        {/* Project 4 - reversed layout */}
        <div className="relative flex flex-col md:flex-row-reverse items-center">
          <div className="relative z-10 max-w-xl md:-ml-24 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2 text-right">Project 4</h2>
          <h3 className="text-xl text-purple-400 mb-4 text-right">To do list</h3>
            
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-xl">
              <p className="text-white/80 mb-4">
              This minimalist to-do list app, built with JavaScript, allows users to easily add and delete tasks.
              The design is simple yet functional, featuring a clean interface where you can input your daily tasks
              and remove them as they are completed.
              </p>
              <div className="flex gap-2">
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">HTML</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">CSS</span>
                <span className="px-4 py-1 bg-purple-700/50 rounded-full text-white text-sm">JAVASCRIPT</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={todolist}
                  alt="Project preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <a 
              href="https://github.com/Nesrinels/todo-list.git" 
              className="absolute top-0 right-0 -mt-2 -mr-2 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}