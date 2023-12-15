import React from 'react';
import { popularProducts } from '../constants/Data';
import Products from '../utils/Products';
import { useDispatch ,useSelector} from 'react-redux';
import { addItem } from '../utils/cartSlice';

const MultipleProducts = () => {
  const theme=useSelector(store=>store.cart.toggle)
  const dispatch=useDispatch()
  const handleAddItem = (product) => {
    dispatch(addItem(product))
  }

  return (
    <div className={!theme?'bg-black bg-opacity-90  text-center align-middle justify-center':'bg-gray-200 text-center align-middle justify-center '}>
      <h1 className={!theme?'bg-gray-200 p-4 text-6xl font-serif':'bg-black bg-opacity-90  p-4 text-white text-6xl font-serif'}>All Time Best sellers</h1>
      <div className='flex flex-wrap justify-evenly p-7'>
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
