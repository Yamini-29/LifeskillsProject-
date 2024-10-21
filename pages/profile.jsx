import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Courseitem from '@/components/Courseitem';
import { course_data } from '@/assets/assets';

export default function Profile() {
  return (
    <div className="bg-gradient-to-r from-orange-800 to-pink-300 min-h-screen">
      <Navbar />
      <Header />
      <div className="py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 text-white flex p-8">
            <div className="flex-shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-blue-500"
              />
            </div>
            <div className="ml-6 mt-12">
              <h5 className="text-xl font-bold">Yamini Shree</h5>
              <p className="text-gray-700">CS21B056</p>
            </div>
          </div>

          <div className="p-6">
            <h6 className="text-lg font-semibold">NUMBER OF HOURS COMPLETED</h6>
            <div className="bg-gray-100 p-4 rounded-md mt-2">
              <p className="bold">18</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-lg font-semibold">Registered Courses</h6>
            </div>

            {/* Registered Courses Grid */}
            <div className="grid grid-cols-2 gap-4">
              {course_data.map(course => (
                <Courseitem 
                  key={course.id}
                  title={course.title}
                  description={course.description}
                 
                  image={course.image}
                  id={course.id}
                  linkText="Course Description"  
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
