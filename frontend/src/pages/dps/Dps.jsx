// Dps.jsx
import React, { useState } from "react";
import FilterDps from "./components/FIlterDps";
import AddDps from "./components/AddDps";
import ListDps from "./components/ListDps";

const Dps = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="overflow-x-auto p-4 bg-white min-h-screen">
      {/* Judul Halaman */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Dewan Pengawas Syariah (DPS)
      </h1>
      <p>
        Dewan Pengawas Syariah (DPS) adalah sekelompok orang yang berperan dalam
        penanganan perkara-perkara yang berhubungan dengan syariah. DPS
        merupakan jawatan yang wajib dan diberikan oleh Perhimpunan Syariah
        Islam (PSI) sebagai wakil kepala pusat perkara-perkara syariah.
      </p>

      {/* Tombol Upload di kiri atas */}
      <div className="flex justify-end mb-6">
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

      {/* Filter Area */}
      <FilterDps />

      {/* Table untuk menampilkan file yang berhasil diupload */}
      <ListDps />
    </div>
  );
};

export default Dps;
