import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../utils/Products';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const items = useSelector(store => store.cart.items);
    const dispatch=useDispatch();
    const clearCartOnClick=()=>{
        dispatch(clearCart())
    }

    return (
        <div>
            <Header />
            <div className='flex justify-between' >
                {<div className='pt-36 justify-evenly flex flex-col pl-16' >
                    <button  onClick={clearCartOnClick} className={items.length===0? 'hidden':'bg-red-700 hover:bg-red-600 p-3 w-1/2 text-white text-xl shadow-lg rounded-xl m-3'} >Clear Cart</button>
                    <h1 className=' pl-20 font-medium text-xl pt-3' >{ items.length===0?"Please add products😊":"Products added"}</h1>
                    {
                        items.map(product =>
                            <Products key={product.id} src={product.img} price={product.price} />
                        )
                    }
                    <div>

                    </div>
                </div>}
                <div className={ items.length===0?"hidden":"fixed right-0"}>
                <h1 className='absolute mt-[170px] ml-[240px] text-2xl text-white z-50 font-medium' >Deliever to: <span className='font-normal text-white text-xl' >201204</span> </h1>

                    <div className='h-96 w-96 rounded-xl bg-gray-700 p-36 m-36' >
                    <button className=' absolute h-12 w-72 bg-green-600 shadow-xl hover:bg-green-500 rounded-xl text-white text-lg font-semibold mt-[166px] left-48 ' >Checkout now</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart