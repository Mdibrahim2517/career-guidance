import React, { useState } from "react";
import logo from "../assets/logo3.png"
import { AiOutlineLogin } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";
const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!MenuOpen);
    }
    const navItems = [
        { link: "Home", path: "Home" },
        { link: "Feature", path: "Feature" },
        { link: "About", path: "About" },
        { link: "Prices", path: "Prices" },
        { link: "Services", path: "Services" }
    ]


    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2x1 border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className="text-x1 container mx-auto flex justify-between items-center">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className='text-2x1 font-semibold flex items-center space-x-3 text-black text-xl cursor-default'>
                            <img src={logo} alt="" className=" pp w-12 inline-block items-right rounded-full mt-1 cursor-default" />
                            <span className="cursor-default text-pt2 font-semibold text-3xl">Thee Castable</span></a>
                        <ul className='pp md:flex  space-x-12 text-xl font-medium hidden cursor-pointer '>
                            {
                                navItems.map(({ link, path }) => <Link activeClass="active" spy={true} smooth={true} offset={-100} key={link} to={path} className="block hover:text-secondary active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">{link}</Link>)
                            }
                        </ul>
                    </div>

                    <div className="space-x-12 hidden md:flex item-center">
                        <a href="/Sign" target="" className="hidden lg:flex items-center hover:text-pt2 text-xl transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"> <AiOutlineLogin className='mr-2' /><span>Sign In</span></a>
                        <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-xl shadow transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'><a href="/">Get Started</a></button>
                    </div>

                    {/* {Menu button} */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white  focus:outline-none focus:text-gray-300'>
                            {
                                MenuOpen ? (<FaXmark className='w-6 h-6 text-primary hover:text-secondary' />) :
                                    (<BiMenuAltRight className='w-6 h-6 text-primary hover:text-secondary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            {/* {Responsive nav bar 👇} */}
            <div className={` bg-contain z-50 space-y-4 px-4 pt-24 pb-5 bg-white text-primary text-xl md:hidden ${MenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`} id="z-auto">
                {
                    navItems.map(({ link, path }) => <Link activeClass="active" spy={true} smooth={true} offset={-80} key={link} to={path} className='block hover:text-bar cursor-pointer'
                        onClick={toggleMenu}>{link}</Link>)
                }
                <div className="">
                    <a href="/Sign" target="" className="items-center hover:text-pt2 text-xl transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">Sign In</a><br></br>
                    <button className='bg-pt py-2 px-4 transtion-all duration-300 rounded-full
                    hover:text-white hover:bg-primary text-lg shadow transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all ml-40'><a href="/">Get Started</a></button>
                </div>



                <div className="w-fit bg-white p-56">

                </div>

            </div>
        </>

    );
};
export default Navbar;