import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "./Variants"
const Price = () => {
    const [Yearly, setYearly] = useState(false);
    const packages = [
        { name: "Free", MonthlyPrice: 0, yearlyPrice: 1, desription: "Get a taste of what Wordtune can do for you" },
        { name: "Advance", MonthlyPrice: 13.8, yearlyPrice: 6.99, desription: "Unleash the power of AI and take your reading & writing to the next level." },
        { name: "Preimium", MonthlyPrice: 19.99, yearlyPrice: 9.99, desription: "Maximize your productivity with unlimited rewrites and summaries." }
    ]
    return (
        <div className='md:px-14 p-4 max-w-s mx-auto py-10 space-y-10' id='Prices'>
            <div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-center animate__animated animate__zoomIn">
                <h1 className="md:text-5xl text-3xl font-extrabold text-primary mb-2" data-aos="fade-up" data-aos-duration="1000">Plans and <span className='cursive'>Pricing</span></h1>
                <p className="text-tartiary md:text-xl mx-auto px-4 mt-5" data-aos="fade-up" data-aos-duration="1000">Choose how to level up your productivity</p>

                <div className="mt-12" data-aos="fade-up" data-aos-duration="1000">
                    <label htmlFor='toggle' className='inline-flex item-center cursor-pointer'>
                        <span className="mr-8 text-4x1 font-bold">MonthlyPrice</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out ">
                            <div className={`w-6 h-6 rounded-full ${Yearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-4x1 font-bold">Yearly</span>
                    </label>
                    <input type="checkbox" id="toggle" className="hidden" checked={Yearly} onChange={() => setYearly(!Yearly)} />
                </div>
            </div >

            <div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto animate__animated animate__zoomIn" data-aos="fade-up" data-aos-duration="1000">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-tl-3xl shadow-3x1 bg-[rgb(223,220,255)]" data-aos="fade-up" data-aos-duration="1000">
                        <h3 className="text-2xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className="text-tartiary text-center my-5">{pkg.desription}</p>
                        <p className='mt-5 text-center text-primary text-4x1 font-bold'>
                            {Yearly ? `$${pkg.yearlyPrice}` : `$${pkg.MonthlyPrice}`}<span className="text-base text-tartiary font-medium">/{Yearly ? 'year' : "monthly"}</span>
                        </p>
                        <div className='w-full mx-auto mt-8 flex item-center justify-center' data-aos="fade-up" data-aos-duration="1000">
                            <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary  shadow transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mb-1 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>Get Pay </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Price;
