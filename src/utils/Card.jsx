import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,add}) => {
  return (
    <div >
      <Link to={"/"+name} >
    <div className='' >
        <img src={add} alt="" className='bg-cover  h-96 rounded-2xl shadow-2xl w-80 hover:p-0 p-6'  />
        <h1 className='text-center  text-black font-extrabold text-3xl -tracking-tighter' >{name}</h1>
    </div>
    </Link>
    </div>
  )
}

export default Card