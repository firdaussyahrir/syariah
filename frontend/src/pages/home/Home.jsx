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
        backgroundImage: `url(${bghome})`, // Background gambar
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      {/* Overlay efek gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md z-0"></div>

      {/* Header */}
      <header className="relative text-center mb-16 max-w-4xl w-full z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white tracking-wider drop-shadow-lg">
          Selamat Datang di Syariah Information System
        </h1>
        <div className="relative z-10">
          <Hadith />
        </div>
      </header>

      {/* Fitur Utama */}
      <main className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl z-10">
        {[
          {
            title: "Dewan Pengawas Syariah (DPS)",
            description:
              "Mengawasi kepatuhan lembaga terhadap prinsip Syariah.",
            icon: <FaBalanceScale className="text-5xl text-white" />,
            to: "/dps",
          },
          {
            title: "Lembar Review Syariah Advisory (LRSA)",
            description: "Pusat penilaian regulasi berbasis Syariah.",
            icon: <FaBook className="text-5xl text-white" />,
            to: "/lrsa",
          },
          {
            title: "Regulasi Syariah",
            description:
              "Kumpulan regulasi yang mengatur kegiatan keuangan Syariah.",
            icon: <FaGavel className="text-5xl text-white" />,
            to: "/regulasi",
          },
          {
            title: "Riset Syariah",
            description:
              "Penelitian dan pengembangan untuk mendukung penerapan Syariah.",
            icon: <FaSearch className="text-5xl text-white" />,
            to: "/riset",
          },
          {
            title: "Buletin Syariah",
            description:
              "Berita terbaru dan informasi terkini terkait Syariah.",
            icon: <FaNewspaper className="text-5xl text-white" />,
            to: "/buletin",
          },
        ].map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="p-8 rounded-xl bg-gradient-to-r from-[#91C8E4] to-[#4682A9] shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center group z-10">
            <div className="p-4 rounded-full bg-[#2D3748] group-hover:scale-110 transform transition-transform duration-300 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-[#F6F4EB] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-[#F6F4EB] mt-2">{feature.description}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
