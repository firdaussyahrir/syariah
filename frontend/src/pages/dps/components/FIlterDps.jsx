// src/components/FilterDps.jsx
import React from "react";

const FilterDps = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Tahun</option>
        {/* Tambahkan opsi tahun */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Kelompok</option>
        {/* Tambahkan opsi kelompok */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Kategori</option>
        {/* Tambahkan opsi kategori */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Sub Kategori</option>
        {/* Tambahkan opsi sub kategori */}
      </select>
    </div>
  );
};

export default FilterDps;
