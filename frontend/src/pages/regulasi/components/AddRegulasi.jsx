// src/components/AddRegulasi.jsx
import React from "react";

const AddRegulasi = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Upload Regulasi
          </h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sektor */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sektor
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Kelompok */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kelompok
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Klasifikasi */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Klasifikasi
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Sub-Klasifikasi */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sub-Klasifikasi
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* OJK & SEOJK */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  OJK & SEOJK
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Berlaku untuk */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Berlaku untuk
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* No Peraturan */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No Peraturan
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Tanggal */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Judul */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Judul
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* No Peraturan (Link to BI) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No Peraturan (Link to BI)
                </label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Judul (Link to Regulation) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Judul (Link to Regulation)
                </label>
                <input
                  type="url"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                onClick={closeModal}>
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition shadow-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddRegulasi;
