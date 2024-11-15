'use client';
import { assets, course_data } from '@/public/assets/assets';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import { FaWhatsapp } from "react-icons/fa";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [groupLink, setGroupLink] = useState(null);

  // Fetch course data based on course ID from params
  const fetchCourseData = () => {
    const course = course_data.find((course) => course.id === Number(params.id));
    setData(course || null);
  };

  // Fetch WhatsApp group link for the specific course ID
  const fetchGroupLink = () => {
    fetch(`/api/links?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => setGroupLink(data.link || null))
      .catch((error) => console.error("Error fetching group link:", error));
  };

  useEffect(() => {
    fetchCourseData();
    fetchGroupLink();
  }, [params.id]);

  if (!data) return <div>Loading...</div>;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 bg-bg_image bg-cover bg-center"
    >
      <div className="bg-yellow-600  shadow-lg rounded-lg flex p-8 max-w-5xl w-full mx-4 md:mx-8 lg:mx-auto">
        
        {/* Course Image Section (Left) */}
        <div className="w-full md:w-1/2 pr-8">
          <Image
            className="border-2 border-gray-300 rounded-md"
            src={data.image}
            alt={data.title}
            width={400}
            height={300}
            layout="responsive"
          />
        </div>

        {/* Course Details Section (Right) */}
        <div className="w-full md:w-1/2 pl-8 flex flex-col justify-between">
          <div>
            {/* Title and Register Button */}
            <div className="flex justify-between items-center mb-6">
            <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-6xl">{data.title}</h1>
              <Link 
                href={`/registrations/${data.id}`} 
                className="inline-flex items-center py-2 px-5 bg-white text-yellow-500  font-semibold rounded-md shadow-md hover:transition"
              >
                Register
              </Link>
            </div>

            {/* Overview Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Overview</h2>
              <p className="text-gray-600 leading-relaxed mt-2">{data.description}</p>
            </div>

            {/* Details Section for Time and Venue */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700">Details</h2>
              <p className="text-gray-600"><strong>Time:</strong> {data.time}</p>
              <p className="text-gray-600"><strong>Venue:</strong> {data.venue}</p>
            </div>
          </div>

          {/* WhatsApp Group Button */}
          {groupLink ? (
            <div className="mt-6 text-center">
              <Button
                className="flex items-center gap-2 text-yellow-600  bg-white"
                ripple={true}
                onClick={() => window.open(groupLink, "_blank")}
              >
                <FaWhatsapp className="text-xl" />
                Join WhatsApp Group
              </Button>
            </div>
          ) : (
            <p className="text-red-500 text-center mt-8">No WhatsApp group for this course</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
