import React, { useState } from "react";
import AddRegulasi from "./components/AddRegulasi";
import FilterRegulasi from "./components/FilterRegulasi";
import ListRegulasi from "./components/ListRegulasi";

const Regulasi = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Regulasi Syariah</h1>
          <p className="text-sm opacity-80 mt-2">
            Kumpulan regulasi yang mengatur kegiatan keuangan syariah
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4">
        {/* Tombol Upload File */}
        <div className="flex justify-start mb-8">
          <button
            className="fflex items-center bg-[#1cd05d] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#4682a8] hover:shadow-lg transition"
            onClick={openModal}>
            <span className="material-icons-outlined mr-2"></span>
            Upload File
          </button>
        </div>

        {/* Modal pop-up */}
        <AddRegulasi
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />

        {/* Filter Section */}
        <div className="mb-6">
          <FilterRegulasi />
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-2 overflow-x-auto">
          <ListRegulasi />
        </div>
      </div>
    </div>
  );
};

export default Regulasi;
