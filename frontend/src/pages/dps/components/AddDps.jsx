import React from "react";

const AddDps = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-xl relative">
          <h2 className="text-2xl font-semibold mb-6 text-[#4682A9] text-center">
            Upload File DPS
          </h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  No
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Opini/Risalah Rapat
                </label>
                <select className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <option value="">Opini</option>
                  <option value="1">Risalah</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Date (Tahun)
                </label>
                <input
                  type="date"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  No Opini/Risalah Rapat
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Tanggal Masehi
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Agenda/Perihal
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Judul Opini
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Kelompok
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Kategori
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Sub Kategori
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-[#4682A9]">
                  Upload File
                </label>
                <input
                  type="file"
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
              <button
                type="button"
                className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                onClick={closeModal}>
                Cancel
              </button>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddDps;
