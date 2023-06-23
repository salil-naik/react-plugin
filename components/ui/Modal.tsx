import React from "react";

export const Modal = ({ title, onClick, children }) => {
  return (
    <div className="absolute bg-gray-700 p-3 rounded w-full h-full top-0 left-0 text-white flex flex-col">
      {/* header */}
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <button onClick={onClick}>close</button>
      </div>
      <div className="overflow-auto flex-auto">{children}</div>
    </div>
  );
};
