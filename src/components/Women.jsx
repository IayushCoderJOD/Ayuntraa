import React from 'react'
import Header from './Header'
import { womenProducts } from '../constants/Data'
import Products from "../utils/Products"

const Women = () => {
  return (
    <div>
      <Header />
      <div className='flex ' >
        {<div className='pt-36 justify-evenly flex flex-wrap pl-16' >
          {
            womenProducts.map(product =>
              <Products key={product.id} src={product.img} />
            )
          }
        </div>}
      </div>

    </div>
  )
}

export default Women