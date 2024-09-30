'use client';
import { assets, course_data } from '@/assets/assets';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchCourseData = () => {
    for (let i = 0; i < course_data.length; i++) {
      if (Number(params.id) === course_data[i].id) {
        setData(course_data[i]);
        console.log(course_data[i]); 
        break;
      }
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, [params.id]); 
  return(data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
      <Image className='border-4 border-white max-w-[200px]: ' src={data.image} alt='' />
         {/* <Link href='/'>
         <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
         </Link> */}
         {/* <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] '>
            Get Started <Image src={assets.arrow} alt=''/>
            </button> */}
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
        
      </div>
      
    </div>
    <div className=' mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <div className='my-24'>
        <p>Share</p>
      </div>
    </div>
    </>:<></>
  )
  
};

export default Page;
