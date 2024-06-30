import React from 'react'
import AboutPic from "../assets/ai 1.jpg"
import AboutPic2 from "../assets/a15.jpg"
import { fadeIn } from "./Variants"
const About = () => {
    return (
        <>
            <div className='md:px-14 p-4 max-w-s mx-auto space-y-10 '>
                <div className='text-xl font-semibold text-primary px-5 text-center leading-6 mt-0 animate__animated animate__zoomIn' id='About'>
                    <h1 className='text-6xl text-primary font-bold mb-6' data-aos="fade-up" data-aos-duration="1000">AI-driven that’s <span className="cursive animate__animated animate__tada">empowering,</span></h1>
                    <p className="text-1xl text-tartiary mb-20" data-aos="fade-up" data-aos-duration="1000">Not overpowering</p>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-7 " data-aos="fade-up" data-aos-duration="1000">
                    <div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:w-auto'>
                        <img src={AboutPic} alt="" className='animate__animated animate__zoomIn rounded-lg hover:brightness-200 cursor-zoom-in' />
                    </div>

                    <div className="md:w-4/5 animate__animated animate__zoomIn">
                        <h2 className="md:text-4xl text-3xl font-bold text-primary mb-5 lead-normal">With you,
                            Generative <span className='title1'> AI</span> you can rely on
                        </h2>
                        <p className='text-tartiary text-lg mb-7'>We are a team of researchers, health care professionals, students, Authors, Leaders and coaches defining global people models using Al driven platforms.
                        </p>
                        <p className='text-tartiary text-lg mb-7'>Our Al models decode your professional blueprint in a systematic way with our algorithms being developed based on our research over 5 years. These models can find out how your inherent constructs help or limit you to acheive your goals
                        </p>
                        <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-xl shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 animate__animated animate__pulse animate__infinite	infinite'>More</button>
                    </div>

                </div>

                <div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="flex flex-col md:flex-row-reverse justify-between items-center gap-8" data-aos="fade-up" data-aos-duration="1000">

                    <div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className='md:w-auto'>
                        <img src={AboutPic2} alt="" className='animate__animated animate__zoomIn rounded-lg hover:brightness-200 cursor-zoom-in' />
                    </div>

                    <div className="md:w-4/5 animate__animated animate__zoomIn">
                        <h2 className="md:text-4xl text-3xl font-bold text-primary mb-5 lead-normal">With you,
                            anywhere you <span className="cursive ">Work..</span>
                        </h2>
                        <p className='text-tartiary text-lg mb-7'>Thee Castable Beta'
                        </p>
                        <p className='text-tartiary text-lg mb-7'>This is an Human and Al generated professional blueprint people models, we are currently in beta and contineously validating these models while working hard to improve the precise Al models.
                        </p>                        <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-xl shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 animate__animated animate__pulse animate__infinite	infinite'>More</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
