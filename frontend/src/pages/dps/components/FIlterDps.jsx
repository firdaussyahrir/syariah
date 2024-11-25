// src/components/FilterDps.jsx
import React, { useState } from "react";

const FilterDps = ({ onFilterChange }) => {
  // States to store selected filter values
  const [filters, setFilters] = useState({
    tahun: "",
    kelompok: "",
    kategori: "",
  });

  // Example filter options for demonstration (you can update them dynamically based on your data)
  const tahunOptions = ["2024", "2023", "2022"];
  const kelompokOptions = ["Kelompok A", "Kelompok B", "Kelompok C"];
  const kategoriOptions = ["Financing", "Investment", "Savings"];

  // Handle filter change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass the updated filter values to parent component
  };

  return (
    <div className="flex space-x-4 mb-6">
      <select
        name="tahun"
        value={filters.tahun}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Tahun</option>
        {tahunOptions.map((tahun) => (
          <option key={tahun} value={tahun}>
            {tahun}
          </option>
        ))}
      </select>

      <select
        name="kelompok"
        value={filters.kelompok}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Kelompok</option>
        {kelompokOptions.map((kelompok) => (
          <option key={kelompok} value={kelompok}>
            {kelompok}
          </option>
        ))}
      </select>

      <select
        name="kategori"
        value={filters.kategori}
        onChange={handleFilterChange}
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
        <option value="">Kategori</option>
        {kategoriOptions.map((kategori) => (
          <option key={kategori} value={kategori}>
            {kategori}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDps;
