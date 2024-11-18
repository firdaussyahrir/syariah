import React from "react";
import { imgLogin, loginLogo } from "../../assets";

const Login = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imgLogin})` }}>
      {/* Overlay jika ingin menambah efek gelap di gambar */}

      {/* Bagian Kiri - Form Login */}
      <div className="relative w-full max-w-sm bg-white p-8 rounded-xl shadow-lg z-20">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={loginLogo} alt="CIMB Niaga Syariah" className="w-32" />
        </div>

        {/* Instruksi */}
        <h2 className="text-gray-800 mb-6 text-center text-xl font-semibold">
          Masukkan email dan password untuk melanjutkan
        </h2>

        {/* Form Login */}
        <form className="space-y-5">
          {/* Input Email */}
          <div className="flex items-center border border-gray-300 rounded-md p-3">
            <input
              type="email"
              placeholder="Masukkan alamat email"
              className="flex-1 outline-none bg-transparent text-gray-800"
            />
          </div>

          {/* Input Password */}
          <div className="flex items-center border border-gray-300 rounded-md p-3">
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
    </div>
  );
};

export default Login;
