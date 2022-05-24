import React from 'react'
import Image from 'next/image'


const Home = () => {
  const promo = () => {
    location.href = 'https://tinyurl.com/ynt2hf83';
  }
  return (
    <>
      <div className="my-4 sm:my-6 md:my-8  TimesNewRoman text-base sm:text-2xl md:text-3xl text-center">
        <h1>
          Welcome To World Largest
        </h1>
        <h1>
          Self-Belief and Manifestation Community
        </h1>
      </div>
      <div className="my-2 text-center px-8 sm:px-14 md:px-20">
        <Image
          alt="self-belief"
          src="/images/self.png"
          width='590'
          height='540'
          priority
        />
      </div>
      <div className="my-2">
        <h1 className="font-[Champagne] text-base sm:text-xl md:text-2xl text-center  ">
          Ask. Believe. Receive. Never Worked For You?
        </h1>
      </div>
      <div className="sm:my-4 mx-10 sm:mx-14 md:mx-26 lg:mx-32 my-2 grid sm:grid-cols-1 md:grid-cols-2 ">
        <div className="my-2 md:my-0  md:mx-8 lg:mx-10">
          <p className="text-base sm:text-base">
            <span className="TimesNewRoman text-3xl md:text-5xl ">
              Y
            </span>
            ou have heard all the “secrets” about manifesting? You invest hours in designing a vision board? Or You have written down affirmations 100 times a day? And you even tapped your fingers sore? But still, your BIG dreams haven’t manifested yet?
          </p>
        </div>
        <div className="my-2 md:my-0  md:mx-8 lg:mx-10">
          <p className="text-base sm:text-base">
            I get you, Gorgeous because I was there too. But you deserve to manifest a life you absolutely LOVE! And it’s my mission to help you with this. Many women are overwhelmed with the Law of Attraction and just don’t know where to start. You’re not alone, and I’m here to help.
          </p>
        </div>
      </div>
      <div className="hidden sm:block text-center my-2 sm:my-4">
        <h1 className="TimesNewRoman text-[10px] sm:text-xl md:text-2xl">
          "Become the CEO of your dream life is filled with hope, inspiration, and
        </h1>
        <h1 className="px-3 sm:px-0 TimesNewRoman text-[10px] sm:text-xl md:text-2xl">
          practical steps on how to make the Law of attraction work in your favour."
        </h1>
      </div>
      <div className="block sm:hidden text-base text-center TimesNewRoman px-4">
        "Become the CEO of your dream life is filled with hope, inspiration, and  practical steps on how to make the Law of attraction work in your favour."
      </div>
      <div className="my-4 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='258'
          height='147.5'
        />
      </div>
      <div className="my-4 hidden  lg:block text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='344'
          height='197'
        />
      </div>
      <div className="my-4 hidden sm:block  md:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='207'
          height='99'
        />
      </div>
      <div className="my-4 block sm:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='166'
          height='80'
        />
      </div>
      <div className="my-2 sm:my-4 px-2 sm:px-0">
        <h1 className="TimesNewRoman text-sm text-center sm:text-xl md:text-2xl lg:text-3xl">
          This is how you can make your dreams come true.
          Every single one of them.
        </h1>
      </div>
      <div className="bg-[#F8ADF2] my-2 sm:my-4 py-2 sm:py-4 md:py-6 lg:py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-[Champagne]">
          STEP ONE
        </h1>
        <h1 className="TimesNewRoman my-1 sm:my-2  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
          Become a Manifestation Pro.
        </h1>
        <div className="hidden md:block md:my-2 text-center">
          <Image
            src='/images/women-pride.png'
            alt='women'
            width='206'
            height='200'
          />
        </div>
        <div className="block md:hidden my-1 text-center">
          <Image
            src='/images/women-pride.png'
            alt='women'
            width='165'
            height='160'
          />
        </div>
        <div className="my-1 sm:my-2  mx-6 sm:mx-10  md:mx-24 lg:mx-64">
          Get started with the my manifestation secret book, teaching you not only the basics of the universal laws but also my advanced manifesting technique and how to say good-bye to your abundance blocks for good. You can choose between the book & audiobook bundle or go all PRO and get my signature manifesting method, including workbook and audio exercises.
        </div>
        <div className="cursor-pointer text-base sm:text-xl  text-[#ff2dee] font-semibold mx-6 sm:mx-10 md:mx-24 lg:mx-64" onClick={promo}>
          Learn More{`>>`}
        </div>
        <div className=" my-2 sm:my-4 ">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-normal  font-[Champagne]">
            STEP TWO
          </h1>
        </div>
        <div className="TimesNewRoman sm:my-1  text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center ">
          Create Your Daily Routine
        </div>
        <div className="text-center hidden md:block my-1 sm:my-2">
          <Image
            alt='notebook'
            src='/images/notebook.png'
            width='334'
            height='211'
          />
        </div>
        <div className="text-center hidden sm:block md:hidden my-1 sm:my-2">
          <Image
            alt='notebook'
            src='/images/notebook.png'
            width='267'
            height='168'
          />
        </div>
        <div className="text-center block sm:hidden my-1 sm:my-2">
          <Image
            alt='notebook'
            src='/images/notebook.png'
            width='214'
            height='134'
          />
        </div>
        <div className="my-1 sm:my-2  mx-6 sm:mx-10  md:mx-24 lg:mx-64">
          Make manifestation and personal development your daily habit and create your perfect law of attraction routine with my guided meditations, planners, workbooks, and journal prompts. After reading my book “Become the CEO of Your Dream Life,” you’ll know how important taking action is, so don’t waste any time.
        </div>
        <div className="cursor-pointer text-base sm:text-xl  text-[#ff2dee] font-semibold mx-6 sm:mx-10 md:mx-24 lg:mx-64" onClick={promo}>
          Get Started Now{`>>`}
        </div>
      </div>
      <div className="my-4 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='258'
          height='147.5'
        />
      </div>
      <div className="my-4 hidden  lg:block text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='344'
          height='197'
        />
      </div>
      <div className="my-4 hidden sm:block  md:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='207'
          height='99'
        />
      </div>
      <div className="my-4 block sm:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='166'
          height='80'
        />
      </div>
      <div className="mx-4 sm:mx-0 my-4 sm:my-6 md:my-8 tracking-wider text-base sm:text-xl md:text-2xl lg:text-3xl font-[Champagne] text-center animate-bounce">
        IF YOU CAN DREAM IT. YOU CAN MANIFEST IT.
      </div>
      <div className="mx-10 sm:mx-14 md:mx-26 lg:mx-32 grid grid-cols-1 md:grid-cols-2 my-4 sm:my-6 md:my-8">
        <div className="my-2 md:my-0  md:mx-8 lg:mx-10">
          <p className="text-base sm:text-base">
            <span className="TimesNewRoman text-3xl md:text-5xl ">
              Y
            </span>
            ou want to manifest [ insert your BIG dream here ] – but something is still holding you back? As an NLP and mindset coach with over a decade of experience, I know your struggles. To manifest the life you love, you need to understand that “ask, believe, receive”, is just not enough.
          </p>
          <p className="my-1 sm:my-2 ">
            You need a bullet-proof action plan. The problem is that there are so many misconceptions about the Law of Attraction that most of us get overwhelmed, and this stops us from taking action. I know this because I was right there myself, many years back.
          </p>
        </div>
        <div className="md:my-2 my-1 md:mx-8 lg:mx-10">
          <p className="  text-base sm:text-base">
            That’s why I wrote down the epiphanies I had when my dreams finally started to manifest. And I created my advanced signature manifestation formula, a proven system that puts YOU in control of the manifesting process. No more waiting and hoping—or even dancing under the full moon. Well, except you want to.
          </p>
        </div>
      </div>
      <div className="my-4 hidden md:block lg:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='258'
          height='147.5'
        />
      </div>
      <div className="my-4 hidden  lg:block text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='344'
          height='197'
        />
      </div>
      <div className="my-4 hidden sm:block  md:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='207'
          height='99'
        />
      </div>
      <div className="my-4 block sm:hidden text-center">
        <Image
          alt="flower"
          src="/images/flower.png"
          width='166'
          height='80'
        />
      </div>
      <div id='mgc' className="my-2 sm:my-4 md:my-6 lg:my-8 text-center TimesNewRoman text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:mx-32">
        The Law of Attraction is not magic. But when you know how to use it, magical things can happen.
      </div>
      <div className="md:py-8 my-4 sm:my-6 md:my-8 bg-[#F8ADF2] grid md:grid-cols-2 ">
        <div className="pt-4  md:hidden text-center TimesNewRoman uppercase text-xl sm:text-2xl">
          <h1 className="">
            The &nbsp;
            <span className="italic ">
              only
            </span>&nbsp;
            MANIFESTING
          </h1>
          <h1 className="">
            BOOK YOU'LL EVER NEED
          </h1>
        </div>
        <div className="my-2 sm:my-4 px-2 sm:px-4 md:px-0">
          <Image
            alt='product'
            src='/images/product-image.png'
            width='1740'
            height='1010'
          />
        </div>
        <div className="hidden md:block text-center md:px-2 TimesNewRoman uppercase text-xl sm:text-2xl md:text-3xl        lg:text-4xl">
          <h1 className="">
            The &nbsp;
            <span className="italic ">
              only
            </span>&nbsp;
            MANIFESTING
          </h1>
          <h1 className="">
            BOOK YOU'LL EVER NEED
          </h1>
        <div className="normal-case md:mx-8 md:my-2 lg:my-4 lg:mx-24 text-center text-xl">
          It takes out all the fluff and gives you hands-on advice on how to take inspired action and make the Law of Attraction work for YOU
        </div>
        <div className="text-2xl   ">
          <button className="text-white hover:text-black bg-[#f853ea] py-4 md:px-12 lg:px-24" onClick={promo}>
          Yes I Want My Copy
          </button>
        </div>
        </div>
        <div className="mx-2 sm:mx-4 md:hidden text-center text-base">
          It takes out all the fluff and gives you hands-on advice on how to take inspired action and make the Law of Attraction work for YOU
        </div>
        <div className="pb-4 my-2 sm:my-4 text-xl sm:text-2xl block text-center md:hidden">
          <button className="text-white hover:text-black  bg-[#f853ea] py-2 sm:py-4 px-4 sm:px-8 " onClick={promo}>
          Yes I Want My Copy
          </button>
        </div>

      </div>

    </>

  )
}


export default Home