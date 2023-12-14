import React, { useState } from 'react'
import img1 from "../utils/h.png"
// import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='fixed w-full flex justify-between bg-gray-200 text-gray-800 shadow-lg'>
            <marquee scrollAmount="15" direction="right">
                <div className='flex'>
                <img
                    alt='image not available right now'
                    src={img1}
                    className=" mt-0 rounded-t-none rounded-xl h-24 m-2 shadow-xl"
                />
                <h1 className='text-2xl pt-8 font-semibold'>
                    This App is solely created by <span className='text-pink-900 text-5xl'>Ayush Tyagi</span>
                </h1>
                </div>
            </marquee>


        </div>
    )
}

export default Header