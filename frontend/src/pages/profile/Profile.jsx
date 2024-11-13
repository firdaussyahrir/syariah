import React from "react";
import { FaUserAlt, FaEnvelope, FaBriefcase, FaIdBadge } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center py-10 px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8">
        {/* Foto Profil */}
        <div className="flex justify-center -mt-20">
          <img
            src="https://via.placeholder.com/120" // Ganti dengan URL foto profil
            alt="Profile"
            className="rounded-full border-4 border-[#de1519] w-32 h-32 object-cover shadow-lg"
          />
        </div>

        {/* Judul Profil */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">John Doe</h1>
          <p className="text-gray-500 text-sm mt-1">Admin - Legal Advisory</p>
        </div>

        {/* Detail Profil */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between border-b py-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaUserAlt className="text-[#de1519]" />
              <span className="font-medium">Nama Lengkap</span>
            </div>
            <span className="text-gray-600 font-light">John Doe</span>
          </div>

          <div className="flex items-center justify-between border-b py-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaBriefcase className="text-[#de1519]" />
              <span className="font-medium">Jabatan</span>
            </div>
            <span className="text-gray-600 font-light">
              Intern Legal Advisory
            </span>
          </div>

          <div className="flex items-center justify-between border-b py-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaIdBadge className="text-[#de1519]" />
              <span className="font-medium">Role</span>
            </div>
            <span className="text-gray-600 font-light">Admin</span>
          </div>

          <div className="flex items-center justify-between border-b py-3">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaEnvelope className="text-[#de1519]" />
              <span className="font-medium">Email</span>
            </div>
            <span className="text-gray-600 font-light">
              john.doe@example.com
            </span>
          </div>
        </div>

        {/* Tombol Edit Profil */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-[#de1519] text-white font-medium rounded-full shadow-lg hover:bg-red-600 transition duration-300 ease-in-out">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
