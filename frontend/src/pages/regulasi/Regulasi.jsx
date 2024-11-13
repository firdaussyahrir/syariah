// Regulasi.jsx
import React, { useState } from "react";
import FilterRegulasi from "./components/FilterRegulasi";
import AddRegulasi from "./components/AddRegulasi";
import ListRegulasi from "./components/ListRegulasi";

const Regulasi = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="overflow-x-auto p-6 bg-[#F6F4EB] min-h-screen">
      {/* Judul Halaman */}
      <div className="w-full bg-[#1736F5] text-white py-8 mb-8 flex justify-center items-center shadow-md">
        <h1 className="text-3xl font-semibold">Regulasi Syariah</h1>
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
      <AddRegulasi
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      {/* Area Filter */}
      <FilterRegulasi />

      {/* Tabel untuk menampilkan file yang berhasil diupload */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <ListRegulasi />
      </div>
    </div>
  );
};

export default Regulasi;
