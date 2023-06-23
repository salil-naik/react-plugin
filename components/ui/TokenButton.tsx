import React from "react";
export const TokenButton = ({ label, tokenUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 h-8 flex items-center rounded-full p-1 pr-2 text-white text-sm capitalize"
    >
      <img src={tokenUrl} className="rounded-full w-6 h-6 mr-1.5" />
      <span className="leading-[32px]">{label}</span>
    </button>
  );
};
