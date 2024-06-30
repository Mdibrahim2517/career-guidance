import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
const Form = () => {
    return (
        <div className='bg-white px-10 py-1 rounded-3xl border-2 border-gray '>
            <h1 className='text-2xl font-bold pt-8'>Welcome To Thee Castable</h1>
            <p className='font-medium text-gray-500 text-base  mt-4'>welcome back AI !</p>
            <div className='mt-8'>
                <div>
                    <label className='text-base font-medium'>Email </label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder=' Enter Your Email'
                    />
                </div>
                <div>
                    <label className='text-base font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder=' Enter Your Password'
                        type='password'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-sm' for="remember">Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-sm text-violet-700 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl gradientBg text-white text-base font-bold'>Sign in</button>
                    <button className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'> <FcGoogle className='mt-1 ' /> Sign in with Google</button>
                    {/* <button className='flex rounded-xl py-2 border-2 item-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all text-base'> <FcGoogle className='mt-1 ' /> Sign in with Google</button> */}
                </div>

                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-sm'>Don't have an account?</p>
                    <button className='text-violet-500 text-base font-medium ml-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'><a href='SignUp/'>Sign Up</a></button>
                </div>
            </div>
        </div>
    )
}

export default Form
