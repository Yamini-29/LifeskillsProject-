import React from 'react'
import Image from 'next/image'
// import { assets } from '@/assets/assets'
const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            {/* <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' /> */}

        </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>
          Wellness Course-Classroom
        </h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
        Home Page
        </p>
      
      </div>
    </div>
  )
}

export default Header
