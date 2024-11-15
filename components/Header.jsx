// header.jsx
import React from 'react';
import { assets } from '@/public/assets/assets';
const Header = () => {
  return (
    <div className="w-full h-screen  overflow-hidden">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
      <img
        alt=""
        src={assets.bghome}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
              <li><a className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500" href="#">Home</a></li>
              <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="/profile">Profile</a></li>
              <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="/studentslist">List</a></li>
              <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Experience</a></li>
              <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Projects</a></li>
              <li><a className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:top-4 xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
  {/* <img
    className="xxl:h-[680px] xl:h-[500px] md:h-[450px] sm:h-[480px]"
    src="your-custom-image-url.jpg"  // Replace this with the URL of your image
    alt="Custom Image"
  /> */}
</div>

      <div className="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
        {/* Column 1 */}
        <div className="w-full flex flex-col z-10">
          <h4 className="text-lg font-semibold text-white xl:text-2xl">IIT Tirupati presents</h4>
          <h1 className="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">LifeSkills <span>Wellness</span></h1>
          <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif">Course</h1>
          <h4 className="text-rose-500 mt-4 lg:text-2xl">--Course Registration</h4>

          <p className="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div>
            <button className="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">Register Courses</button>
          </div>
        </div>

        {/* Column 2 */}
        {/* <div className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">5</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Years of Experience</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">30</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Component Contribution</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">69.7K</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">User's Got Help</h4>
          </div>
        </div>*/}
      </div> 
    </div>
  );
};

export default Header;
