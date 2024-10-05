import React from 'react';
import { Github, Linkedin , FileUser } from 'lucide-react';
import resume from './resume/NesrineResume.pdf';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#13082d] text-white py-16 px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-16">Contact</h2>
        
        <p className="text-white/80 mb-6 text-lg leading-relaxed">
        I'm a junior full-stack developer passionate about building user-centered web applications that make a positive impact. 
        I'm excited to collaborate with cross-functional teams that value innovation and accessibility. 
        If you have a project in mind or are looking for someone with my skill set, let's connect!
        </p>
        
        <a 
          href="mailto:lounissi0nesrine@gmail.com" 
          className="text-purple-400 hover:text-purple-300 transition-colors mb-8 block"
        >
          lounissi0nesrine@gmail.com
        </a>
        
        <div className="flex gap-4 mt-8">
          <a 
            href="https://github.com/Nesrinels" 
            className="text-white/80 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/nesrine-lounissi-b6389b27b/" 
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Linkedin"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={resume}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Resume"
            download
          >
            <FileUser size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}