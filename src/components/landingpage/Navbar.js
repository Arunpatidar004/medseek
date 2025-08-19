import React from 'react';
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 2.5-4 2.5-4 0V9c0-2.5 4-2.5 4 0v2zm0 0c0 2.5 4 2.5 4 0V9c0-2.5-4-2.5-4 0v2zM4 13v2c0 4 8 7 8 7s8-3 8-7v-2"
          />
        </svg>
        <span className="text-xl font-bold text-purple-700">
          SecureMed<span className="text-blue-500">AI</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-4 font-medium text-gray-700">
          <Link to="/features" className="hover:text-purple-600 transition">Features</Link>
          <Link to="/doctors" className="hover:text-purple-600 transition">For Doctors</Link>
          <Link to="/patients" className="hover:text-purple-600 transition">For Patients</Link>
          <a href="#about" className="hover:text-purple-600 transition">About</a>
        </div>

        {/* Auth Buttons */}
        <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition">Sign In</button>
        <button className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;