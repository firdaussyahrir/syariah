// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { sisLogo } from "../assets";

function Footer() {
  return (
    <footer className="bg-[#1736F5] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <div className="mb-4">
          <img
            src={sisLogo}
            alt="CIMB Niaga Syariah Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Watermark Section */}
        <div className="text-xs">
          <p>© {new Date().getFullYear()} MSIB Batch 7 @ CIMB Niaga</p>
          <p>
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
