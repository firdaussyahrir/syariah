import React from "react";
import { imgLogin, loginLogo } from "../../assets";

const Login = () => {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imgLogin})` }}>
      {/* Overlay efek blur */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>

      {/* Konten Login */}
      <div className="relative z-20 w-full max-w-md bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={loginLogo}
            alt="CIMB Niaga Syariah"
            className="w-28 drop-shadow-lg"
          />
        </div>

        {/* Judul */}
        <h2 className="text-gray-800 mb-6 text-center text-2xl font-bold tracking-wide">
          Selamat Datang
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Silakan login untuk mengakses dashboard Anda.
        </p>

        {/* Form Login */}
        <form className="space-y-6">
          {/* Input Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Masukkan alamat email"
              className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Input Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Tombol Masuk */}
          <button
            type="submit"
            disabled={false} // Ganti true jika validasi form belum selesai
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300">
            Masuk
          </button>
        </form>

        {/* Teks Bantuan */}
        <p className="text-gray-600 mt-6 text-center">
          Lupa email atau password?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-700 underline">
            Bantuan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
