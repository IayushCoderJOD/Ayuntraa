import React from 'react'
import Card from '../utils/Card'
import Categories from '../utils/Categories'
import { categories } from '../constants/Data'
import { image_address } from '../constants/Data'
const MainBody = () => {

  return (
    <div>
      <div>
        <img className='w-full' src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-TRUSTMARKER.jpg" alt="Poster" />
      </div>
      <div
        // without using map function
        className='flex justify-evenly m-3 p-3 bg-gray-300 h-[450px]'>
        <Card name="Men" add={image_address[0]} />
        <Card name="Women" add={image_address[1]} />
        <Card name="Kids" add={image_address[2]} />
        <Card name="Kitchen" add={image_address[3]} />
      </div>

      {/* <div className='flex space-x-5 m-3 p-3'>
        {categories.map((catoegory) =>
          <Categories key={catoegory.id} src={catoegory.img} name={catoegory.title} />
        )}
      </div> */}
    </div>
  )
}

export default MainBody