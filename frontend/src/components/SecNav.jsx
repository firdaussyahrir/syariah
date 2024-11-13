// SecNav.jsx
import React from "react";
import { sisLogo } from "../assets";
import { Link } from "react-router-dom";

const SecNav = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/">
          <img
            src={sisLogo}
            alt="CIMB Niaga Syariah Logo"
            className="w-12 h-auto" // Sedikit perbesar logo jika diinginkan
          />
        </Link>
        <nav className="ml-12 flex space-x-8">
          {" "}
          {/* Adjust space between links */}
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/dps"
                className="text-gray-600 hover:text-blue-600 transition duration-300">
                DPS
              </Link>
            </li>
            <li>
              <Link
                to="/lrsa"
                className="text-gray-600 hover:text-blue-600 transition duration-300">
                LRSA
              </Link>
            </li>
            <li>
              <Link
                to="/regulasi"
                className="text-gray-600 hover:text-blue-600 transition duration-300">
                REGULASI
              </Link>
            </li>
            <li>
              <Link
                to="/riset"
                className="text-gray-600 hover:text-blue-600 transition duration-300">
                RISET
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SecNav;
