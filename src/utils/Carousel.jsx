import { useEffect, useState } from "react"
import {data} from '../constants/Data'

export const Carousel=()=>{
    const [img,setImg]=useState(0)
    useEffect(()=>{
       const timer= setTimeout(()=>{
            setImg((img+1)%data.length)
        },5000)
        return ()=> clearTimeout(timer);
    },[img])
    return (
      <>
      <div className="flex justify-center" >
        <button onClick={()=>{
            if(img===0){setImg(data.length-1)}
            else{
            setImg((img-1))}
        }}  className=' p-2 m-2  font-bold bg-gray-800 text-white h-14 rounded-xl shadow-2xl mt-36' >{"<"}</button>
        <img alt="carousel img" src={data[img]} className='object-contain w=[500px] rounded-xl shadow-2xl'   />
        <button onClick={()=>{
            setImg((img+1)%data.length)
        }}  className=' p-2 m-2 font-bold bg-gray-800 text-white h-14 rounded-xl shadow-2xl mt-36'  >{">"}</button>
      </div>
      </>
    )
  }