import React from 'react';
import { Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/health-tutorials', label: 'Health Tutorials' },
    { path: '/patient-portal', label: 'Patient Portal' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/about', label: 'About Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  location.pathname === path
                    ? 'text-gray-900 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-600'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              to="/ai-chat"
              className="flex items-center space-x-2 bg-black text-white px-4 sm:px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Bot className="w-4 h-4" />
              <span className="text-sm font-medium">AI Chat Bot</span>
            </Link>
            <button className="hidden md:inline-flex items-center bg-blue-600 text-white px-4 sm:px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              Launch Turbo App
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
