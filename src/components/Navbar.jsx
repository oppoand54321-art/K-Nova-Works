import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080808]/80 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/knovaworks-logo.png"
            alt="KNova.Work"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link
            to="/"
            className="hover:text-[#d4d96b] transition"
          >
            Home
          </Link>

          <a
            href="/#about"
            className="hover:text-[#d4d96b] transition"
          >
            About
          </a>

          <a
            href="/#services"
            className="hover:text-[#d4d96b] transition"
          >
            Services
          </a>

          {/* AI Platform */}
          <Link
            to="/ai"
            className="hover:text-[#d4d96b] transition"
          >
            AI
          </Link>

          {/* React Native */}
          <Link
            to="/react-native"
            className="hover:text-[#d4d96b] transition"
          >
            Mobile Apps
          </Link>

          <a
            href="/#projects"
            className="hover:text-[#d4d96b] transition"
          >
            Projects
          </a>

          <Link
            to="/devops"
            className="hover:text-[#d4d96b] transition"
          >
            DevOps
          </Link>

          <a
            href="/#contact"
            className="hover:text-[#d4d96b] transition"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="bg-[#d4d96b] hover:bg-[#c2c75d] text-black font-semibold px-6 py-2.5 rounded-full transition shadow-lg shadow-[#d4d96b]/10"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#222222] px-6 py-6 space-y-4">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            Home
          </Link>

          <a
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            About
          </a>

          <a
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            Services
          </a>

          {/* AI Platform */}
          <Link
            to="/ai"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            AI
          </Link>

          {/* React Native */}
          <Link
            to="/react-native"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            Mobile Apps
          </Link>

          <a
            href="/#projects"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            Projects
          </a>

          <Link
            to="/devops"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            DevOps
          </Link>

          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-[#d4d96b]"
          >
            Contact
          </a>

          <div className="pt-2">
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#d4d96b] text-black font-semibold py-2.5 rounded-full"
            >
              Get Started
            </a>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;