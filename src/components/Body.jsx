import React from 'react'
import {Carousel} from '../utils/Carousel'
import Header from './Header'
import MainBody from "./MainBody"
import MultipleProducts from './MultipleProducts'
import Footer from './Footer'
import { useDispatch } from 'react-redux'

const Body = () => {
  return (
    <>
    <Header />
    <div className='pt-28'> 
    <Carousel /> 
    <MainBody />
    <MultipleProducts />
    <Footer />
    </div>
    </>
  )
}

export default Body