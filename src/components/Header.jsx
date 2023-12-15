import React, { useEffect, useState } from 'react'
import img1 from "../utils/h.png"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { toggleTheme } from '../utils/cartSlice'
// import { clearCart } from '../utils/cartSlice'
// import { options } from '../constants/Data'
// import appStore from '../utils/appStore'
// import { addUser, removeUser } from '../utils/userSlice'
const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggleColor,setToggleColor]=useState(false);
    const [price, setPirce] = useState(true);
    const [display, setDisplay] = useState(true)
    const [brand, setBrand] = useState(true);
    const [size, setSize] = useState(true);
    const [colour, setColour] = useState(true);
    const [material, setMaterial] = useState(true);
    const cartItems = useSelector(store => store.cart.items)
    const [view, setView] = useState(false);
    const handleToggleTheme=()=>{
        dispatch(toggleTheme());
        setToggleColor(!toggleColor)
    }
    const handleLogin = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/main")
        });
    };
    return (
        <>

            <div className={toggleColor?'fixed w-full flex justify-evenly bg-gray-200 text-gray-800 ':'fixed w-full flex justify-evenly bg-black bg-opacity-90 text-gray-200' } >
                <img onClick={() => {
                    setDisplay(!display)
                }} className=' h-16 w-12 pt-6' src={display ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuras_I78qJJti5cOq4YVKIHQCg_PjVEq-8Q&usqp=CAU" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFIKTYfSCOTBT0p1zMhHqdNutXfac6OvY_w&usqp=CAU"} alt="" />

                <Link to="/main" >
                    <img
                        alt='image not available right now'
                        src={img1}
                        className="rounded-xl h-24 mt-3 m-2 shadow-xl"
                    />
                </Link>
                <div className='flex' >
                    <ul className='flex space-x-3 pt-6  justify-evenly font-normal text-xl' >
                        <Link onMouseOver={() => {
                            setView(true);
                        }}
                            onMouseOut={() => {
                                setView(false);
                            }} to="/men" >
                            <li className='hover:text-yellow-900 font-medium  p-3'>Men</li>
                        </Link>
                        <Link onMouseOver={() => {
                            setView(true);
                        }}
                            onMouseOut={() => {
                                setView(false);
                            }} to="/women" >
                            <li className='hover:text-yellow-900 font-medium  p-3'>Women</li>
                        </Link>
                        <Link onMouseOver={() => {
                            setView(true);
                        }}
                            onMouseOut={() => {
                                setView(false);
                            }} to="/kids" >
                            <li className='hover:text-yellow-900 font-medium  p-3'>Kids</li>
                        </Link>
                        <Link onMouseOver={() => {
                            setView(true);
                        }}
                            onMouseOut={() => {
                                setView(false);
                            }} to="/kitchen" >
                            <li className='hover:text-yellow-900 font-medium  p-3'>Home and Kitchen</li>
                        </Link>
                        <input className='border h-10 border-black bg-gray-50 m-2 mb-7 rounded-xl w-60 p-[5px] text-black' type="text" placeholder='search...' />
                        <li>
                            <button onClick={handleLogin} className={!toggleColor?
                            ' h-10 font-normal text-xl border border-black bg-white text-gray-800 rounded-xl p-2 pt-1 hover:bg-gray-200 m-2 mb-7 ':
                            ' h-10 font-normal text-xl text-white bg-gray-800 rounded-xl p-2 pt-1 hover:bg-gray-700 m-2 mb-7 ' }
                            >Logout</button>
                        </li>
                    </ul>
                </div>
                {view && <div className='h-96 items-center absolute flex justify-evenly overflow-y-auto  bg-gray-800 bg-opacity-90 text-white mt-[95px]  rounded-lg shadow-2xl  rounded-t-none mr-[150px] w-[950px]'>
                    <div className=' pb-20 pt-8  '  >
                        <ul className='space-y-3'>

                            <li>Shop by categories</li>
                            <li>Best in the market</li>
                            <li>Top searches</li>
                            <li>Overseas product</li>
                            <li>Shop by categories</li>
                            <li>Best in the market</li>
                            <li>Top searches</li>
                            <li>Overseas product</li>

                        </ul>

                    </div>
                    <div className=' pb-20 pt-8  '  >
                        <ul className='space-y-3'>

                            <li>T-Shirts Collection</li>
                            <li>Latest Denim Styles</li>
                            <li>Popular Jacket Picks</li>
                            <li>Global Streetwear</li>
                            <li>Special Occasion Dresses</li>
                            <li>Highly Rated Activewear</li>
                            <li>Hot Legging Searches</li>
                            <li>Imported Sneaker Treasures</li>
                        </ul>
                    </div>

                    <div className=' pb-20 pt-8  '  >
                        <ul className='space-y-3'>
                            <li>Summer Fashion Trends</li>
                            <li>Editor's Choice for Fall</li>
                            <li>Most Searched Winter Styles</li>
                            <li>International Couture Dresses</li>
                            <li>Category Specials for Spring</li>
                            <li>Premium Coat Selections</li>
                            <li>Top Fashion Hat Searches</li>
                            <li>Exclusive Scarf Imports</li>
                        </ul>
                    </div>

                </div>}
                <div className='pt-7 flex'>
                    <Link to="/cart" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa-El_T1b1G1F99i5PfJO3ob6pFEWECgnOw&usqp=CAU" className={toggleColor ? 'h-12 p-3 bg-gray-800 rounded-xl hover:bg-gray-600' :'h-12 p-3 bg-white rounded-xl hover:bg-gray-600'
                    
                    } alt="" />
                    </Link>

                    <p className=' pt-3 pl-1  text-base font-semibold'>Cart items- {cartItems.length}</p>
                    <div onClick={()=>handleToggleTheme()} className={toggleColor?'h-7 w-14 ml-5 mt-2 rounded-r-2xl rounded-l-2xl  mr-0 bg-black' :'h-7 w-14 ml-5 mt-2 rounded-r-2xl rounded-l-2xl  mr-0 bg-white' }>
                        <div className={toggleColor?'h-5 w-5 rounded-full p-1 bg-white mt-[3px] ml-2':'h-5 w-5 rounded-full p-1 bg-black mt-[3px] ml-7'} ></div>
                    </div>
                </div>

            </div>
            <div className={display ? 'hidden' : ' h-full  block fixed ml-0 mt-[116px] bg-gray-200 text-black w-52 justify-center'}>
                <ul className='m-6 font-normal flex flex-col pl-3 ' >
                    <li className='text-3xl  p-2 font-semibold  font-serif underline'>Filters</li>
                    <li onClick={() => {
                        setPirce(!price)
                    }} className=' pt-3 cursor-pointer text-xl  font-serif hover:text-gray-600 ' >{price ? "price ➕" : "price ➖"} </li>
                    <div className={price ? "hidden" : "block"} >
                        <p className='pl-8'> under ₹500</p>
                        <p className='pl-8'> under ₹800</p>
                        <p className='pl-8'> under ₹1200</p>
                        <p className='pl-8'> under ₹4500</p>

                    </div>
                    <li onClick={() => {
                        setBrand(!brand)
                    }} className=' pt-3 cursor-pointer text-xl hover:text-gray-600   font-serif  ' >{brand ? "brand ➕" : "brand ➖"}</li>
                    <div className={brand ? "hidden" : "block"} >
                        <p className='pl-8'>FabIndia</p>
                        <p className='pl-8'>W for Woman</p>
                        <p className='pl-8'>Manyavar</p>
                        <p className='pl-8'>Biba</p>

                    </div>
                    <li onClick={() => {
                        setSize(!size)
                    }} className=' pt-3 cursor-pointer text-xl  font-serif hover:text-gray-600 ' >{size ? "size ➕" : "size ➖"}</li>
                    <div className={size ? "hidden" : "block"} >
                        <p className='pl-8'>S <span className='font-light' > (1512)</span></p>
                        <p className='pl-8'>M <span className='font-light' > (1342)</span></p>
                        <p className='pl-8'>L <span className='font-light' > (1327)</span></p>
                        <p className='pl-8'>XL <span className='font-light' > (1233)</span></p>
                    </div>
                    <li onClick={() => {
                        setColour(!colour)
                    }} className=' pt-3 cursor-pointer text-xl  font-serif hover:text-gray-600 ' >{colour ? "colour ➕" : "colour ➖"}</li>
                    <div className={colour ? "hidden" : "block"} >
                        <p className='   pl-8 flex'> <div className=' m-[6px] rounded-sm border border-black h-3 w-3 bg-blue-700'></div> Blue </p>
                        <p className=' pl-8 flex'> <div className=' m-[6px] rounded-sm border border-black h-3 w-3 bg-pink-700'></div> Pink </p>
                        <p className=' pl-8 flex'> <div className=' m-[6px] rounded-sm border border-black h-3 w-3 bg-black'></div> Black </p>
                        <p className=' pl-8 flex'> <div className=' m-[6px] rounded-sm h-3 w-3 bg-yellow-100 border border-black '></div> Beige </p>
                    </div>
                    <li onClick={() => {
                        setMaterial(!material)
                    }} className=' pt-3 cursor-pointer text-xl  font-serif hover:text-gray-600 ' >{material ? "material ➕" : "material ➖"}</li>
                    <div className={material ? "hidden" : "block"} >
                        <p className='pl-8'>Cotton</p>
                        <p className='pl-8'>Nylon</p>
                        <p className='pl-8'>Linen</p>
                        {/* <p className='pl-8'></p> */}
                    </div>
                </ul>

            </div>
        </>

    )
}

export default Header