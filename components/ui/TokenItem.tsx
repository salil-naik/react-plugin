import React from "react";
import { CheckCircle } from "react-feather";

export const TokenItem = ({ label, logoURI, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium cursor-pointer p-2.5 rounded mb-1 flex w-full items-center text-white justify-between bg-gray-600 hover:bg-gray-700 disabled:bg-gray-900`}
      disabled={isActive}
    >
      <div className="flex items-center">
        <img src={logoURI} className="w-7 h-7 rounded-full mr-2" />
        <span>{label}</span>
      </div>

      {isActive && <CheckCircle />}
    </button>
  );
};
