import React from "react";

const WwdCards = ({ icon, title,color }) => {
  return (
    <div className="bg-whiteBackground hover:bg-slate-300 h-[120px] shadow-md rounded-lg p-6 flex flex-col items-center justify-center w-[300px]">
    <div className="text-gray-500 text-[35px] {colr}">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mt-4">{title}</h3>
  </div>
  );
};
export default WwdCards;
