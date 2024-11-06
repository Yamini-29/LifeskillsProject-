'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {

    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        title:"",
        description:"",
        category:"Planned",
        author:"Kalamkari prof"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
        
    }
  return (
    <>
      <form className='pt-5 [x-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor='image'>
            <Image className='mt-4' src={!image? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt=""/>
        </label> 
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        <p className='text-xl mt-4 '>Course title </p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Type here' requried />
        <p className='text-xl mt-4 '>Course Description </p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='write content here' rows={6} requried />
        <p className='text-xl mt-4'>Course category</p>
        <select  name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 py-3 px-4 border text-gray-500'>
            <option value='Proposed'>Proposed</option>
            <option value='Planned'>Planned</option>
        </select>
        <button type="submit" className='mt-8 w-40 h-12 bg-black text-white'></button>
      </form>
    </>
  )
}

export default page

