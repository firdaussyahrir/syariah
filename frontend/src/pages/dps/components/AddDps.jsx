import React, { useState } from "react";

const AddDps = ({ isModalOpen, closeModal }) => {
  // Generate year options from 2020 to 2030
  const years = [];
  for (let i = 2020; i <= 2030; i++) {
    years.push(i);
  }

  // State for form data
  const [formData, setFormData] = useState({
    no: "",
    opiniDps: "",
    tahun: "",
    noOpiniRapat: "",
    tanggalMasehi: "",
    agendaFile: null,
    kelompok: "",
    kategori: "",
    subKategori: "",
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic (e.g., sending data to backend)
    console.log("Form Data Submitted:", formData);

    // Close modal after submission
    closeModal();
  };

  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-xl relative">
          <h2 className="text-2xl font-semibold mb-6 text-[#4682A9] text-center">
            Upload File DPS
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  No
                </label>
                <input
                  type="text"
                  name="no"
                  value={formData.no}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Opini DPS / Risalah Rapat
                </label>
                <select
                  name="opiniDps"
                  value={formData.opiniDps}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <option value="">Opini DPS</option>
                  <option value="Risalah Rapat">Risalah Rapat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Tahun (Date spesifik Year)
                </label>
                <select
                  name="tahun"
                  value={formData.tahun}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <option value="">Pilih Tahun</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  No Opini/Risalah Rapat
                </label>
                <input
                  type="text"
                  name="noOpiniRapat"
                  value={formData.noOpiniRapat}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Tanggal Masehi
                </label>
                <input
                  type="date"
                  name="tanggalMasehi"
                  value={formData.tanggalMasehi}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Agenda/Perihal (Documents upload)
                </label>
                <input
                  type="file"
                  name="agendaFile"
                  onChange={handleFileChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Kelompok
                </label>
                <select
                  name="kelompok"
                  value={formData.kelompok}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <option value="">Pilih Kelompok</option>
                  <option value="Lain-lain">Lain-lain</option>
                  <option value="Produk">Produk</option>
                  <option value="Financing Model">Financing Model</option>
                  <option value="Program">Program</option>
                  <option value="Policy & Procedure">Policy & Procedure</option>
                  <option value="Fitur Produk">Fitur Produk</option>
                  <option value="Dana Kebajikan & Zakat">
                    Dana Kebajikan & Zakat
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Kategori
                </label>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-50 rounded-lg shadow-sm outline-none text-gray-800 focus:ring-2 focus:ring-blue-500 transition duration-300">
                  <option value="">Pilih Kategori</option>
                  <option value="Lain-Lain">Lain-Lain</option>
                  <option value="Financing">Financing</option>
                  <option value="Asuransi">Asuransi</option>
                  <option value="Kepatuhan Syariah">Kepatuhan Syariah</option>
                  <option value="Dana Kebajikan & Zakat">
                    Dana Kebajikan & Zakat
                  </option>
                  <option value="Funding">Funding</option>
                  <option value="Syariah Card">Syariah Card</option>
                  <option value="Investment">Investment</option>
                  <option value="Trade Finance">Trade Finance</option>
                  <option value="Layanan Jasa">Layanan Jasa</option>
                  <option value="Zakat">Zakat</option>
                  <option value="Treasury">Treasury</option>
                  <option value="DBLM">DBLM</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#4682A9]">
                  Sub Kategori
                </label>
                <input
                  type="text"
                  name="subKategori"
                  value={formData.subKategori}
                  onChange={handleInputChange}
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
