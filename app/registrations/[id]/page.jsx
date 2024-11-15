'use client';
import { useState } from 'react';
import { course_data } from '@/public/assets/assets'; // Import course data
import { MdOutlineBookmarkAdded } from "react-icons/md";

const CourseRegister = ({ params }) => {
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  // Find the course based on the ID in params
  const course = course_data.find((course) => course.id === parseInt(params.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrationCompleted(true); // Show popup or feedback
  };

  return (
    <div className="container mx-auto p-12 max-w-lg bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-700">Course Registration</h1>
      
      {course && (
        <>
          {/* Course Info Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-gray-800">{course.title}</h2>
            <p className="text-gray-500 mt-2">{course.category}</p>
            <div className="mt-4 text-gray-700">
              <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
            </div>
          </div>

          {/* Registration Form */}
          {!registrationCompleted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button 
  type="submit" 
  className="w-full bg-yellow-700 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
>
  <MdOutlineBookmarkAdded className="text-xl"/>
  Complete Registration
</button>

            </form>
          ) : (
            <div className="mt-8 bg-green-100 text-green-800 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold">Registration completed successfully for {course.title}!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseRegister;
