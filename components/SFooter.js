import React from "react";
import { ImPinterest2 } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

const SFooter = (props) => {
  return (
    <>
      <div className="bg-black text-white text-center py-4">
        <h1 className="font-[Amarillo] cursor-pointer text-xl sm:text-2xl md:text-3xl my-3 sm:my-4 md:my-6 lg:my-8">
          {props.sitetitle}
        </h1>
        <p className="font-[Champagne] text-base mx-8 my-2 sm:mx-0 sm:my-2 md:text-xl">
          We believe in the power of self-belief and manifestation.
        </p>
        <p className="font-[Champagne] text-base mx-8 my-2 sm:mx-0 sm:my-2 md:text-xl">
          It’s no secret that what you put out into the universe is what you’ll
          get back.
        </p>
        <p className="font-[Champagne] text-base mx-8 my-2 sm:mx-0 sm:my-2 md:text-xl">
          Manifestation is a real thing as long as you believe in yourself and
          put your mind to it.
        </p>
        <div
          id="socialmedia"
          className="grid grid-cols-3 mx-[4rem] sm:mx-[8rem] md:mx-[10rem]  lg:mx-[26rem]"
        >
          <div id="pinterest" className=" w-8 mx-auto">
            <a
              title="Pinterest"
              href="https://www.pinterest.com/abideinspire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImPinterest2 className="text-white w-8 h-8 mx-2 my-2 sm:mx-0 sm:my-2 sm:w-10 sm:h-10" />
            </a>
          </div>
          <div id="instagram" className=" w-8 mx-auto">
            <a
              title="Instagram"
              href="https://www.instagram.com/abide_inspire/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className="text-white w-8 h-8 mx-2 my-2 sm:mx-0 sm:my-2 sm:w-10 sm:h-10" />
            </a>
          </div>
          <div id="facebook" className="w-8 mx-auto">
            <a
              title="Facebook"
              href="https://www.facebook.com/abideinspire/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className="text-white w-8 h-8 mx-2 my-2 sm:mx-0 sm:my-2 sm:w-10 sm:h-10" />
            </a>
          </div>
        </div>
        <div
          id="policy"
          className="justify-center text-sm sm:text-xl  flex text-[#ff2dee] my-2 sm:my-4  md:my-6"
        >
          <div className="mx-[2px] sm:mx-2 font-[Champagne]">
            <Link href="/privacypolicy">Privacy Policy</Link>
            <span className="sm:inline hidden">&nbsp; |</span>
          </div>
          <div className="mx-[2px] sm:mx-2 font-[Champagne]">
            <Link href="/termscondition">Terms and Conditions</Link>
            <span className="sm:inline hidden">&nbsp; |</span>
          </div>
          <div className="mx-[2px] sm:mx-2 font-[Champagne]">
            <Link href="/dcma">DCMA</Link>
            <span className="hidden sm:inline ">&nbsp; |</span>
          </div>
          <div className="mx-[2px] sm:mx-2 font-[Champagne]">
            <Link href="/affiliatedisclaimer">Affiliate Disclaimer</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SFooter;
