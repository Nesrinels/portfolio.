import { Link } from 'react-router-dom';
import logo from '../LOGO (2).png';

export function Component() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A0B2E] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            onClick={(e) => scrollToSection(e, 'home')} 
            className="flex-shrink-0"
          >
            <img
              src={logo}
              className="h-8 w-auto"
              alt="Logo"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}