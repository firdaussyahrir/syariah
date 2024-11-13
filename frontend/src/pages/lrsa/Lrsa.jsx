// Lrsa.jsx
import React, { useState } from "react";
import FilterLrsa from "./components/FilterLrsa";
import AddLrsa from "./components/AddLrsa";
import ListLrsa from "./components/ListLrsa";

const Lrsa = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="overflow-x-auto p-6 bg-[#F6F4EB] min-h-screen">
      {/* Judul Halaman */}
      <div className="w-full bg-[#1736F5] text-white py-8 mb-8 flex justify-center items-center shadow-md">
        <h1 className="text-3xl font-semibold">
          Lembar Review Syariah Advisory(LRSA)
        </h1>
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
      <AddLrsa
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      {/* Area Filter */}
      <FilterLrsa />

      {/* Tabel untuk menampilkan file yang berhasil diupload */}
      <div className="bg-gray-50 p-4 overflow-x-auto rounded-lg shadow-md">
        <ListLrsa />
      </div>
    </div>
  );
};

export default Lrsa;
