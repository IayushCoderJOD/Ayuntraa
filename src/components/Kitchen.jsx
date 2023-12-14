import React from 'react'
import Header from './Header'
import { popularProducts } from '../constants/Data'
import Products from "../utils/Products"
const Kitchen = () => {
  return (
    <div>
        <Header />
      <div className='flex ' >
        {<div className='pt-36 justify-evenly flex flex-wrap pl-16' >
          {
            popularProducts.map(product =>
              <Products key={product.id} src={product.img} />
            )
          }
        </div>}
      </div>
    </div>
  )
}

export default Kitchen