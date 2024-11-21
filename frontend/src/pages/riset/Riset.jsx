import React, { useState } from "react";
import FilterRiset from "./components/FilterRiset";
import AddRiset from "./components/AddRiset";
import ListRiset from "./components/ListRiset";

const Riset = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Riset Syariah</h1>
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
        <AddRiset
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />

        {/* Filter Section */}
        <div className="mb-6">
          <FilterRiset />
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ListRiset />
        </div>
      </div>
    </div>
  );
};

export default Riset;
