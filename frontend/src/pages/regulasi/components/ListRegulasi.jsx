// src/components/ListRegulasi.jsx
import React from "react";

const ListRegulasi = () => {
  return (
    <table className="table-auto w-full border border-gray-200 text-sm text-left text-gray-800">
      <thead className="bg-blue-50 text-blue-700">
        <tr>
          <th className="p-3 border-b">Sektor</th>
          <th className="p-3 border-b">Kelompok</th>
          <th className="p-3 border-b">Klasifikasi</th>
          <th className="p-3 border-b">Sub-Klasifikasi</th>
          <th className="p-3 border-b">OJK & SEOJK</th>
          <th className="p-3 border-b">Berlaku untuk</th>
          <th className="p-3 border-b">No Peraturan</th>
          <th className="p-3 border-b">Tanggal</th>
          <th className="p-3 border-b">Judul</th>
          <th className="p-3 border-b">No Peraturan (Link to BI)</th>
          <th className="p-3 border-b">Judul (Link to Regulation)</th>
          <th className="p-3 border-b">Actions</th>{" "}
          {/* Kolom untuk tombol aksi */}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Sektor Contoh</td>
          <td className="p-3">Kelompok A</td>
          <td className="p-3">Klasifikasi X</td>
          <td className="p-3">Sub-Klasifikasi Y</td>
          <td className="p-3">OJK & SEOJK Contoh</td>
          <td className="p-3">Peraturan Umum</td>
          <td className="p-3">0001</td>
          <td className="p-3">01-01-2024</td>
          <td className="p-3">Judul Regulasi Contoh</td>
          <td className="p-3">
            <a href="https://www.bi.go.id" className="text-blue-500">
              0001 - BI Link
            </a>
          </td>
          <td className="p-3">
            <a href="https://www.regulasi.com" className="text-blue-500">
              Judul Regulasi Link
            </a>
          </td>
          <td className="p-3 text-center">
            {/* Tombol untuk Read, Edit, Delete */}
            <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition">
              Read
            </button>
            <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600 transition">
              Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListRegulasi;
