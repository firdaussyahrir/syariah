import React, { useState, useEffect } from "react";
import { FaPen, FaTrash, FaEye, FaDownload } from "react-icons/fa"; // Ikon dari Font Awesome
import axios from "axios"; // Import axios

const ListDps = () => {
  // Inisialisasi state untuk data DPS
  const [dpsData, setDpsData] = useState([]);

  // Mengambil data DPS saat komponen dimount
  useEffect(() => {
    axios
      .get("http://localhost:5001/dps")
      .then((response) => {
        // Pastikan response.data adalah array
        if (Array.isArray(response.data)) {
          setDpsData(response.data);
        } else {
          console.error("Data yang diterima bukan array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching DPS data:", error);
      });
  }, []); // Empty dependency array berarti hanya akan dipanggil sekali saat komponen dimount

  return (
    <div>
      <h1>List DPS</h1>
      {/* Cek apakah dpsData adalah array sebelum memetakan */}
      {Array.isArray(dpsData) && dpsData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Opini/Risalah Rapat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dpsData.map((dps, index) => (
              <tr key={dps.id}>
                <td>{index + 1}</td>
                <td>{dps.opiniRapat}</td>
                <td>
                  <FaEye /> <FaPen /> <FaTrash /> <FaDownload />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Data DPS tidak ditemukan atau masih kosong.</p>
      )}
    </div>
  );
};

export default ListDps;
