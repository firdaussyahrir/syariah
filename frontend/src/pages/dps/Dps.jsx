import React, { useState } from "react";
import FilterDps from "./components/FilterDps";
import AddDps from "./components/AddDps";
import ListDps from "./components/ListDps";

const Dps = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="">
      {/* Header */}
      <div className="bg-[#4682a8] text-white py-8 mb-10 shadow-lg">
        <h1 className="text-4xl font-semibold text-center">
          Dewan Pengawas Syariah (DPS)
        </h1>
        <p className="text-center mt-2 text-lg opacity-80">
          Manajemen Data Opini dan Risalah Rapat
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
        <AddDps
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />

        {/* Filter Section */}
        <div className="mb-6">
          <FilterDps />
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ListDps />
        </div>
      </div>
    </div>
  );
};

export default Dps;
