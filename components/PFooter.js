import React from "react";

const PFooter = (props) => {
  return (
    <>
      <div className=" bg-[#181818] font-[Champagne] text-center  text-base sm:text-xl text-white md:py-3 lg:py-4 py-2">
        {props.sitetitle} &copy; {new Date().getFullYear()} All Rights Reserved.
      </div>
    </>
  );
};

export default PFooter;
