import { assets } from '@/public/assets/assets'
import React from 'react'
import Image from 'next/Image';

const CourseTableItem = ({authorImg,title}) => {
  return (
    <tr className='bg-white border-b'>
      <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
        <Image src={authorImg?authorImg:assets.profile }  />
      </th>
      <td className='px-6 py-4'>
        {title?title:"no title"}
      </td>
      <td className='px-6 py-4'>
        {"11 Jan 2024"}
      </td>
    </tr>
  )
}

export default CourseTableItem
