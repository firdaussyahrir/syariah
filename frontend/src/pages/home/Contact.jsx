import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-16 px-4">
      <div className="bg-white max-w-3xl w-full rounded-xl shadow-md p-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-[#1736F5]">Contact Us</h1>
          <p className="text-gray-500 mt-4">
            We’d love to hear from you! Please feel free to reach out for any
            inquiries or assistance.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-10">
          {/* Phone */}
          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-[#1736F5] text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-[#1736F5]">Phone</h2>
              <p className="text-gray-600">+62 123 456 789</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-[#1736F5] text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-[#1736F5]">Email</h2>
              <p className="text-gray-600">syariahportal@cimbniaga.co.id</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-[#1736F5] text-2xl" />
            <div>
              <h2 className="text-lg font-semibold text-[#1736F5]">Location</h2>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#1736F5] transition"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#1736F5] transition"
              required
            />
          </div>

          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#1736F5] transition"
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1736F5] text-white font-semibold rounded-lg hover:bg-[#0f2b9e] transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
