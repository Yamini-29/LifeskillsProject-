"use client"; 

import { course_data } from '@/assets/assets'
import React from 'react'
import Courseitem from './CourseItem';
import  { useState } from 'react';


const Courselist = () => {
    const [menu,setMenu] = useState("All");
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=> setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=> setMenu('Proposed')} className={menu==="Proposed"?'bg-black text-white py-1 px-4 rounded-sm':""}>Proposed</button>
            <button onClick={()=> setMenu('Planned')} className={menu==="Planned"?'bg-black text-white py-1 px-4 rounded-sm':""}>Planned</button>
            <button onClick={()=> setMenu('Projects')} className={menu==="Projects"?'bg-black text-white py-1 px-4 rounded-sm':""}> Projects</button>
        </div>
        <div className='flex flex-wrap justify-around grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {course_data.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
                return <Courseitem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
      
    </div>
  )
}

export default Courselist
