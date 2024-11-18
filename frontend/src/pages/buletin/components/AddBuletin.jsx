// src/components/AddDps.jsx
import React from "react";

const AddBuletin = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Upload File DPS
          </h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* No */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Opini/Risalah Rapat */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Opini/Risalah Rapat
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent">
                  <option value="">Opini</option>
                  <option value="1">Risalah</option>
                </select>
              </div>

              {/* Date (Tahun) */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date (Tahun)
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* No Opini/Risalah Rapat */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No Opini/Risalah Rapat
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Tanggal Masehi */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tanggal Masehi
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Agenda/Perihal */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Agenda/Perihal
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Judul Opini */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Judul Opini
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

              {/* Kategori */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Kategori
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Sub Kategori */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sub Kategori
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Upload File */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload File
                </label>
                <input
                  type="file"
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

export default AddBuletin;
