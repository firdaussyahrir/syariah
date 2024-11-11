// Nav.jsx
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Navigation Links */}
        <div className="flex space-x-6 ml-auto">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition duration-300">
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 transition duration-300">
            About Me
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition duration-300">
            Contact
          </a>
          <button className="text-gray-600 hover:text-blue-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
