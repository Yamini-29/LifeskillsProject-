"use client"; 

import { course_data } from '@/public/assets/assets'
import React, { useEffect } from 'react'
import CourseItem from './CourseItem';
import  { useState } from 'react';
import axios from 'axios';


const CourseList = () => {
    const [menu,setMenu] = useState("All");
    const [courses,setCourses] = useState([]);
    const fetchCourses = async ()=>{
        const response = await axios.get('/api/course');
        setCourses(response.data.courses);
        console.log(response.data.courses);
        
    }
    useEffect(()=>{
        fetchCourses();
    },[])
  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=> setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=> setMenu('Proposed')} className={menu==="Proposed"?'bg-black text-white py-1 px-4 rounded-sm':""}>Proposed</button>
            <button onClick={()=> setMenu('Planned')} className={menu==="Planned"?'bg-black text-white py-1 px-4 rounded-sm':""}>Planned</button>
            <button onClick={()=> setMenu('Projects')} className={menu==="Projects"?'bg-black text-white py-1 px-4 rounded-sm':""}> Projects</button>
        </div>
        <div className='flex flex-wrap justify-around grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {courses.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>{
                return <CourseItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
      
    </div>
  )
}

export default CourseList
