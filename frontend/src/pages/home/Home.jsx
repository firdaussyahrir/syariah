import React from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaBook,
  FaGavel,
  FaSearch,
  FaNewspaper,
} from "react-icons/fa"; // Icons
import Hadith from "./Hadith";
import { bghome } from "../../assets"; // Impor gambar background

function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center p-6 text-[#2D3748]"
      style={{
        backgroundImage: `url(${bghome})`, // Menggunakan gambar background
        backgroundSize: "cover", // Menyesuaikan gambar agar memenuhi area
        backgroundPosition: "center", // Menempatkan gambar di tengah
        backgroundAttachment: "fixed", // Agar background tetap saat scroll
      }}>
      {/* Layer Hitam Buram */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Header Section */}
      <header className="relative text-center mb-16 max-w-4xl w-full z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white">
          Selamat Datang di Syariah Information System
        </h1>
        {/* Menampilkan komponen Hadith */}
        <div className="relative z-10">
          <Hadith />
        </div>
      </header>

      {/* Features Section */}
      <main className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl z-10">
        {[
          {
            title: "Dewan Pengawas Syariah (DPS)",
            description:
              "Mengawasi kepatuhan lembaga terhadap prinsip Syariah.",
            icon: <FaBalanceScale className="text-5xl text-[#4682A9]" />,
            to: "/dps",
          },
          {
            title: "Lembar Review Syariah Advisory (LRSA)",
            description: "Pusat penilaian regulasi berbasis Syariah.",
            icon: <FaBook className="text-5xl text-[#4682A9]" />,
            to: "/lrsa",
          },
          {
            title: "Regulasi Syariah",
            description:
              "Kumpulan regulasi yang mengatur kegiatan keuangan Syariah.",
            icon: <FaGavel className="text-5xl text-[#4682A9]" />,
            to: "/regulasi",
          },
          {
            title: "Riset Syariah",
            description:
              "Penelitian dan pengembangan untuk mendukung penerapan Syariah.",
            icon: <FaSearch className="text-5xl text-[#4682A9]" />,
            to: "/riset",
          },
          {
            title: "Buletin Syariah",
            description:
              "Berita terbaru dan informasi terkini terkait Syariah.",
            icon: <FaNewspaper className="text-5xl text-[#4682A9]" />,
            to: "/buletin",
          },
        ].map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="p-8 rounded-lg bg-white shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center group z-10">
            <div className="p-4 rounded-full bg-[#91C8E4] mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#4682A9] mt-4 group-hover:text-[#2D3748] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-700 mt-2">{feature.description}</p>
          </Link>
        ))}
      </main>

      {/* Footer Section (Optional) */}
      <footer className="relative mt-16 text-center text-[#2D3748] text-sm z-10">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Home;
