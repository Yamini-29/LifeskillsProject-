import React from 'react';
import { assets } from '@/assets/assets';
export default function Profile() {
  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto bg-blue-200 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 text-white flex p-8">
          <div className="flex-shrink-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-blue-400"
            />
            {/* <button className="mt-4 py-2 px-4 border border-gray-700 text-gray-700 rounded-md">
              Edit profile
            </button> */}
          </div>
          <div className="ml-6 mt-12">
            <h5 className="text-xl font-bold">Yamini Shree</h5>
            <p className="text-gray-700">CS21B056</p>
          </div>
        </div>

        {/* <div className="bg-gray-100 p-6 flex justify-around">
          <div className="text-center">
            <h5 className="text-xl font-bold">253</h5>
            <p className="text-gray-500">Photos</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-bold">1026</h5>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-bold">478</h5>
            <p className="text-gray-500">Following</p>
          </div>
        </div> */}
<div className='p-5'>  <h6 className="text-lg font-semibold">NO OF HOURS COMPLETED</h6></div>

<div className="flex flex-col items-start ml-24">

  <div className="bg-gray-100 p-5 rounded-md mt-2 inline-block">
    <p>18</p>
  </div>
</div>


        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h6 className="text-lg font-semibold">REGISTERED COURSES</h6>
       
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
              alt="Recent Photo 1"
              className="rounded-md w-full"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
              alt="Recent Photo 2"
              className="rounded-md w-full"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
              alt="Recent Photo 3"
              className="rounded-md w-full"
            />
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
              alt="Recent Photo 4"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
