import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Courseitem = ({ title, description, category, image, id }) => {
  return (
    <div className='ml-10 mr-10 mb-10 max-w-[400px] bg-white border border-orange-950 transition-transform duration-400 ease-in-out hover:shadow-[-7px_7px_0px_#4E1703] hover:scale-105 transform'>
      <Link href={`/course/${id}`}>
        <Image 
          src={image} 
          alt={title} 
          width={250} 
          height={250} 
          className='border-b border-black object-cover h-[250px] w-full' 
        />
      </Link>
      <p className='ml-1 mt-3 px-1 inline-block bg-orange-500 text-white text-xs'>
        {category}
      </p>
      <div className='p-3'>
        <h5 className='mb-1 text-sm font-medium tracking-tight text-gray-900'>
          {title}
        </h5>
        <p className='mb-2 text-xs tracking-tight text-gray-700'>
          {description}
        </p>
        <Link href={`/course/${id}`} className='inline-flex items-center py-1'>
          Click to Register 
          <Image 
            src={assets.arrow} 
            className='ml-1' 
            width={10} 
            height={10} 
            alt="arrow" 
          />
        </Link>
      </div>
    </div>
  );
};

export default Courseitem;