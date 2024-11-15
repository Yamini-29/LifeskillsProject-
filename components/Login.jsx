'use client';

import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { assets } from '@/public/assets/assets';
const Login = () => {
  const [action, setAction] = useState('login'); // Default state set to 'login'

  const registerLink = () => {
    setAction('register'); // Show the register form
  };

  const loginLink = () => {
    setAction('login'); // Show the login form
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className={`flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat`} style={{
  backgroundImage: `url(${assets.login})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}}
>
        <div className={`w-full max-w-md bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-8 transition-all duration-300 ease-in-out`}>
          <form>
            {/* Login Form */}
            {action === 'login' && (
              <>
                <h1 className="text-3xl font-semibold text-center text-white mb-6">Login</h1>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full h-12 bg-gray-600 text-white rounded-full px-4 pl-12 placeholder-white focus:outline-none border-2 border-transparent focus:border-white"
                  />
                  <FaUser className="absolute top-3 left-4 text-white" />
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full h-12 bg-gray-600 text-white rounded-full px-4 pl-12 placeholder-white focus:outline-none border-2 border-transparent focus:border-white"
                  />
                  <FaLock className="absolute top-3 left-4 text-white" />
                </div>

                <div className="flex justify-between items-center text-sm mb-6">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="mr-2 accent-white" />
                    Remember Me
                  </label>
                  <a href="#" className="text-white hover:underline">Forgot Password</a>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  Login
                </button>

                <div className="text-center text-white mt-6">
                  <p>
                    Don't have an account?{' '}
                    <a href="#" onClick={registerLink} className="font-semibold hover:underline">Register</a>
                  </p>
                </div>
              </>
            )}

            {/* Register Form */}
            {action === 'register' && (
              <>
                <h1 className="text-3xl font-semibold text-center text-white mb-6">Register</h1>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="w-full h-12 bg-gray-600 text-white rounded-full px-4 pl-12 placeholder-white focus:outline-none border-2 border-transparent focus:border-white"
                  />
                  <FaUser className="absolute top-3 left-4 text-white" />
                </div>

                <div className="relative mb-6">
                  <input
                    type="email"
                    placeholder="Email Id"
                    required
                    className="w-full h-12 bg-gray-600 text-white rounded-full px-4 pl-12 placeholder-white focus:outline-none border-2 border-transparent focus:border-white"
                  />
                  <MdEmail className="absolute top-3 left-4 text-white" />
                </div>

                <div className="relative mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full h-12 bg-gray-600 text-white rounded-full px-4 pl-12 placeholder-white focus:outline-none border-2 border-transparent focus:border-white"
                  />
                  <FaLock className="absolute top-3 left-4 text-white" />
                </div>

                <div className="flex justify-between items-center text-sm mb-6">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="mr-2 accent-white" />
                    I agree to the terms and Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-white text-black font-bold rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  Register
                </button>

                <div className="text-center text-white mt-6">
                  <p>
                    Already have an account?{' '}
                    <a href="#" onClick={loginLink} className="font-semibold hover:underline">Login</a>
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
