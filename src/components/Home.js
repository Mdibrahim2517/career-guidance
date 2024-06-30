import React from "react";
import banner from "../assets/a1_2-removebg-preview.png"
import { motion } from "framer-motion";
import { fadeIn } from "./Variants"
const Home = () => {
    return (
        <>
            <div className='md:px-12 p-4 max-w-screen-2x1 mx auto mt-24' id='Home'>
                <div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-xl font-semibold text-primary px-5 text-center mb-0'>
                    <ul>
                        <li ><h1 className="pp title1 text-5xl m-3 animate__animated animate__zoomIn">Reach Your</h1></li>
                        <li><h1 className="pp title2 text-6xl mb-3 animate__animated animate__zoomIn">Professional Potential</h1></li>
                        <p className="pp titlep text-lg animate__animated animate__zoomIn" >Everyone has tons of work to get through. Some accept the frustration.</p>
                        <p className="pp titlep text-lg mb-5 animate__animated animate__zoomIn">Others choose Wordtune Generative AI to speed up their tasks.</p>
                    </ul>
                    <button className='bg-pt py-2 px-6 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-xl shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-7 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>Get Started </button>
                </div>

                <div className='gradientBg rounded-x1 rounded-md rounded-br-[80px] md:p-9 px-4 py-9' data-aos="fade-up" data-aos-duration="2000">
                    <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                        {/* banner image */}
                        <div
                            variants={fadeIn("down", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}>
                            <img src={banner} alt="" className='pp lg:h-[350px] rounded-br-[80px] rounded-br-[-80px] rounded-l-lg abt animate__animated animate__pulse animate__infinite	infinite' />
                        </div>

                        <div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className='md:w-3/5'>
                            <h2 className='md:text-5xl text-4xl font-bold text-white mb-6 leading-relaxed animate__animated animate__zoomIn'>Decode your leadership blueprint with our AI-driven models</h2>
                            <p className='text-[#EBEBEB] text-2x1 mb-8 animate__animated animate__zoomIn'>Our unique AI models can detect your leadership patterns faster and more accurately,
                                Discover your unique mental constructs that keep you down and make you grow.  </p>
                            <div>
                                <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-xl shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 animate__animated animate__pulse animate__infinite	infinite' data-aos="fade-up" data-aos-duration="1000">Get Guide </button>
                                <p className='text-[#EBEBEB] text-xs ml-2' data-aos="fade-up" data-aos-duration="2000">Try Guidance’s for free.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>

    )
}

export default Home;
