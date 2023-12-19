import React from 'react'
import Header from './Header'
import { kitchenProducts } from '../constants/Data'
import Products from "../utils/Products"
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
const Kitchen = () => {
  const dispatch=useDispatch()
  const handleAddItem = (product) => {
    dispatch(addItem(product))
  }
  return (
    <div>
        <Header />
      <div className='flex ' >
        {<div className='pt-36 justify-evenly flex flex-wrap pl-16' >
        {kitchenProducts.map((product) => (
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
    </div>
  )
}

export default Kitchen
