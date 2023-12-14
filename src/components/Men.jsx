import React, { useState } from 'react'
import Header from './Header'
import Products from '../utils/Products'
import { menProducts } from '../constants/Data'

const Men = () => {
 

  return (
    <>
      <Header />
      <div className='flex ' >
        {<div className='pt-36 justify-evenly flex flex-wrap pl-16' >
          {
            menProducts.map(product =>
              <Products key={product.id} src={product.img} />
            )
          }
        </div>}
      </div>

    </>
  )
}

export default Men