import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-10">
      <div className="container mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} CIMB Niaga Syariah. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          <a
            href="#privacy"
            className="hover:text-blue-600 transition duration-300">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a
            href="#contact"
            className="hover:text-blue-600 transition duration-300">
            Contact Us
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
