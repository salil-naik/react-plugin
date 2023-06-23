import React, { useEffect, useState } from "react";

// ui components
import { TokenButton } from "./ui/TokenButton";
import { Modal } from "./ui/Modal";
import { TokenItem } from "./ui/TokenItem";

// mock data
import tokenData from "../temporary-data/tokenList.json"; // this we will get from the API

export const TokenListModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeToken, setActiveToken] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [filteredTokens, setFilteredTokens] = useState([]);
  const allTokens = tokenData.result;

  useEffect(() => {
    const firstToken = allTokens?.[0];
    setActiveToken(firstToken);
  }, [allTokens]);

  function setToken(token) {
    setActiveToken(token);
    setIsModalOpen(false);
  }

  async function getAllChains() {
    const abc = await fetch("https://api.socket.tech/v2/supported/chains", {
      headers: {
        accept: "application/json",
        "API-KEY": "645b2c8c-5825-4930-baf3-d9b997fcd88c",
      },
    }).then((res) => res.json());

    console.log("res", abc);
  }

  getAllChains();
  /**
   * Check the search value,
   * If search value is present, shortlist that tokesn
   * store the shortlisted tokens in filteredTokens array
   *
   * If no search value is provider, show allTokens as filteredTokesn
   */
  useEffect(() => {
    if (inputValue?.length) {
      // filter the tokens
      const _filteredTokens = allTokens?.filter((item) => {
        // check for symbol
        const symbolMatches = item?.symbol
          ?.toLowerCase()
          ?.match(inputValue?.toLowerCase());

        // check for address
        const addressMatches = item?.address
          ?.toLowerCase()
          ?.match(inputValue?.toLowerCase());
        return symbolMatches || addressMatches;
      });

      setFilteredTokens(_filteredTokens);
    } else {
      setFilteredTokens(allTokens);
    }
  }, [allTokens, inputValue]);

  return (
    <>
      <TokenButton
        label={activeToken?.symbol}
        onClick={() => setIsModalOpen(true)}
        tokenUrl={activeToken?.logoURI}
      />

      {/* if isModalOpen is set to true, modal will render */}
      {isModalOpen && (
        <Modal title="Select tokens" onClick={() => setIsModalOpen(false)}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="string"
            className="w-full rounded border border-gray-500 mb-3 h-8 mt-2 outline-none bg-transparent text-sm px-2 flex items-center"
            placeholder="search tokens"
          />

          {filteredTokens?.map((item) => {
            return (
              <TokenItem
                label={item.symbol}
                logoURI={item.logoURI}
                onClick={() => setToken(item)}
                isActive={activeToken?.address === item?.address}
              />
            );
          })}
        </Modal>
      )}
    </>
  );
};

// Event bubbling
{
  /* <button
        onClick={() => console.log("outer button clicked")}
        className="w-full p-4 bg-red-500"
      >
        Outer button - top div
        <div
          onClick={(e) => {
            console.log("inner div clicked");
            e.stopPropagation();
          }}
          className="bg-blue-300 p-2"
        >
          Inner div - mid
          <div
            className="bg-green-200"
            onClick={(e) => {
              console.log("3rd div");
              e.stopPropagation();
            }}
          >
            3rd or bottom div
          </div>
        </div>
      </button> */
}

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
