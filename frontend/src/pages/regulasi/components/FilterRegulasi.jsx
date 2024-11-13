// src/components/FilterRegulasi.jsx
import React from "react";

const FilterRegulasi = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Sektor</option>
        {/* Tambahkan opsi sektor */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Tahun</option>
        {/* Tambahkan opsi tahun */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Klasifikasi</option>
        {/* Tambahkan opsi klasifikasi */}
      </select>
    </div>
  );
};

export default FilterRegulasi;
