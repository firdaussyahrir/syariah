import React from "react";
import { Link } from "react-router-dom";
import { welcome } from "../../assets"; // Gambar latar belakang
import { FaBalanceScale, FaBook, FaGavel, FaSearch } from "react-icons/fa"; // Ikon untuk setiap link
import Card from "../../components/Card";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${welcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Selamat Datang di Syariah Information System
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Akses informasi penting mengenai regulasi dan kebijakan Syariah dalam
          satu portal terpadu.
        </p>
      </div>

      {/* Grid untuk fitur utama */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-4 md:px-0 max-w-6xl">
        {/* Card DPS */}
        <Card
          to="/dps"
          icon={<FaBalanceScale />}
          title={"Dewan Pengawas Syariah (DPS)"}
          description={
            "Pusat penilaian dan keputusan regulasi berbasis Syariah."
          }
        />
        ``
        {/* Card LRSA */}
        <Link
          to="/lrsa"
          className="p-8 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white via-[#FFECB3] to-[#FFC70B] text-center transform hover:scale-105">
          <FaBook className="text-5xl text-[#FFC70B] mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Lembar Review Syariah Advisory (LRSA)
          </h3>
          <p className="text-gray-700">
            Pusat penilaian dan keputusan regulasi berbasis Syariah.
          </p>
        </Link>
        {/* Card Regulasi Syariah */}
        <Link
          to="/regulasi"
          className="p-8 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white via-[#FFECB3] to-[#FFC70B] text-center transform hover:scale-105">
          <FaGavel className="text-5xl text-[#FFC70B] mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Regulasi Syariah
          </h3>
          <p className="text-gray-700">
            Kumpulan regulasi yang mengatur kegiatan keuangan berbasis Syariah.
          </p>
        </Link>
        {/* Card Riset */}
        <Link
          to="/riset"
          className="p-8 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white via-[#FFECB3] to-[#FFC70B] text-center transform hover:scale-105">
          <FaSearch className="text-5xl text-[#FFC70B] mb-4 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Riset Syariah
          </h3>
          <p className="text-gray-700">
            Penelitian dan pengembangan untuk mendukung penerapan Syariah.
          </p>
        </Link>
      </div>

      {/* Tombol CTA */}
      <div className="mt-12">
        <Link
          to="/explore"
          className="px-8 py-3 bg-[#FFC70B] text-gray-900 font-semibold rounded-full shadow-lg hover:bg-[#e6b800] transition-colors duration-300">
          Jelajahi Lebih Lanjut
        </Link>
      </div>
    </div>
  );
}

export default Home;
