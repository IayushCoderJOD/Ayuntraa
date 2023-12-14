import React, { useState } from 'react'
import Header from './Header'
import Products from '../utils/Products'
import { menProducts } from '../constants/Data'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const Men = () => {
  const dispatch=useDispatch()
  const handleAddItem = (product) => {
    dispatch(addItem(product))
  }
 

  return (
    <>
      <Header />
      <div className='flex ' >
        {<div className='pt-36 justify-evenly flex flex-wrap pl-16' >
        {menProducts.map((product) => (
          <div key={product.id}>
            <Products src={product.img} price={product.price} />
            <button
              onClick={()=>handleAddItem(product)}
              className=' text-white hover:bg-opacity-80 text-xl bg-black rounded-xl p-2 m-2 mt-0'
            >
              Add➕
            </button>
          </div>
        ))}
        </div>}
      </div>

    </>
  )
}

export default Men