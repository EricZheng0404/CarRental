import React from 'react'
import { assets } from '../assets/assets'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between
    px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3
    md:mx-auto rounded-2xl overflow-hidden'>
        <div className='text-white'>
            <h2 className='text-2xl font-medium'>Do you own a luxury car?</h2>
            <p className='mt-2'>Monetize your car with us and earn extra income.</p>
            <button className='mt-4 px-4 py-2 bg-white text-primary rounded-full'>List your car now</button>
        </div>
            <img src={assets.banner_car_image} alt="car"
            className='max-h-45 mt-10'/>
      
    </div>
  )
}

export default Banner
