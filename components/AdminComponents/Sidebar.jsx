import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>
        ADMIN
      </div>
      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <div className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
        <Image src={assets.add_icon}  width={28} /><p>Add Courses</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
