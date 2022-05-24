import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {GoThreeBars} from 'react-icons/go'
import { useState } from 'react'

const Navbar = (props) => {
    const[mobNav, setMobNav] = useState(true);
    const navBtn = () => {
        setMobNav(!mobNav);
    }
    const router = useRouter();
    return (
        <>
            <nav className="bg-[#f8adf2] lg:py-4 md:py-3 py-2">
                <div className="my-4 md:my-2 font-[Amarillo] text-center md:text-left lg:mx-4 sm:mx-3 mx-2  sm:text-2xl text-xl ">
                    <span className="md:hidden" onClick={navBtn}>
                        <GoThreeBars className="text-[1.7rem] sm:text-3xl cursor-pointer  absolute top-6  right-0 mx-4 border-[2px] border-black p-[2px] rounded-md " />
                    </span>
                    <Link href="/">
                        {props.sitetitle}
                    </Link>
                </div>
                <div className="text-[#251f1f] font-black font-[Champagne]">
                    <ul className={`${mobNav ? "hidden":""} my-2 sm:my-4 md:my-3 text-center md:text-left  md:flex list-none text-2xl  md:mx-4 mx-2  md:absolute md:top-4 md:right-0`}>
                        <li className={`my-2 sm:my-4 md:my-0 ${router.asPath==='/'?"active":""} md:mx-2 `}>
                            <Link href="/">
                                {props.home}
                            </Link>
                        </li>
                        <li className={`my-2 sm:my-4 md:my-0 ${router.asPath==='/blog'?"active":""} md:mx-2 `}>
                            <Link href="/blog">
                                {props.blog}
                            </Link>
                        </li>
                        <li className={`my-2 sm:my-4 md:my-0 ${router.asPath==='/about'?"active":""} md:mx-2 `}>
                            <Link href="/about">
                                {props.about}
                            </Link>
                        </li>
                        <li className={`my-2 sm:my-4 md:my-0 ${router.asPath==='/contact'?"active":""} md:mx-2 `}>
                            <Link href="/contact">
                                {props.contact}
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar