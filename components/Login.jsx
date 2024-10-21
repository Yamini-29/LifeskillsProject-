import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-200">
      <div className="w-full max-w-md bg-blue-500 rounded-lg shadow-lg p-8">
        <form action="">
          <h1 className="text-3xl font-semibold text-center text-white mb-6">
            Login
          </h1>

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
            <a href="#" className="text-white hover:underline">
              Forgot Password
            </a>
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
              <a href="#" className="font-semibold hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
