import React, { useState } from "react";
import FilterDps from "./components/FilterDps";
import AddDps from "./components/AddDps";
import ListDps from "./components/ListDps";

const Dps = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Dewan Pengawas Syariah (DPS)</h1>
          <p className="text-sm opacity-80 mt-2">
            Manajemen Data Opini dan Risalah Rapat
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tombol Upload File */}
        <div className="flex justify-end mb-6">
          <button
            className="py-3 px-6 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transition duration-300"
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

        {/* Filter Section */}
        <section className="mb-6">
          <FilterDps />
        </section>

        {/* Table Section */}
        <section>
          <ListDps />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600">
        Memerlukan bantuan?{" "}
        <a
          href="#"
          className="text-blue-500 hover:text-blue-700 underline transition duration-300">
          Hubungi Support
        </a>
      </footer>
    </div>
  );
};

export default Dps;
