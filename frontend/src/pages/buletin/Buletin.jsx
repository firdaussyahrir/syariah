// Dps.jsx
import React, { useState } from "react";
import AddBuletin from "./components/AddBuletin";
import FilterBuletin from "./components/FilterBuletin";
import ListBuletin from "./components/ListBuletin";

const Buletin = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className=" ">
      <div className="w-full bg-[#FFC70B] text-[#1736F5] py-8 mb-8 flex justify-center items-center shadow-md">
        <h1 className="text-3xl font-semibold">Buletin Syariah</h1>
      </div>

      {/* Tombol Upload File */}
      <div className="flex justify-start mb-6 p-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          onClick={openModal}>
          Upload File
        </button>
      </div>

      {/* Modal pop-up */}
      <AddBuletin
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      {/* Area Filter */}
      <div className="p-4">
        <FilterBuletin />
      </div>

      {/* Tabel untuk menampilkan file yang berhasil diupload */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md m-4">
        <ListBuletin />
      </div>
    </div>
  );
};

export default Buletin;
