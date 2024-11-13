// src/components/ListLrsa.jsx
import React from "react";

const ListLrsa = () => {
  return (
    <table className="table-auto border border-gray-200 text-sm text-left text-gray-800 overflow-x-auto">
      <thead className="bg-blue-50 text-blue-700">
        <tr>
          <th className="p-3 border-b">Unit</th>
          <th className="p-3 border-b">ID</th>
          <th className="p-3 border-b">Jenis</th>
          <th className="p-3 border-b">No LRSA/E-LRSA</th>
          <th className="p-3 border-b">Perihal</th>
          <th className="p-3 border-b">Date</th>
          <th className="p-3 border-b">Proposed Sub-Directorate</th>
          <th className="p-3 border-b">Directorate</th>
          <th className="p-3 border-b">Business/Support</th>
          <th className="p-3 border-b">Project/Non Project</th>
          <th className="p-3 border-b">Preview/Non Preview</th>
          <th className="p-3 border-b">Kategori</th>
          <th className="p-3 border-b">Classific</th>
          <th className="p-3 border-b">Detailing</th>
          <th className="p-3 border-b">Segment</th>
          <th className="p-3 border-b">Fasilitas</th>
          <th className="p-3 border-b">Akad</th>
          <th className="p-3 border-b">Hasil Review</th>
          <th className="p-3 border-b">Dokumen Request diterima</th>
          <th className="p-3 border-b">Submit ke SAS Head</th>
          <th className="p-3 border-b">Approval SAS Head</th>
          <th className="p-3 border-b">Approval Head of ALS</th>
          <th className="p-3 border-b">Submit ke Request Unit</th>
          <th className="p-3 border-b">SLA (Date keluar - Date Masuk)</th>
          <th className="p-3 border-b text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-3">Contoh Unit</td>
          <td className="p-3">001</td>
          <td className="p-3">Jenis A</td>
          <td className="p-3">E-LRSA-001</td>
          <td className="p-3">Contoh Perihal</td>
          <td className="p-3">2024-11-11</td>
          <td className="p-3">Sub-Directorate A</td>
          <td className="p-3">Directorate B</td>
          <td className="p-3">Business</td>
          <td className="p-3">Project</td>
          <td className="p-3">Preview</td>
          <td className="p-3">Kategori X</td>
          <td className="p-3">Class A</td>
          <td className="p-3">Detail Y</td>
          <td className="p-3">Segment 1</td>
          <td className="p-3">Fasilitas Z</td>
          <td className="p-3">Akad 1</td>
          <td className="p-3">Reviewed</td>
          <td className="p-3">Yes</td>
          <td className="p-3">Submitted</td>
          <td className="p-3">Approved</td>
          <td className="p-3">Approved</td>
          <td className="p-3">Submitted</td>
          <td className="p-3">5 Days</td>
          <td className="p-3 text-center">
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

export default ListLrsa;
