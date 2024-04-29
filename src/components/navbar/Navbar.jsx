import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#254151] text-white px-4 py-2 flex justify-between items-center z-50 font-sans">
      <p className="text-xl font-bold">
Khushhal Gram Samaj Vikas Foundation</p>
      <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
        <p className="hover:text-gray-400">Home</p>
        <p className="hover:text-gray-400">About</p>
        <p className="hover:text-gray-400">Home</p>
        <p className="hover:text-gray-400">About</p>
        {/* Add more links as needed */}
      </div>
      <button className=' hidden md:block bg-amber-500 px-8 py-5 text-xl font-semibold'>Donate</button>
      <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
        <svg
          className="h-6 w-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H11V16H4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`md:hidden absolute top-full left-0 w-full bg-gray-800 px-4 py-2 transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <p className="block py-2 hover:text-gray-400">Home</p>
        <p className="block py-2 hover:text-gray-400">About</p>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;