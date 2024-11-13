// Dps.jsx
import React, { useState } from "react";
import FilterDps from "./components/FIlterDps";
import AddDps from "./components/AddDps";
import ListDps from "./components/ListDps";
import { descdps } from "../../assets";

const Dps = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="overflow-x-auto p-6 bg-[#F6F4EB] min-h-screen">
      <div className="w-full bg-[#1736F5] text-white py-8 mb-8 flex justify-center items-center shadow-md">
        <h1 className="text-3xl font-semibold">Dewan Pengawas Syariah (DPS)</h1>
      </div>

      {/* Card untuk Gambar dan Penjelasan */}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden mb-6">
        {/* Bagian Gambar */}
        <div className="w-1/4">
          {" "}
          {/* Mengurangi lebar gambar */}
          <img
            src={descdps}
            alt="Banner DPS"
            className="w-full h-auto object-cover" // Menggunakan h-auto agar tinggi gambar proporsional
          />
        </div>

        {/* Bagian Penjelasan */}
        <div className="w-3/4 p-4">
          {" "}
          {/* Mengurangi padding untuk tampilan lebih compact */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {" "}
            {/* Mengurangi ukuran font */}
            Dewan Pengawas Syariah (DPS)
          </h2>
          <p className="text-sm text-gray-700">
            {" "}
            {/* Mengurangi ukuran font untuk teks penjelasan */}
            Lembaga yang memiliki peran strategis dalam mengawasi dan menjamin
            kepatuhan suatu lembaga keuangan terhadap prinsip-prinsip Syariah
          </p>
        </div>
      </div>

      {/* Tombol Upload File */}
      <div className="flex justify-start mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={openModal}>
          Upload File
        </button>
      </div>

      {/* Modal pop-up */}
      <AddDps
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      {/* Area Filter */}
      <FilterDps />

      {/* Tabel untuk menampilkan file yang berhasil diupload */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <ListDps />
      </div>
    </div>
  );
};

export default Dps;
