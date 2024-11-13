// Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-[#1736F5] border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-2">
        {/* Navigation Links */}
        <div className="flex space-x-6 ml-auto">
          <Link
            to="/"
            className="text-white hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-600 transition duration-300">
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-600 transition duration-300">
            Contact
          </Link>
          <Link
            to="Profile"
            className="text-white hover:text-blue-600 transition duration-300">
            Profile
          </Link>
          <Link
            to="Login"
            className="text-white hover:text-blue-600 transition duration-300">
            Login
          </Link>
          <button className="text-white hover:text-blue-600 transition duration-300">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
