import React from "react";
import { Link } from "react-router-dom";
import { FaBullseye, FaUsers, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div className="bg-white max-w-3xl w-full rounded-xl shadow-xl p-8">
        {/* Judul Halaman */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-2">
            Syariah Portal CIMB Niaga hadir untuk memudahkan Anda dalam
            mengakses informasi dan layanan berbasis syariah.
          </p>
        </div>

        {/* Konten About */}
        <div className="space-y-10">
          {/* Misi */}
          <div className="flex items-center space-x-4">
            <FaBullseye className="text-[#de1519] text-3xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-1">
                Menyediakan layanan informasi syariah yang akurat dan dapat
                diandalkan untuk semua kebutuhan finansial syariah Anda.
              </p>
            </div>
          </div>

          {/* Visi */}
          <div className="flex items-center space-x-4">
            <FaChartLine className="text-[#de1519] text-3xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 mt-1">
                Menjadi platform terdepan yang memfasilitasi pertumbuhan dan
                pemahaman syariah di sektor perbankan, mendukung komunitas, dan
                memperkuat kepercayaan pelanggan.
              </p>
            </div>
          </div>

          {/* Tim Kami */}
          <div className="flex items-center space-x-4">
            <FaUsers className="text-[#de1519] text-3xl" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Our Team</h2>
              <p className="text-gray-600 mt-1">
                Kami terdiri dari individu yang berpengalaman dalam bidang
                keuangan syariah dan teknologi, yang berkomitmen untuk
                memberikan layanan terbaik bagi Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium text-gray-800">Contact Us</h3>
          <p className="text-gray-500 mt-2">
            Jika Anda memiliki pertanyaan atau butuh bantuan lebih lanjut,
            silakan hubungi kami melalui email di{" "}
            <a
              href="mailto:syariahportal@cimbniaga.co.id"
              className="text-[#de1519] font-semibold hover:underline">
              syariahportal@cimbniaga.co.id
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
