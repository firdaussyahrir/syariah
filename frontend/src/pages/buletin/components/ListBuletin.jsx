// src/components/ListDps.jsx
import React from "react";

const ListBuletin = () => {
  return (
    <table className="table-auto w-full border border-gray-200 text-sm text-left text-gray-800">
      <thead className="bg-blue-50 text-blue-700">
        <tr>
          <th className="p-3 border-b">No</th>
          <th className="p-3 border-b">Opini/Risalah Rapat</th>
          <th className="p-3 border-b">Date</th>
          <th className="p-3 border-b">No Opini/Risalah Rapat</th>
          <th className="p-3 border-b">Tanggal Masehi</th>
          <th className="p-3 border-b">Agenda/Perihal</th>
          <th className="p-3 border-b">Judul Opini</th>
          <th className="p-3 border-b">Kelompok</th>
          <th className="p-3 border-b">Kategori</th>
          <th className="p-3 border-b">Sub Kategori</th>
          <th className="p-3 border-b">Actions</th>{" "}
          {/* Kolom untuk tombol aksi */}
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">1</td>
          <td className="p-3">Contoh Opini</td>
          <td className="p-3">2024</td>
          <td className="p-3">0001</td>
          <td className="p-3">01-01-2024</td>
          <td className="p-3">Perihal Contoh</td>
          <td className="p-3">Judul Contoh</td>
          <td className="p-3">Kelompok A</td>
          <td className="p-3">Kategori X</td>
          <td className="p-3">Sub Kategori Y</td>
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
        {/* Tambahkan lebih banyak baris sesuai kebutuhan */}
      </tbody>
    </table>
  );
};

export default ListBuletin;
