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

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-start p-8"
      style={{
        backgroundColor: "white", // Warna dasar lebih lembut
      }}>
      {/* Judul */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#2D3748] tracking-wide mb-6">
          Syariah Information System
        </h1>
        <div className="bg-[#91C8E4] py-4 px-6 rounded-lg shadow-md">
          <Hadith />
        </div>
      </header>

      {/* Link Utama */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            title: "Dewan Pengawas Syariah (DPS)",
            description: "Mengawasi prinsip Syariah.",
            icon: <FaBalanceScale />,
            to: "/dps",
            color: "#FFB400",
          },
          {
            title: "Lembar Review Syariah Advisory (LRSA)",
            description: "Pusat evaluasi Syariah.",
            icon: <FaBook />,
            to: "/lrsa",
            color: "#4682A9",
          },
          {
            title: "Regulasi Syariah",
            description: "Kumpulan regulasi Syariah.",
            icon: <FaGavel />,
            to: "/regulasi",
            color: "#82C09A",
          },
          {
            title: "Riset Syariah",
            description: "Penelitian mendalam Syariah.",
            icon: <FaSearch />,
            to: "/riset",
            color: "#E86850",
          },
          {
            title: "Buletin Syariah",
            description: "Berita terbaru Syariah.",
            icon: <FaNewspaper />,
            to: "/buletin",
            color: "#749BC2",
          },
        ].map((feature, index) => (
          <Link
            key={index}
            to={feature.to}
            className="p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-white group relative overflow-hidden">
            {/* Background Accent */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
              style={{
                backgroundColor: feature.color,
                clipPath: "circle(70% at 50% 50%)",
              }}></div>

            {/* Icon */}
            <div
              className="text-6xl mb-4"
              style={{
                color: feature.color,
              }}>
              {feature.icon}
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-[#2D3748]">
              {feature.title}
            </h3>
            <p className="text-sm text-[#4A5568] mt-2">{feature.description}</p>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
