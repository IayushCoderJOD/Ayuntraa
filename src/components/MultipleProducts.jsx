import React from 'react';
import { popularProducts } from '../constants/Data';
import Products from '../utils/Products';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MultipleProducts = () => {
  const dispatch=useDispatch()
  const handleAddItem = (product) => {
    dispatch(addItem(product))
  }

  return (
    <div className='text-center align-middle justify-center'>
      <h1 className='bg-gray-300 p-4 text-6xl font-serif'>All Time Best sellers</h1>
      <div className='flex flex-wrap justify-evenly'>
        {popularProducts.map((product) => (
          <div key={product.id}>
            <Products src={product.img} price={product.price} />
            <button
              onClick={()=>handleAddItem(product)}
              className='text-white hover:bg-opacity-80 text-xl bg-black rounded-xl p-2 m-2'
            >
              Add➕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleProducts;
