import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="bg-black py-4 sm:py-6 md:py-10 ">
        <div className="flex justify-center">
          <h1 className="py-4 px-2 md:px-2 bg-white font-black w-[85%] sm:w-[70%] md:w-[60%] TimesNewRoman text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-center">
            Do you have a question? Or are you dying to tell me something?
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block mx-10 my-10">
          <Image
            alt="hellofriends"
            src="/images/hifriends.jpg"
            width={500}
            height="750"
          />
        </div>
        <form action="/contact" method="POST">
          <div className="lg:my-20">
            <div className="lg:mr-32 md:text-xl  font-medium font-Champagne">
              We aim to deliver a service that makes you walk away from your
              inbox with a big smile. Our customer success team will get back to
              you within 24 hours on workdays. (European time zone!)
            </div>
            <div className="my-4 flex">
              <div className=" hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                />
              </div>
              <div className="mx-10 hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                />
              </div>
            </div>
            <div className="mr-10 hover:border-[1px] border-black border-opacity-25">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="w-[630px] outline-none border-b-[1px]
               border-black py-4 px-2 font-Champagne text-xl "
              />
            </div>

            <div className="my-4">
              <textarea
                id="message"
                cols="50"
                rows="10"
                placeholder="Message"
                className="outline-none border-[1px] border-black py-2 px-4 "
              />
            </div>
            <div className=" ">
              <input
                id="sendmessage"
                type="submit"
                value="Send"
                className="cursor-pointer my-10 hover:my-4 transition-all duration-500 text-left px-4 py-4 w-[630px] bg-gray-400 hover:bg-black text-white "
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
