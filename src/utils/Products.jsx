import React from 'react'

const Products = ({ src,price }) => {  

  return (
    <div className=' bg-gray-100 rounded-3xl shadow-2xl p-5 m-2'>
      <img className='p-4 h-64 w-64' src={src} alt="image is currently unavailable" />
      <h1 className='font-semibold' >    {price}
      </h1>
      
    </div>
  )
}

export default Products