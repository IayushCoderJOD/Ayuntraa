import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Card = ({name,add}) => {
  const theme=useSelector(store=>store.cart.toggle)
  
  return (
    <div >
      <Link to={"/"+name} >
    <div className='' >
        <img src={add} alt="" className='bg-cover  h-96 rounded-2xl shadow-2xl w-80 hover:p-0 p-6'  />
        <h1 className={theme? 'text-center text-black  font-extrabold text-3xl -tracking-tighter':'text-center text-white font-extrabold text-3xl -tracking-tighter'} >{name}</h1>
    </div>
    </Link>
    </div>
  )
}

export default Card