import React from "react";
import { Link } from "react-router-dom";

const Card = ({ link, icon, title, description }) => {
  return (
    <Link
      to={link}
      className="p-8 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white via-[#FFECB3] to-[#FFC70B] text-center transform hover:scale-105">
      <div className="text-5xl text-[#FFC70B] mb-4 mx-auto flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </Link>
  );
};

export default Card;
