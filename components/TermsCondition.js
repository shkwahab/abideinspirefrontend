import Link from "next/link";
import React from "react";

const TermsCondition = () => {
  return (
    <>
      <div className="font-bold mt-10 mb-2 mx-4 sm:mx-8 md:mx-14  lg:mx-20 uppercase font-sans text-2xl sm:text-3xl md:text-4xl">
        Terms of Use
      </div>
      <div className=" mx-4 sm:mx-8 md:mx-14 lg:mx-20 my-2 font-sans">
        <p className="font-bold">1. BINDING EFFECT</p>
        This is a binding agreement between you and GigaCourse.com (us, we,
        Non-Profit Organization). By using the Internet site located at
        https://gigacourse.com (the Site), you agree to abide by these Terms of
        Use. If at any time you find these Terms of Use unacceptable, you must
        immediately leave the Site and cease all use of it.
        <p className="font-bold">2. PRIVACY POLICY</p>
        We respect your privacy and permit you to control the treatment of your
        personal information. A complete statement of our current privacy policy
        can be found by &nbsp;
        <span className="text-pink-500 hover:text-pink-800">
          <Link href="/privacypolicy">clicking here.</Link>
        </span>
        &nbsp; Our privacy policy is expressly incorporated into this Agreement
        by this reference.
        <p className="font-bold">3. GOVERNING LAW</p>
        These Terms of Use shall be construed in accordance with and governed by
        the laws of California and the United States, without reference to rules
        regarding conflicts of law. This Site is intended for use by individuals
        based in the United States of America.
        <p className="font-bold">4. MINIMUM AGE</p>
        You must be at least 18 years old to access and participate on this
        site. You guarantee and warrant you are at least 18 years old and are
        able to enter into this Agreement from a legal perspective.
      </div>
    </>
  );
};

export default TermsCondition;
