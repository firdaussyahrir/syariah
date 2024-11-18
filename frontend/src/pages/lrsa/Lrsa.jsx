import React, { useState } from "react";
import AddLrsa from "./components/AddLrsa";
import FilterLrsa from "./components/FilterLrsa";
import ListLrsa from "./components/ListLrsa";

const Lrsa = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="">
      {/* Header */}
      <div className="bg-[#4682a8] text-white py-8 mb-10 shadow-lg">
        <h1 className="text-4xl font-semibold text-center">
          Lembar Review Syariah Advisory (LRSA)
        </h1>
        <p className="text-center mt-2 text-lg opacity-80">
          Manajemen Penilaian Regulasi Berbasis Syariah
        </p>
      </div>

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
        <AddLrsa
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />

        {/* Filter Section */}
        <div className="mb-6">
          <FilterLrsa />
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-2 overflow-x-auto">
          <ListLrsa />
        </div>
      </div>
    </div>
  );
};

export default Lrsa;
