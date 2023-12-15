
import React from 'react'
import { useSelector } from 'react-redux'


const Footer = () => {

  const theme=useSelector(store=>store.cart.toggle)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  return (
    <>
      <div className={theme?'p-3 text-center text-2xl bg-black bg-opacity-90':'p-3 text-center text-2xl bg-gray-200'} >
        <button className={theme?'font-bold text-gray-300':'font-bold text-gray-800'}
          onClick={handleScrollToTop}
        >Back to top</button>
      </div>
      <div className={theme ? ' flex justify-between bg-gray-300 bg-opacity-90 text-black font-serif font-light  p-6 pr-12 pl-12 pb-16 shadow-xl  ': ' flex justify-between bg-black bg-opacity-90 text-white font-serif font-light  p-6 pr-12 pl-12 pb-16 shadow-xl  '} >

        <ul>
          <li className='font-semibold text-2xl' >My Socials</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >Github</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >LinkedIn</li>
        </ul>
        <ul>
          <li className='font-semibold text-2xl' >IEDB</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >Download</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >Audio Books</li>
        </ul>
        <ul>
          <li className='font-semibold text-2xl' >Ayuntraa Web Services</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >Scalable Cloud</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >Computing services</li>
        </ul>
        <ul>
          <li className='font-semibold text-2xl' >Ayuntraa Prime Music</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >100 million songs, ad-free</li>
          <li className={theme? 'font-extralight text-sm text-black':'font-extralight text-sm text-gray-400'} >
            Over 15 million podcast episodes</li>


        </ul>
      </div>
      <div className='p-3 text-center text-2xl bg-black bg-opacity-90 text-white shadow-xl  ' >
        copyright@ayushTyagi2024
      </div>
    </>
  )
}

export default Footer