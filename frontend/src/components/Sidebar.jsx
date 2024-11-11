// Sidebar.jsx
import React from "react";
import logo from "../assets/CIMB Niaga Syariah Logo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 shadow-sm fixed top-0 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-20">
      <div className="p-6 font-semibold text-blue-600 text-xl flex justify-center">
        <Link to="/">
          <img
            src={logo}
            alt="CIMB Niaga Syariah Logo"
            className="w-40 h-auto"
          />
        </Link>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li>
            <Link
              to="/profile"
              className="block py-2.5 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dps"
              className="block py-2.5 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
              DPS
            </Link>
          </li>
          <li>
            <Link
              to="/lrsa"
              className="block py-2.5 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
              LRSA
            </Link>
          </li>
          <li>
            <Link
              to="/regulasi"
              className="block py-2.5 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition duration-300">
              Regulasi
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
