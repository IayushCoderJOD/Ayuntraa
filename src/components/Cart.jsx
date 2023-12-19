import React from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import Products from '../utils/Products';
import { clearCart, removeItems } from '../utils/cartSlice';

const Cart = () => {
    const items = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const clearCartOnClick = () => {
        dispatch(clearCart())
    }
    const removeCartOnClick = () => {
        dispatch(removeItems())
    }

    return (
        <div>
            <Header />
            <div className='flex justify-center pb-6' >
                <button onClick={clearCartOnClick} className={items.length === 0 ? 'hidden' : 'bg-red-700 hover:bg-red-600 mt-36 p-3 w-52 text-white text-xl shadow-lg rounded-xl m-3'} >Clear Cart</button>
                <button onClick={removeCartOnClick} className={items.length === 0 ? 'hidden' : 'bg-blue-700 hover:bg-blue-600 mt-36 p-3 w-52 text-white text-xl shadow-lg rounded-xl m-3'}  >Remove</button>npmnpm 
            </div>

            <div className=' justify-between pl-80 flex flex-col'>

                <h1 className={items.length === 0 ? 'pl-96 pt-36 font-medium text-2xl ' : 'pl-96 font-medium text-2xl '}>{items.length === 0 ? "Please add products😊" : "Products added"}</h1>
                {
                    <div className='flex flex-wrap' >

                        {
                            items.map(product =>
                                <Products key={product.id} src={product.img} price={product.price} />
                            )
                        }
                        {/* </marquee> */}

                    </div>}
                {/* <div className={ items.length===0?"hidden":"fixed right-0"}>
                <h1 className='absolute mt-[170px] ml-[240px] text-2xl text-white z-50 font-medium' >Deliever to: <span className='font-normal text-white text-xl' >201204</span> </h1>

                    <div className='h-96 w-96 rounded-xl bg-gray-700 p-36 m-36' >
                    <button className=' absolute h-12 w-72 bg-green-600 shadow-xl hover:bg-green-500 rounded-xl text-white text-lg font-semibold mt-[166px] left-48 ' >Checkout now</button>
                    </div>
                </div> */}

            </div>

        </div>
    )
}

export default Cart