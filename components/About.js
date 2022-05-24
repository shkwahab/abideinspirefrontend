import React from "react";
import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMinusSm } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [minus, setMinus] = useState(true);
  const minusBtn = () => {
    setMinus(!minus);
  };
  const [plus, setPlus] = useState(false);
  const plusBtn = () => {
    setPlus(!plus);
  };
  const [q, setq] = useState(true);
  const qBtn = () => {
    setq(!q);
  };
  const [minus2, setMinus2] = useState(true);
  const minusBtn2 = () => {
    setMinus2(!minus2);
  };
  const [plus2, setPlus2] = useState(false);
  const plusBtn2 = () => {
    setPlus2(!plus2);
  };
  const [q2, setq2] = useState(true);
  const qBtn2 = () => {
    setq2(!q2);
  };

  const [minus3, setMinus3] = useState(true);
  const minusBtn3 = () => {
    setMinus3(!minus3);
  };
  const [plus3, setPlus3] = useState(false);
  const plusBtn3 = () => {
    setPlus3(!plus3);
  };
  const [q3, setq3] = useState(true);
  const qBtn3 = () => {
    setq3(!q3);
  };

  const promo = () => {
    location.href = "https://tinyurl.com/ynt2hf83";
  };
  return (
    <>
      <div id="gd" className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 grid grid-cols-1 ">
        <div className=" ">
          <div className="text-center md:hidden text-4xl sm:text-5xl mt-8 TimesNewRoman">
            Hey Gorgeous !
          </div>
          <div className="mt-8 md:my-8 mx-14 md:mx-4 text-center md:text-left">
            <Image
              alt="logo"
              src="/images/abide.png"
              width="300"
              height="300"
            />
          </div>
        </div>
        <div className="hidden md:block md:my-10 ">
          <h1 className="md:my-4 md:mx-20 md:text-5xl lg:text-6xl TimesNewRoman ">
            Hey Gorgeous !
          </h1>
          <p className="md:text-xl my-2">
            Abide & Inspire is the Community of the Self Belief and
            Manifestation.
          </p>
          <p className="md:text-xl my-2">
            We are belivers of the Law of the Attraction and Manifestation
            Magic.
          </p>
          <p className="md:text-xl my-2">
            We believe in the power of self-belief and manifestation.
          </p>
          <p className="md:text-xl my-2">
            It’s no secret that what you put out into the universe is what
            you’ll get back.
          </p>
          <p className="md:text-xl my-2">
            Manifestation is a real thing as long as you believe in yourself and
            put your mind to it.
          </p>
        </div>
        <div className="px-4 md:hidden">
          <p className="my-2 text-base sm:text-xl">
            Abide & Inspire is the Community of the Self Belief and
            Manifestation.
          </p>
          <p className="my-2 text-base sm:text-xl">
            We are belivers of the Law of the Attraction and Manifestation
            Magic.
          </p>
          <p className="my-2 text-base sm:text-xl">
            We believe in the power of self-belief and manifestation.
          </p>
          <p className="my-2 text-base sm:text-xl">
            It’s no secret that what you put out into the universe is what
            you’ll get back.
          </p>
          <p className="my-2 text-base sm:text-xl">
            Manifestation is a real thing as long as you believe in yourself and
            put your mind to it.
          </p>
        </div>
      </div>
      <div className="my-4 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width="258"
          height="147.5"
        />
      </div>
      <div className="my-4 hidden  lg:block text-center">
        <Image alt="flower" src="/images/flower.png" width="344" height="197" />
      </div>
      <div className="my-4 hidden sm:block  md:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="207" height="99" />
      </div>
      <div className="my-4 block sm:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="166" height="80" />
      </div>
      <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-44 text-center my-2 sm:my-4 md:my-6 lg:my-8">
        <h1 className="TimesNewRoman text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          What I Love The Most... the joy and gratitude I feel when I can
          inspire, motivate, and help other women to achieve the life they love!
        </h1>
      </div>
      <div className="py-4 bg-[#F8ADF2]">
        <div className="my-2 sm:my-4 md:my-6 lg:my-8 font-[Champagne] font-bold text-xl sm:text-2xl md:text-3xl text-center">
          TELL ME GORGEOUS
        </div>
        <div className="my-2 sm:my-4 md:my-6 lg:my-8">
          <h1 className="TimesNewRoman text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center">
            Do You Have Dreams That You've Been Putting
            <span className="md:hidden">
              &nbsp;Off For Far Too Long
              <span className="italic">.Because...</span>
            </span>
          </h1>
          <h1 className="md:block hidden TimesNewRoman text-xl sm:text-2xl md:text-4xl lg:text-5xl text-center">
            Putting Off For Far Too Long
            <span className="italic">.Because...</span>
          </h1>
        </div>

        <div className="mx-2 sm:mx-4 md:mx-28 lg:mx-44 my-2 sm:my-4 md:my-8   grid grid-cols-1 md:grid-cols-2">
          <div className="mx-4 ">
            <p className="my-2 md:my-0 text-base sm:text-base">
              <span className="TimesNewRoman text-3xl md:text-5xl ">I</span>t
              just wasn’t the right time… First, you had to take care of the
              children or your spouse… Your limiting beliefs, which you have
              been carrying around with you since your childhood, always got in
              the way…
            </p>
            <p className="md:my-2 ">
              Oh, I know how it feels, and just like you, I was there too. But I
              also know how to turn things around. How goal-setting,
              manifesting, and
              <span className="md:hidden">
                transforming your mindset doesn’t have to be overwhelming. How
                you can live your dream life no matter how old you are, where
                you come from, or where you are right now.
              </span>
            </p>
          </div>
          <div className="mx-4 my-4 md:mx-4">
            <p className="hidden md:block text-base sm:text-base">
              transforming your mindset doesn’t have to be overwhelming. How you
              can live your dream life no matter how old you are, where you come
              from, or where you are right now.
            </p>
            <p className="md:my-6 lg:my-8 md:mx-2 ">
              You deserve this, and you can do this! Are you ready for your
              manifestations? Then YOU are in the right place.
            </p>
          </div>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl TimesNewRoman mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          P.S.
        </div>
        <div className="italic mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          I think it’s great that you have found your way to my Law of
          Attraction blog & manifestation community. That’s why I think it would
          be awesome for us to stay connected.
        </div>
        <div className="my-2 sm:my-4 md:my-6 lg:my-8 italic mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          Here are some of the best ways to bring our new online friendship to
          the next level…
        </div>
        <div className="italic mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          » Get YOUR FREE Guided Meditation Now
          <span
            className="text-[#ff2dee] font-semibold cursor-pointer"
            onClick={promo}
          >
            &nbsp;
            {">>"}CLICK HERE TO GET NOW.
          </span>
        </div>
        <div className="my-2 sm:my-4 italic mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          » Say hi! on&nbsp;
          <span className="text-[#ff2dee] font-semibold cursor-pointer">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {`->>`}Instagram
            </a>
          </span>
          &nbsp;and join over awesome women community in the family.
        </div>
        <div className="my-2 sm:my-4 italic mx-6 sm:mx-8  md:mx-32 lg:mx-48">
          » Join the and follow my &nbsp;
          <span className="text-[#ff2dee] font-semibold cursor-pointer">
            <a href="#" target="_blank" rel="noopener noreferrer">
              {`->>`} Pinterest.
            </a>
          </span>
        </div>
      </div>
      <div className="hidden sm:block text-center sm:my-4 md:my-6 lg:my-8">
        <h1 className="TimesNewRoman text-[10px] sm:text-xl md:text-2xl">
          "Become the CEO of your dream life is filled with hope, inspiration,
          and
        </h1>
        <h1 className="px-3 sm:px-0 TimesNewRoman text-[10px] sm:text-xl md:text-2xl">
          practical steps on how to make the Law of attraction work in your
          favour."
        </h1>
      </div>
      <div className="block my-2 sm:hidden text-base text-center TimesNewRoman px-4">
        "Become the CEO of your dream life is filled with hope, inspiration, and
        practical steps on how to make the Law of attraction work in your
        favour."
      </div>
      <div className="my-4 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width="258"
          height="147.5"
        />
      </div>
      <div className="my-4 hidden  lg:block text-center">
        <Image alt="flower" src="/images/flower.png" width="344" height="197" />
      </div>
      <div className="my-4 hidden sm:block  md:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="207" height="99" />
      </div>
      <div className="my-4 block sm:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="166" height="80" />
      </div>
      <div className="my-2 sm:my-4 md:my-6 lg:my-8 text-xl sm:text-2xl md:text-3xl text-center px-2 sm:px-0 tracking-wider font-Champagne">
        FREQUENTLY ASKED QUESTIONS
      </div>

      <div className=" mx-auto flex bg-[#F8ADF2] border-[1px] border-black w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <div className="mx-1 sm:mx-2 text-sm sm:text-2xl py-2 sm:py-4 ">
          Does the Law of Attraction really work?
        </div>
        <div
          className="flex justify-end w-[30px] sm:w-[50px] md:w-[140px] lg:w-[240px] md:right-[10rem] lg:right-[22rem] mt-[10px]  sm:mt-5 cursor-pointer"
          onClick={() => {
            minusBtn();
            plusBtn();
            qBtn();
          }}
        >
          <AiOutlinePlus
            className={`${
              plus ? "hidden" : ""
            }  text-base sm:text-2xl text-white `}
          />
          <HiMinusSm
            className={`${
              minus ? "hidden" : ""
            } text-base sm:text-2xl text-white`}
          />
        </div>
      </div>
      <div
        className={` ${
          q ? "hidden" : ""
        } bg-[#dbd3d3] py-2 px-2 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto border-[1px] border-t-0 border-black text-sm sm:text-base `}
      >
        Oh yes, like any universal law, the Law of Attraction works. And in the
        nearly 10 years of coaching women around the world, I have experienced
        so many great transformations. It is important that you understand that
        the Law of Attraction is not magic, but if you use it the right way,
        magical things can happen. And I can help you with ” using it the right
        way”.
      </div>

      <div className=" mx-auto flex bg-[#F8ADF2]  border-[1px] border-t-0 border-black w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <div className="mx-1 sm:mx-2 text-sm sm:text-2xl py-2 sm:py-4 ">
          Where can I get your free Guided Manifestation book?
        </div>
        <div
          className="flex justify-end w-[30px] sm:w-[30px] md:w-[30px] mx-5 sm:mx-4 md:mx-6 lg:mx-0  lg:w-[80px] md:right-[10rem] lg:right-[22rem] mt-[10px]  sm:mt-5 cursor-pointer"
          onClick={() => {
            minusBtn2();
            plusBtn2();
            qBtn2();
          }}
        >
          <AiOutlinePlus
            className={`${
              plus2 ? "hidden" : ""
            }  text-base sm:text-2xl text-white `}
          />
          <HiMinusSm
            className={`${
              minus2 ? "hidden" : ""
            } text-base sm:text-2xl text-white`}
          />
        </div>
      </div>
      <div
        className={` ${
          q2 ? "hidden" : ""
        } bg-[#dbd3d3] py-2 px-2 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto border-[1px] border-t-0 border-black text-sm sm:text-base `}
      >
        My best Guided Law of Attraction book, Now Become the CEO of Your Dream
        Life with this book, you can
        <span
          className="text-base sm:text-xl text-[#ff2dee] font-semibold italic cursor-pointer"
          onClick={promo}
        >
          {` >> `}CLICK HERE TO GET NOW.{` `}
        </span>
        The book is currently available as an e-book and audiobook only. As the
        readers of the books are spread all over the world and prefer a digital
        version, there is no print version available right now. If you are
        looking for the PRO version guide, than,
        <span
          className="text-base sm:text-xl text-[#ff2dee] font-semibold italic cursor-pointer"
          onClick={promo}
        >
          {` `}CLICK HERE.
        </span>
      </div>

      <div className=" mx-auto flex bg-[#F8ADF2] border-[1px] border-t-0 border-black w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <div className="mx-1 sm:mx-2 text-sm sm:text-2xl py-2 sm:py-4 ">
          Any more questions?
        </div>
        <div
          className=" flex justify-end w-[143px] sm:w-[243px] md:w-[335px] lg:w-[435px] md:right-[10rem] lg:right-[22rem] mt-[10px]  sm:mt-5 cursor-pointer"
          onClick={() => {
            minusBtn3();
            plusBtn3();
            qBtn3();
          }}
        >
          <AiOutlinePlus
            className={`${
              plus3 ? "hidden" : ""
            }  text-base sm:text-2xl text-white `}
          />
          <HiMinusSm
            className={`${
              minus3 ? "hidden" : ""
            } text-base sm:text-2xl text-white`}
          />
        </div>
      </div>
      <div
        className={` ${
          q3 ? "hidden" : ""
        } bg-[#dbd3d3] py-2 px-2 w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto border-[1px] border-t-0 border-black text-sm sm:text-base `}
      >
        I love to hear from you. Just send message on Contact page or send me
        message on
        <span className=" text-[#ff2dee] font-semibold italic cursor-pointer ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;&nbsp; Pinterest&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        or DM me on
        <span className="text-[#ff2dee] font-semibold italic cursor-pointer ">
          <a href="#" target="_blank" rel="noopener noreferrer">
            &nbsp;&nbsp;&nbsp;Instagram&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        I'm here for you. And in the meantime, check out my
        <span className="text-[#ff2dee] font-semibold italic cursor-pointer ">
          &nbsp;&nbsp;&nbsp;
          <Link href="/blog">MANIFESTATION BLOG</Link>
          &nbsp;&nbsp;&nbsp;
        </span>
        for some awesome Law of Attraction tips and hacks.
      </div>

      <div className="my-8 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width="258"
          height="147.5"
        />
      </div>
      <div className="my-8 hidden  lg:block text-center">
        <Image alt="flower" src="/images/flower.png" width="344" height="197" />
      </div>
      <div className="my-8 hidden sm:block  md:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="207" height="99" />
      </div>
      <div className="my-8 block sm:hidden text-center">
        <Image alt="flower" src="/images/flower.png" width="166" height="80" />
      </div>
      <div className="px-6 my-6 sm:my-8 text-center">
        <Image
          alt="product"
          src="/images/product-image.png"
          width="580"
          height="336"
        />
      </div>
      <div className="TimesNewRoman text-center text-2xl font-semibold my-2 sm:my-4 sm:text-3xl md:text-4xl lg:text-5xl italic">
        hey Gorgeous!
      </div>
      <div className="my-2 sm:my-4 font-black text-center text-xl sm:text-2xl md:text-3xl  font-Champagne">
        Don't Leave Empty Handed
      </div>
      <div className="my-2 sm:my-4 md:my-6  TimesNewRoman text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
        <h1 className="mx-10 sm:mx-0">
          Grab Your Free Manifestation Guide and
          <span className="sm:hidden">
            &nbsp;'Become the CEO of Your Dream Life' for&nbsp;
          </span>
          <span className="sm:hidden">&nbsp;FREE!&nbsp;</span>
        </h1>
        <h1 className="hidden sm:block">
          'Become the CEO of Your Dream Life' for
        </h1>
        <h1 className="hidden sm:block">FREE!</h1>
      </div>
      <div
        className="text-center my-2 mb-8  sm:my-4 md:my-6 lg:my-8"
        onClick={promo}
      >
        <button className="bg-[#2c2c2c] hover:bg-[#181818] text-white py-2 md:py-4 px-6 sm:px-8 md:px-14 lg:px-20 text-xl sm:text-2xl md:text-3xl">
          I WANT FREE GUIDE NOW
        </button>
      </div>
    </>
  );
};

export default About;
