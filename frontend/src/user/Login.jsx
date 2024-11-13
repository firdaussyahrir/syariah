import React from "react";
import { imgLogin, logo } from "../assets";

const Login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#1736F5] to-[#FFC70B]">
      {/* Bagian Kiri */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-12 rounded-r-xl shadow-lg">
        {/* Logo */}
        <img src={logo} alt="CIMB Niaga Syariah" className="w-40 mb-8" />

        {/* Instruksi */}
        <h2 className="text-gray-800 mb-6 text-center text-xl font-semibold">
          Masukkan email dan password untuk melanjutkan
        </h2>

        {/* Form Login */}
        <form className="space-y-5 w-full max-w-md">
          {/* Input Email */}
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <span className="material-icons text-gray-400 mr-3"></span>
            <input
              type="email"
              placeholder="Masukkan alamat email"
              className="flex-1 outline-none bg-transparent text-gray-800"
            />
          </div>

          {/* Input Password */}
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <span className="material-icons text-gray-400 mr-3"></span>
            <input
              type="password"
              placeholder="Masukkan password"
              className="flex-1 outline-none bg-transparent text-gray-800"
            />
          </div>

          {/* Tombol Masuk */}
          <button
            disabled={false} // Ganti nilai ke true jika validasi form belum selesai
            type="submit"
            className="w-full bg-[#1736F5] text-white py-3 rounded-md font-semibold hover:bg-[#0f2b9e] transition duration-300">
            Masuk
          </button>
        </form>

        {/* Bantuan */}
        <p className="text-gray-500 mt-5 text-center">
          Lupa email atau password?{" "}
          <a href="#" className="text-[#FFC70B] hover:underline">
            Bantuan
          </a>
        </p>
      </div>

      {/* Bagian Kanan */}
      <div
        className="w-1/2 relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${imgLogin})` }}>
        {/* Overlay Gradasi */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        {/* Konten Tambahan */}
        <div className="absolute bottom-10 left-10 z-20 text-white">
          <h3 className="text-2xl font-semibold">CIMB Niaga</h3>
          <p className="text-sm">Anda yang Utama</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
