import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({ src, name }) => {
    return (

        <div className='relative' >
            <img className='h-[600px] w-[600px]' src={src} alt="" />
            <h1 className=' absolute top-[40%]  text-white shadow-2xl left-[20%] font-bold  text-4xl ' >{name}</h1>
            <button className='absolute top-[40%]  hover:bg-gray-200  left-[35%]  text-gray-600 font-normal shadow-2xl  text-2xl pb-2 mt-14  bg-yellow-50  p-3 ' >Show now</button>
    
        </div>
    )
}

export default Categories