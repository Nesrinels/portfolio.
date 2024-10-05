import { Link } from 'react-router-dom';
import logo from '../LOGO (2).png';

export function Component() {
  return (
    <nav className="bg-[#1A0B2E] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              className="h-8 w-auto"
              alt="Logo"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}