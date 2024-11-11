// src/components/Profile.jsx
import React from "react";
import { FaUserAlt, FaEnvelope, FaBriefcase, FaIdBadge } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg p-10 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl">
        {/* Foto Profil */}
        <div className="flex justify-center mb-8">
          <img
            src="https://via.placeholder.com/140" // Ganti dengan URL foto profil
            alt="Profile"
            className="rounded-full border-4 border-indigo-500 w-36 h-36 object-cover shadow-md"
          />
        </div>

        {/* Judul Profil */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">User Profile</h1>
          <p className="text-gray-500">Explore your personal information</p>
        </div>

        {/* Detail Profil */}
        <div className="space-y-6 text-gray-800">
          {/* Nama Lengkap */}
          <div className="flex items-center text-lg">
            <FaUserAlt className="text-indigo-500 mr-4" />
            <span className="font-medium">Nama Lengkap:</span>
            <span className="ml-auto font-light text-gray-600">Jhon Doe</span>
          </div>

          {/* Jabatan */}
          <div className="flex items-center text-lg">
            <FaBriefcase className="text-indigo-500 mr-4" />
            <span className="font-medium">Jabatan:</span>
            <span className="ml-auto font-light text-gray-600">
              Intern Legal Advisory
            </span>
          </div>

          {/* Role */}
          <div className="flex items-center text-lg">
            <FaIdBadge className="text-indigo-500 mr-4" />
            <span className="font-medium">Role:</span>
            <span className="ml-auto font-light text-gray-600">Admin</span>
          </div>

          {/* Email */}
          <div className="flex items-center text-lg">
            <FaEnvelope className="text-indigo-500 mr-4" />
            <span className="font-medium">Email:</span>
            <span className="ml-auto font-light text-gray-600">
              jhon.doe@example.com
            </span>
          </div>
        </div>

        {/* Tombol Edit Profil */}
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
