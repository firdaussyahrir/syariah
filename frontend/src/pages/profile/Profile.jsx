import React from "react";
import { FaUserAlt, FaEnvelope, FaBriefcase, FaIdBadge } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 m-32">
        {/* Foto Profil */}
        <div className="flex justify-center -mt-20">
          <img
            src="https://via.placeholder.com/120" // Ganti dengan URL foto profil yang valid
            alt="Profile"
            className="rounded-full border-4 border-[#1736F5] w-32 h-32 object-cover shadow-md"
          />
        </div>

        {/* Judul Profil */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-semibold text-[#1736F5]">John Doe</h1>
          <p className="text-gray-500 text-sm mt-1">Admin - Legal Advisory</p>
        </div>

        {/* Detail Profil */}
        <div className="mt-8 space-y-4">
          <ProfileDetail
            icon={<FaUserAlt className="text-[#1736F5]" />}
            label="Nama Lengkap"
            value="John Doe"
          />
          <ProfileDetail
            icon={<FaBriefcase className="text-[#1736F5]" />}
            label="Jabatan"
            value="Intern Legal Advisory"
          />
          <ProfileDetail
            icon={<FaIdBadge className="text-[#1736F5]" />}
            label="Role"
            value="Admin"
          />
          <ProfileDetail
            icon={<FaEnvelope className="text-[#1736F5]" />}
            label="Email"
            value="john.doe@example.com"
          />
        </div>

        {/* Tombol Edit Profil */}
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 text-white bg-[#1736F5] font-medium rounded-full shadow-md hover:bg-[#0f2b9e] transition duration-300 ease-in-out">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

// Komponen Detail Profil Terpisah untuk Menjaga Kode Tetap Bersih
const ProfileDetail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between border-b border-gray-200 pb-2">
    <div className="flex items-center space-x-2 text-gray-700">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
    <span className="text-gray-600 font-light">{value}</span>
  </div>
);

export default Profile;
