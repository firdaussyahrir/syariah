import React, { useState, useEffect } from "react";

const hadiths = [
  "“Sesungguhnya amal itu tergantung pada niatnya, dan setiap orang akan mendapatkan sesuai dengan apa yang dia niatkan.” – HR. Bukhari dan Muslim",
  "“Barangsiapa yang menempuh suatu jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan ke surga.” – HR. Muslim",
  "“Senyum di wajah saudaramu adalah sedekah.” – HR. Tirmidzi",
  "“Tidak beriman salah seorang di antara kalian sampai ia mencintai saudaranya sebagaimana ia mencintai dirinya sendiri.” – HR. Bukhari dan Muslim",
];

function Hadith() {
  const [currentHadith, setCurrentHadith] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHadith(hadiths[Math.floor(Math.random() * hadiths.length)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-lg italic text-[#2D3748] max-w-2xl mx-auto">
        {currentHadith}
      </p>
    </div>
  );
}

export default Hadith;
