'use client';
import { useState } from 'react';
import { course_data } from '@/public/assets/assets'; // Import course data

const CourseRegister = ({ params }) => {
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  // Find the course based on the ID in params
  const course = course_data.find((course) => course.id === parseInt(params.id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistrationCompleted(true); // Show popup or feedback
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Course Registration</h1>
      {course && (
        <>
          <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
          <p><strong>Category:</strong> {course.category}</p>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>

          {!registrationCompleted ? (
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block">Your Name:</label>
                <input
                  type="text"
                  className="border px-2 py-1 w-full"
                  required
                />
              </div>
              
              <div className="mt-4">
                <label className="block">Email:</label>
                <input
                  type="email"
                  className="border px-2 py-1 w-full"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Complete Registration
              </button>
            </form>
          ) : (
            <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-md">
              <p>Registration completed successfully for {course.title}!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CourseRegister;
