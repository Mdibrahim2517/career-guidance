import React from 'react'
import logo from "../assets/logo3.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2x1 mx-auto text-white ">
            <div className='my-12 flex flex-col md:flex-row gap-10 animate__animated animate__zoomIn'>
                <div className='md:w-1/2 space-y-8'>
                    <a hraf="/" className='text-2x1 font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt='' className='w-20 inline-block items-center' /><span className='text-white text-xl'>Thee Castable</span>
                    </a>
                    <p className='md:w1-1/2'>Guidance’s Business prioritizes robust security<br></br>
                        for your Generative AI usage.<br></br>
                        Our Traceless security mode guarantees data<br></br>
                        privacy by never utilizing or storing your businesses' data.</p>
                </div>

                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-3 mt-5'>
                        <h3 className='text-xl'>platform</h3>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Careers</a>
                            <a href='/' className='block hover:text-gray-300'>Privacy policy</a>
                            <a href='/' className='block hover:text-gray-300'>Terms of service</a>
                            <a href='/' className='block hover:text-gray-300'>FAQ</a>
                            <a href='/' className='block hover:text-gray-300'>Plans</a>
                        </ul>
                    </div>

                    <div className='space-y-3 mt-5'>
                        <h3 className='text-xl'>Learn more</h3>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Rewrite</a>
                            <a href='/' className='block hover:text-gray-300'>AI writing</a>
                            <a href='/' className='block hover:text-gray-300'>Blog</a>
                            <a href='/' className='block hover:text-gray-300'>Help center</a>
                            <a href='/' className='block hover:text-gray-300'>AI content detector</a>
                        </ul>
                    </div>

                    <div className='space-y-3 mt-5'>
                        <h3 className='text-xl'>Guidance’s</h3>
                        <ul className='space-y-3'>
                            <a href='/' className='block hover:text-gray-300'>Chrome extension</a>
                            <a href='/' className='block hover:text-gray-300'>Microsoft Edge extension</a>
                            <a href='/' className='block hover:text-gray-300'>Wordtune for iOS</a>
                            <a href='/' className='block hover:text-gray-300'>Wordtune for business</a>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 animate__animated animate__zoomInLeft'>
                <p> All Rights Reserved <span className='cursive text-bold text-2xl hover:text-5xl'>© Thee Castable in Ibrahim   </span>   2024</p>
                <div className='flex items-center space-x-5'>
                    <a href='\' className='text-3xl cursor-pointer hover:text-[rgb(253,117,105)]'><FaInstagram /></a>
                    <a href='\' className='text-3xl cursor-pointer hover:text-[rgb(253,117,105)]'><FaFacebookF /></a>
                    <a href='\' className='text-3xl cursor-pointer hover:text-[rgb(253,117,105)]'><FaTwitter /></a>
                    <a href='\' className='text-3xl cursor-pointer hover:text-[rgb(253,117,105)]'><FaLinkedin /></a>
                    <a href='\' className='text-3xl cursor-pointer hover:text-[rgb(253,117,105)]'><FaYoutube /></a>
                </div>
            </div>

        </div>

    )
}

export default Footer;