import React from "react";
const Subscribe = () => {
  return (
    <>
      <div className="text-center post mt-8S sm:mt-14 md:mt-20">
        <h1>Subscribe to our Newsletter</h1>
      </div>
      <div id="newsletter" className="text-center post">
        <div id="first-email-signup-formmc_embed_signup">
          <form
            action="https://abideinspire.us10.list-manage.com/subscribe/post?u=d11b385a8a9c032f037308f99&amp;id=83ea9d4a4b"
            method="post"
            id="first-email-signup-formmc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="first-email-signup-formmc_embed_signup_scroll" className="sm:my-4 mt-2 mb-3">
              <input
                type="email"
                name="EMAIL"
                className="outline-none border-2 border-black rounded-md py-2 px-1 sm:py-4 sm:px-2 mx-auto w-[280px] sm:w[500px]  md:w-[600px] lg:w-[800px]"
                placeholder="Enter Your Email address"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                name="subscribe"
                id="first-email-signup-formmc-embedded-subscribe"
                className="bg-pink-500 hover:bg-pink-700 text-white py-2 text-xl sm:text-2xl font-sans px-4 rounded-sm"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
