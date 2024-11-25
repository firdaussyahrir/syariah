import React, { useState, useEffect } from "react";

const hadiths = [
  "“Sesungguhnya amal itu tergantung pada niatnya, dan setiap orang akan mendapatkan sesuai dengan apa yang dia niatkan.” – HR. Bukhari dan Muslim",
  "“Barangsiapa yang menempuh suatu jalan untuk mencari ilmu, Allah akan memudahkan baginya jalan ke surga.” – HR. Muslim",
  "“Senyum di wajah saudaramu adalah sedekah.” – HR. Tirmidzi",
  "“Tidak beriman salah seorang di antara kalian sampai ia mencintai saudaranya sebagaimana ia mencintai dirinya sendiri.” – HR. Bukhari dan Muslim",
  "“Barangsiapa yang bersyukur, maka Aku akan tambahkan nikmat kepadanya.” – QS. Ibrahim: 7",
  "“Sedekah itu tidak akan mengurangi harta.” – HR. Muslim",
  "“Sungguh menakjubkan urusan seorang mukmin, sesungguhnya seluruh urusannya adalah baik...” – HR. Muslim",
  "“Barangsiapa memudahkan urusan orang yang kesulitan, maka Allah akan memudahkan urusannya di dunia dan akhirat.” – HR. Muslim",
  "“Gunakanlah lima perkara sebelum lima perkara: mudamu sebelum tuamu, sehatmu sebelum sakitmu...” – HR. Hakim",
  "“Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.” – QS. Al-Baqarah: 286",
  "“Janganlah kamu meremehkan kebaikan sedikit pun...” – HR. Muslim",
  "“Allah mencintai seseorang yang apabila bekerja, ia menyempurnakannya.” – HR. Thabrani",
  "“Sesungguhnya orang yang paling baik di antara kalian adalah yang paling baik akhlaknya.” – HR. Bukhari",
  "“Barangsiapa yang sabar, Allah akan menjadikannya sabar...” – HR. Bukhari dan Muslim",
  "“Orang yang paling dicintai Allah adalah yang paling bermanfaat bagi orang lain.” – HR. Thabrani",
  "“Barangsiapa bersungguh-sungguh, dia akan berhasil.” – HR. Muslim",
  "“Kebersihan adalah sebagian dari iman.” – HR. Muslim",
  "“Barangsiapa yang tawakal kepada Allah, maka Allah akan mencukupinya.” – QS. At-Talaq: 3",
  "“Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.” – HR. Ahmad",
  "“Orang yang kuat bukanlah yang pandai bergulat, melainkan yang mampu mengendalikan dirinya ketika marah.” – HR. Bukhari",
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
