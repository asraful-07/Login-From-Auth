import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-700 flex items-center">
            <span className="text-indigo-500 text-3xl mr-2">✿</span> Amity
          </span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Solutions
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Causes
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            News
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            Contact
          </a>
          <FaSearch className="text-gray-600 hover:text-indigo-600 cursor-pointer" />
          <button className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Volunteer
          </button>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-400">
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-indigo-600 text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            Solutions
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            Causes
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            FAQ
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            News
          </a>
          <a
            href="#"
            className="block text-gray-600 hover:text-indigo-600 mb-2"
          >
            Contact
          </a>
          <button className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-700 mb-2">
            Volunteer
          </button>
          <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-400">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
