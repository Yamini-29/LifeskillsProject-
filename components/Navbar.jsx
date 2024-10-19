"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/profile" className="text-white hover:text-gray-300">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <Link href="/" className="block text-white px-4 py-2 hover:bg-blue-700">
            Home
          </Link>
          <Link href="/profile" className="block text-white px-4 py-2 hover:bg-blue-700">
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
