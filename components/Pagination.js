import React from "react";
import { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const [numberofbuttons, setNumberofbuttons] = useState(
    Math.ceil(total / showPerPage)
  );

  const [pageNumberLimit, setpageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(-1);


  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
        if ((counter - 1) % pageNumberLimit == 0) {
          setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
        
      }
    } else if (type === "next") {
      if (numberofbuttons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
        if (counter + 1 > maxPageNumberLimit) {
          setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }

      }
    }
  };
  let pageIncrementBtn = null;
  if (total >= maxPageNumberLimit * showPerPage) {
    pageIncrementBtn = <li className="bg-pink-500 text-white p-2 px-4 sm:py-4 sm:px-6 rounded-full sm:mx-2 uppercase font-sans cursor-pointer 
    hover:bg-pink-800" onClick={() => onButtonClick("next")}> &hellip; </li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="bg-pink-500 text-white p-2 px-4 sm:py-4 sm:px-6 rounded-full sm:mx-2 uppercase font-sans cursor-pointer 
    hover:bg-pink-800" onClick={() => onButtonClick("prev")}> &hellip; </li>;
  }
 
  return (
    <>
      <div className="my-4 mb-14" id="Pagination">
        <ul className="flex justify-center">
          <li
            className="bg-pink-500 text-white p-2  px-3 mx-[6px] sm:py-4 sm:px-4 rounded-full sm:mx-2 uppercase font-sans cursor-pointer 
                hover:bg-pink-800
                "
            onClick={() => onButtonClick("prev")}
          >
            Previous
          </li>
          {pageDecrementBtn}
         {[...Array(numberofbuttons)].map(( _,index) => {
           if (index < maxPageNumberLimit  && index > minPageNumberLimit) {
            return (
              <li  onClick={() => setCounter(index + 1)}
                className={`bg-pink-500 text-white p-2 px-4 mx-[6px] sm:py-4 sm:px-6 rounded-full sm:mx-2 uppercase font-sans cursor-pointer
                ${counter === index + 1 ? "bg-pink-800" : ""}`} key={index}>
                {index +1}
              </li>
            );
           }
          })}
          {pageIncrementBtn}
          <li
            className="bg-pink-500 text-white p-2 px-3 mx-[6px] sm:py-4 sm:px-6 rounded-full sm:mx-2 uppercase font-sans cursor-pointer 
                hover:bg-pink-800
                "
            onClick={() => onButtonClick("next")}
          >
            Next
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;


