// src/components/FilterLrsa.jsx
import React from "react";

const FilterRiset = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Unit</option>
        {/* Tambahkan opsi unit */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Tahun</option>
        {/* Tambahkan opsi tahun */}
      </select>
      <select className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Classific</option>
        {/* Tambahkan opsi classific */}
      </select>
    </div>
  );
};

export default FilterRiset;
