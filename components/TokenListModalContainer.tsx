import React, { useState } from "react";

export const TokenListModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Matic</button>

      {/* if isModalOpen is set to true, modal will render */}
      {isModalOpen && <Modal title="Select tokens" onClick={() => setIsModalOpen(false)} />}
    </>
  );
};

const Modal = ({ title, onClick }) => {
  return (
    <div className="absolute bg-red-500 rounded w-full h-full top-0 left-0">
      {/* header */}
      <div className="flex justify-between items-center">
        <span>{title}</span>
        <button onClick={onClick}>close</button>
      </div>
    </div>
  );
};

// const students = { percentage: 70 };

// //   LOGICAL AND OPERATOR
// if(true && true) console.log('and operator');
//   if(false && true) // this won't run
//   if(true && false) // this won't run
//   if(false && false) // this won't run

// //   logical OR operator
//   if(true || true) // this will also run
//   if(true || false) // this will run
//   if(false || true) // this will also run
//   if(false || false) // this IS NOT GONNA RUN

//   if(students.percentage > 70 && students.percentage < 90){
//     console.log('do something')
//   }

//   if(students.percentage > 90 || students.percentage < 10) {
//     console.log('extreme student')
//   }

/**
 * if(statement1 && statement2) do the following
 */
