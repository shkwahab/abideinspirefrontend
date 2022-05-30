import React from "react";
import Image from "next/image";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d95ixma",
        "template_ijspuje",
        form.current,
        "WiLbFtIvphP4rOkKX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [onsuccesmessage, setOnsuccesmessage] = useState(true);
  const onSuccesmessage= () => {
    setOnsuccesmessage(!onsuccesmessage);
  };
  

  return (
    <>
      <div className="bg-black py-4 sm:py-6 md:py-10 ">
        <div className="flex justify-center">
          <h1 className="py-4 px-2 md:px-2 bg-white font-black w-[85%] sm:w-[70%] md:w-[60%] TimesNewRoman text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-center">
            Do you have a question? Or are you dying to tell me something?
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block md:hidden ml-4 mr-2 my-10">
          <Image
            alt="hellofriends"
            src="/images/hifriends.jpg"
            width={500}
            height="900"
          />
        </div>
        <div className="block text-center sm:hidden  my-4">
          <Image
            alt="hellofriends"
            src="/images/hifriends.jpg"
            width={250}
            height="350"
          />
        </div>
        <div className="hidden  md:block  mx-10 my-10">
          <Image
            alt="hellofriends"
            src="/images/hifriends.jpg"
            width={500}
            height="750"
          />
        </div>

        <div className="mx-4 my-4 sm:my-12 md:my-10 lg:my-16">
          <div className="sm:mr-4 md:mr-8 lg:mr-12 md:text-xl font-medium font-Champagne">
            We aim to deliver a service that makes you walk away from your inbox
            with a big smile. Our customer success team will get back to you
            within 24 hours on workdays. (European time zone!)
          </div>
          <form ref={form} method="POST" onSubmit={sendEmail}>
            <div className=" my-4 flex">
              <div className="lg:block hidden hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  size="14"
                  required
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="fname"
                />
              </div>
              <div className="lg:hidden md:block hidden hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  required
                  size="10"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="fname"
                />
              </div>
              <div className="hidden sm:block md:hidden hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  required
                  size="8"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="fname"
                />
              </div>
              <div className="block sm:hidden hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  id="fname"
                  size="6"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="fname"
                />
              </div>
              <div className="lg:block hidden mx-4 hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  id="lname"
                  size="14"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="lname"
                />
              </div>
              <div className="lg:hidden md:block hidden mx-4 hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  id="lname"
                  size="10"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="lname"
                />
              </div>
              <div className="sm:block md:hidden hidden mx-4 hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  id="lname"
                  size="8"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="lname"
                />
              </div>
              <div className="sm:hidden block mx-10 hover:border-[1px] border-black border-opacity-25">
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  id="lname"
                  size="6"
                  className="outline-none border-b-[1px] border-black py-4 px-2 font-Champagne text-xl "
                  name="lname"
                />
              </div>
            </div>
            <div className="lg:block w-[505px] hidden mr-10 hover:border-[1px] border-black border-opacity-25">
              <input
                type="email"
                required
                placeholder="Email"
                id="email"
                className="w-[500px] outline-none border-b-[1px]
               border-black py-4 px-2 font-Champagne text-xl "
                name="email"
              />
            </div>
            <div className="lg:hidden w-[355px] md:block hidden mr-10 hover:border-[1px] border-black border-opacity-25">
              <input
                type="email"
                required
                placeholder="Email"
                id="email"
                className="w-[350px] outline-none border-b-[1px]
               border-black py-4 px-2 font-Champagne text-xl "
                name="email"
              />
            </div>
            <div className="md:hidden w-[305px] sm:block hidden mr-10 hover:border-[1px] border-black border-opacity-25">
              <input
                type="email"
                required
                placeholder="Email"
                id="email"
                className="w-[300px] outline-none border-b-[1px]
               border-black py-4 px-2 font-Champagne text-xl "
                name="email"
              />
            </div>
            <div className="block w-[285px] sm:hidden  hover:border-[1px] border-black border-opacity-25">
              <input
                type="email"
                required
                placeholder="Email"
                id="email"
                className="w-[280px] outline-none border-b-[1px]
               border-black py-4 px-2 font-Champagne text-xl "
                name="email"
              />
            </div>

            <div className="lg:block hidden my-4">
              <textarea
                id="message"
                required
                cols="50"
                rows="10"
                placeholder="Message"
                className="outline-none border-[1px] border-black py-2 px-4 "
                name="message"
              />
            </div>
            <div className="lg:hidden hidden md:block my-4">
              <textarea
                id="message"
                required
                cols="35"
                rows="10"
                placeholder="Message"
                className="outline-none border-[1px] border-black py-2 px-4 "
                name="message"
              />
            </div>
            <div className="md:hidden hidden sm:block my-4">
              <textarea
                id="message"
                cols="28"
                rows="10"
                required
                placeholder="Message"
                className="outline-none border-[1px] border-black py-2 px-4 "
                name="message"
              />
            </div>
            <div className="block sm:hidden my-4">
              <textarea
                id="message"
                required
                cols="25"
                rows="10"
                placeholder="Message"
                className="outline-none border-[1px] border-black py-2 px-4 "
                name="message"
              />
            </div>
            <div className="lg:block hidden">
              <input
                id="sendmessage"
                type="submit"
                value="Send"
                onClick={onSuccesmessage}
                className="cursor-pointer my-10 hover:my-4 transition-all duration-500 text-left px-4 py-4 w-[500px] bg-gray-400 hover:bg-black text-white "
              />
            </div>
            <div className="md:block lg:hidden hidden">
              <input
                id="sendmessage"
                type="submit"
                value="Send"
                onClick={onSuccesmessage}
                className="cursor-pointer my-6 hover:my-4 transition-all duration-500 text-left px-4 py-4 w-[350px] bg-gray-400 hover:bg-black text-white "
              />
            </div>
            <div className="md:hidden sm:block hidden">
              <input
                id="sendmessage"
                type="submit"
                value="Send"
                onClick={onSuccesmessage}
                className="cursor-pointer my-4 hover:my-2 transition-all duration-500 text-left px-4 py-4 w-[300px] bg-gray-400 hover:bg-black text-white "
              />
            </div>
            <div className="block sm:hidden">
              <input
                id="sendmessage"
                type="submit"
                value="Send"
                onClick={onSuccesmessage}
                className="cursor-pointer my-4 hover:my-1 transition-all duration-500 text-left px-4 py-4 w-[280px] bg-gray-400 hover:bg-black text-white "
              />
            </div>
            <div className={ `${onsuccesmessage?"hidden":""} font-sans sm:text-xl`}>
              Your Message has been sent! Thank you for reaching out to us.
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
