import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import Head from "next/head";
import Subscribe from "../../components/Subscribe";


const Slug = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;
  const md = new MarkdownIt({ html: true });
  const htmlContent = md.render(post.attributes.content);
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="-50IMhLBITA2hpOBi_Sm8OycJwIK1M6_BJxnCd-3kgc" />
      <title>Abide Inspire-{post.attributes.title}</title>
      <meta name="description" content={post.attributes.descriptions} />
      <meta name="keywords" content={post.attributes.keywords} />
    </Head>
      <div className="post mx-[2rem] sm:mx-[6rem] md:mx-[8rem] lg:mx-[12rem] mt-10 mb-2 sm:my-4  md:my-6 lg:my-10">
        <div className="font-semibold TimesNewRoman text-center text-2xl sm:text-4xl md:text-4xl lg:text-5xl">
          {post.attributes.title}
        </div>

        <section className="my-2  sm:my-4 "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></section>
        <Subscribe />
     
      </div>
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
      <div className="text-center">
        <Image
          src="/images/Free-Guided-Meditations-Manifestation.png"
          width="500"
          height="500"
        />
      </div>
      <div className="font-bold  my-4   text-center  text-5xl  md:text-6xl font-Darleston">
        hey Gorgeous
        <span className="font-sans font-thin italic text-5xl">!</span>
      </div>
      <div className="my-2 sm:my-4 font-black text-center text-xl sm:text-2xl md:text-3xl  font-Champagne">
        Don't Leave Empty Handed
      </div>
      <div className="my-2 sm:my-4 md:my-6  TimesNewRoman text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
        <h1 className=" mx-[1rem] sm:mx-[6rem] md:mx-[8rem] lg:mx-[13rem]">
          Grab My Favorite Guided Meditation Session to Reprogram Your
          Subconscious Mind & Attract the Life You Love!
        </h1>
      </div>
      <div  className="text-center my-2 mb-8  sm:my-4 md:my-6 lg:my-8">
      <Link href="https://tinyurl.com/ynt2hf83">
        <button  className="mb-20 font-sans bg-black text-white py-2 md:py-4 px-6 sm:px-8 md:px-14 lg:px-20 text-xl sm:text-2xl md:text-3xl">
            I WANT FREE MEDITATION
        </button>
        </Link>
      </div>
      
    </>
  );
};

export async function getServerSideProps(context) {
  const { NEXT_PUBLIC_STRAPI_URL } = process.env;
  let a = fetch(
    `${NEXT_PUBLIC_STRAPI_URL}/api/posts?filters[slug]=` + context.query.slug

    // process.env.NEXT_PUBLIC_STRAPI_URL + "/api/posts?filters[slug]=" + context.query.slug
  );
  let post = await a.then((res) => res.json());
  return {
    props: { post: post.data[0] },
  };
}

export default Slug;
