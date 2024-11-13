import React from "react";
import { Link } from "react-router-dom";
import { welcome } from "../../assets";

function Home() {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-[#F6F4EB] min-h-screen">
      {/* Informasi Fitur */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full px-4 md:px-0">
        {/* Card DPS */}
        <Link
          to="/dps" // Link ke halaman DPS
          className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
          <h3 className="text-2xl font-semibold text-[#FFC70B] mb-2">
            Dewan Pengawas Syariah (DPS)
          </h3>
          <p className="text-gray-600">
            Lembaga yang memiliki peran strategis dalam mengawasi dan menjamin
            kepatuhan suatu lembaga keuangan terhadap prinsip-prinsip Syariah.
          </p>
        </Link>

        {/* Card LRSA */}
        <Link
          to="/lrsa" // Link ke halaman LRSA
          className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
          <h3 className="text-2xl font-semibold text-[#FFC70B] mb-2">
            Lembar Review Syariah Advisory (LRSA)
          </h3>
          <p className="text-gray-600">
            Lembaga yang berperan sebagai pusat pengambilan keputusan dan
            penilaian terhadap regulasi berbasis syariah.
          </p>
        </Link>

        {/* Card Regulasi Syariah */}
        <Link
          to="/regulasi" // Link ke halaman Regulasi Syariah
          className="p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
          <h3 className="text-2xl font-semibold text-[#FFC70B] mb-2">
            Regulasi Syariah
          </h3>
          <p className="text-gray-600">
            Peraturan hukum dan perundang-undangan yang mengatur kegiatan
            ekonomi dan keuangan berdasarkan prinsip-prinsip syariah.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
