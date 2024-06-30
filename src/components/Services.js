import React from 'react'
import banner from "../assets/ai6.png"
import { motion } from "framer-motion";
import { fadeIn } from "./Variants"
const Services = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2x1 mx-auto my-12 " id='Services'>
            <div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='gradientBg2 rounded-x1 rounded-md rounded-se-full rounded-bl-full  md:p-9 px-4 py-9'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 animate__animated animate__zoomIn'>
                    {/* banner image */}
                    <div>
                        <img src={banner} alt="" className='lg:h-[350px] rounded-br-[80px] rounded-br-[-80px] rounded-l-lg ' data-aos="fade-up" data-aos-duration="1000" />
                    </div>
                    <div className='md:w-3/5 ml-32'>
                        <h2 className='md:text-5xl text-4xl font-bold text-black mb-6 leading-relaxed' data-aos="fade-up" data-aos-duration="1000">Services Enterprise <span className="cursive">level</span></h2>
                        {/* <p className='text-black text-lg mb-8 ' data-aos="fade-up" data-aos-duration="1000">Your approach towards work makes you appear focussed, aggressive and commanding <br></br>
                            You give the impression that you are skilled, diligent and hardworing<br></br>
                            You acheive most of it with caution and avoid pitfalls<br></br>
                        </p> */}
                        <ul className='text-black text-lg mb-8' data-aos="fade-up" data-aos-duration="1000">
                            <li>Your approach towards work makes you appear focussed, aggressive and commanding</li>
                            <li className='mt-2'>You give the impression that you are skilled, diligent and hardworing</li>
                            <li className='mt-3'>You acheive most of it with caution and avoid pitfalls</li>
                        </ul>
                        <div>
                            <button className='bg-black py-2 px-4 transtion-all duration-300 rounded-full text-white
                    hover:bg-primary text-xl shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 animate__animated animate__pulse animate__infinite	infinite'data-aos="fade-up" data-aos-duration="2000">Help 💡</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
