import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center text-center p-8 overflow-x-auto p-4 bg-white min-h-screen">
      {/* Teks Sambutan dengan Animasi Fade-in */}
      <h1 className="text-4xl font-semibold text-blue-600 mb-4 animate-fadeIn">
        Selamat Datang di Syariah Portal CIMB Niaga
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl animate-fadeIn delay-500">
        Kami hadir untuk memudahkan akses informasi syariah yang terpercaya dan
        membantu memenuhi kebutuhan Anda akan regulasi berbasis syariah.
      </p>

      {/* Informasi Fitur */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-medium text-blue-600 mb-2">
            Keamanan Data
          </h3>
          <p className="text-gray-500">
            Data Anda dijaga dengan standar keamanan tertinggi.
          </p>
        </div>
        <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-medium text-blue-600 mb-2">
            Regulasi Terpercaya
          </h3>
          <p className="text-gray-500">
            Mematuhi regulasi syariah yang transparan dan terpercaya.
          </p>
        </div>
        <div className="p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-medium text-blue-600 mb-2">
            Dukungan Penuh
          </h3>
          <p className="text-gray-500">
            Tim kami siap mendukung segala kebutuhan informasi syariah Anda.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
