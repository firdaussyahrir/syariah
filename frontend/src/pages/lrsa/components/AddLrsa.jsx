// src/components/AddLrsa.jsx
import React from "react";

const AddLrsa = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Upload File LRSA
          </h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Unit
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ID
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Jenis */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Jenis
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* No LRSA/E-LRSA */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  No LRSA/E-LRSA
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Perihal */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Perihal
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Proposed Sub-Directorate */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Proposed Sub-Directorate
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Directorate */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Directorate
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Business/Support */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business/Support
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Project/Non Project */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project/Non Project
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent"
                />
              </div>

              {/* Add more fields as needed */}

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

export default AddLrsa;
