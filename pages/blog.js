import React from "react";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Search from "./Search";
import Head from "next/head";

const blog = (props) => {
 
  const [showPerPage, setShowPerPage] = useState(6);
  const[pagination,setPagination]=useState({
    start:0,
    end:showPerPage,   
});
const onPaginationChange=(start,end)=>{
    setPagination({
        start,
        end
    })
}


  return (
    <>
    <Head>
      <title>Blog-Abide Inspire</title>
      <meta name="description" content="Abide & Inspire is the Community of the Self Belief and Manifestation. We believe in the power of self-belief and manifestation.It’s no secret that what you put out into the universe is what you’ll get back. Manifestation is a real thing as long as you believe in yourself and put your mind to it." />
      <meta name="keywords" content="inspire,abide,abide meditation,abide daily,inspire grace,inspire humility,driven to inspire u,abide bible,how to start career driven to inspire u,inspirational video,bible inspiration,inspiration,spirit,inspirational,bible review blog,above inspiration,holy spirit,morning inspiration,christian inspiration,morning above inspiration,living in the spirit,praying in the spirit,dream big,bible love,depression,solitaires,resolutions,blog,search,posts,
      inspire,abide,abide meditation,folk inspire,abide bible project purpose,inspire daily,abide 5 min daily devotions,abide daily devotional,abide daily meditation,abide daily devotionals,abide app,abide 5 minute meditation,abide 5 min daily devotion,abide 5 min daily meditation,abide 5 minute daily devotion,abide bible,abide with me,abide anxiety,abide app meditation,step by step on how to abide in the secret place,law of attraction,the law of attraction,law of attraction money,law of attraction explained,law of attraction success,what is the law of attraction,law of attraction (religion),law of attraction coaching,how law of attraction works,law of attraction solutions,law of attraction technique,law of attraction meditation,the law of attraction explained,law of attraction secret,how to use the law of attraction,law of attraction new,law of attraction mind,manifestation,manifestation techniques,money manifestation,manifestation meditation,what is manifestation,manifestation methods,scripting manifestation,neville goddard manifestation,manifestation tips,963 hz manifestation,manifestation journal,power of manifestation,miracle manifestation,music for manifestation,manifestation technique,manifestation frequency,the power of manifestation,meditation manifestation,beerbiceps manifestation,affirmations,i am affirmations,positive affirmations,affirmation,affirmations for success,morning affirmations,abundance affirmations,sleep affirmations,money affirmations,wealth affirmations,affirmations for wealth,success affirmations,self love affirmations,bob baker affirmations,affirmations i am,be inspired affirmations,health affirmations,powerful affirmations,confidence affirmations,affirmations for abundance,affirmation meditation,meditation,guided meditation,meditation music,meditation for anxiety,sleep meditation,morning meditation,healing meditation,meditation guided,10 minute meditation,mindfulness meditation,meditation for beginners,zen meditation,quick meditation,guided meditation 10 min,fast meditation,guided mindfulness meditation,guided sleep meditation,guided meditation morning,guided meditation 10 minutes,meditations,meditation morning,self love meditation" />
    </Head>
      <div className=" bg-black py-4 flex justify-center">
        
            <Search />
          
      </div>

      <>
        <div className="container sm:w-[500px] lg:w-[700px] mx-auto  md:my-10 ">
          {props.post.data.slice(pagination.start,pagination.end).map((item) => {
            return (
              <div
                key={item.attributes.slug}
                className="m-4 border-2 rounded-lg border-gray-100 shadow-sm"
              >
                <div className="lg:h-[300px] h-[135px] sm:h-[225px] w-full overflow-hidden">
                <img
                  src={
                    item.attributes.image
                      ? item.attributes.image.data.attributes.name
                      : null
                  }
                  alt="blog"
                  className=" transition-all  duration-300 sm:hover:scale-125 sm:hover:object-fill object-cover "
                />
                </div>
                <h1 className="text-sm sm:text-base text-gray-400  mx-4 mt-1 font-Champagne">
                  {item.attributes.category ? item.attributes.category : null}
                </h1>
                <h1 className="mx-4 posttitle  my-1 text-xl sm:text-2xl TimesNewRoman">
                  {item.attributes.title ? item.attributes.title : null}
                </h1>
                <p className="mx-4 mt-1  sm:text-lg font-Champagne">
                  {item.attributes.descriptions
                    ? item.attributes.descriptions
                    : null}
                </p>
                <button className="m-4  sm:text-xl font-sans text-pink-500">
                  <Link
                    className="text-pink-500 inline-flex items-center md:mb-1 lg:mb-0"
                    href={`/blog/${item.attributes.slug}`}
                  >
                    {`Learn More >>`}
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </>
     
            <Pagination showPerPage={showPerPage}
                        onPaginationChange={onPaginationChange}
                        total={props.post.data.length}
              />
             
    </>
  );
};
export async function getServerSideProps(context) {
  const { NEXT_PUBLIC_STRAPI_URL } = process.env;
  let a = fetch(
    `${NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*&pagination[page]=1&pagination[pageSize]=1000`
  );
  let post = await a.then((res) => res.json());

  return {
    props: { post: post },
  };
}

export default blog;
