// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sisLogo } from "../assets";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1736F5] to-[#1736F5] text-white py-8 mt-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-4 sm:mb-0">
            <img src={sisLogo} alt="CIMB Niaga Syariah Logo" className="h-32" />
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/" className="hover:text-[#F6F4EB]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F6F4EB]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F6F4EB]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div className="w-full sm:w-1/4 mb-4 sm:mb-0 text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-2">Menu</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link to="/dps" className="hover:text-[#F6F4EB]">
                  DPS
                </Link>
              </li>
              <li>
                <Link to="/lrsa" className="hover:text-[#F6F4EB]">
                  LRSA
                </Link>
              </li>
              <li>
                <Link to="/regulasi" className="hover:text-[#F6F4EB]">
                  Regulasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full sm:w-1/4 text-center sm:text-left">
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <ul className="space-y-2 text-base">
              <li>Email: syairah.portal@cimbsyariah.com</li>
              <li>Phone: +62345678910</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} MSIB Batch 7 @ CIMB Niaga. All rights
            reserved.
          </p>
          <p className="text-xs mt-2">
            <Link to="/privacy" className="hover:text-[#F6F4EB]">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/contact" className="hover:text-[#F6F4EB]">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
