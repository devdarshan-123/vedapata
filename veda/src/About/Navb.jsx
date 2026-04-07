import React, { useState } from "react";
import logo from "/src/Images/Logo.png";

const Navb = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-10 py-5 shadow-md text-[#4E2D00] text-sm bg-white">

      {/* Main Container */}
      <div className="flex justify-between items-center">

        {/* LEFT — Logo */}
        <img src={logo} alt="Logo" className="h-12 object-contain" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium font-[vidaloka]">
          <li className="cursor-pointer hover:text-orange-600 transition">Home</li>
          <li className="cursor-pointer text-orange-700">About Us</li>
          <li className="cursor-pointer hover:text-orange-600 transition">Resources</li>
          <li className="cursor-pointer hover:text-orange-600 transition">
            Courses & Certifications
          </li>
          <li className="cursor-pointer hover:text-orange-600 transition">
            Contact Us
          </li>
        </ul>

        {/* RIGHT — Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-5">

          {/* Heart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 cursor-pointer hover:text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 
              7.636l1.318-1.318a4.5 4.5 0 116.364 
              6.364L12 21 4.318 12.682a4.5 4.5 
              0 010-6.364z"
            />
          </svg>

          {/* Bell Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 cursor-pointer hover:text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 
              2.032 0 0118 14.158V11a6 6 0 
              10-12 0v3.159c0 .538-.214 
              1.055-.595 1.436L4 17h5"
            />
          </svg>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-[#E8D7C5] flex items-center justify-center font-medium">
            A
          </div>

        </div>

        {/* Hamburger (Mobile) */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-5 flex flex-col gap-4 font-medium">

          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-orange-600">Home</li>
            <li className="cursor-pointer hover:text-orange-600">About Us</li>
            <li className="cursor-pointer hover:text-orange-600">Resources</li>
            <li className="cursor-pointer hover:text-orange-600">
              Courses & Certifications
            </li>
            <li className="cursor-pointer hover:text-orange-600">Contact Us</li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex items-center gap-5 mt-2">

            {/* Heart */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 
                0 016.364 0L12 7.636l1.318-1.318
                a4.5 4.5 0 116.364 
                6.364L12 21 4.318 
                12.682a4.5 4.5 0 010-6.364z"
              />
            </svg>

            {/* Bell */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 
                2.032 0 0118 14.158V11a6 
                6 0 10-12 0v3.159c0 .538-.214 
                1.055-.595 1.436L4 17h5"
              />
            </svg>

            {/* Profile */}
            <div className="w-9 h-9 rounded-full bg-[#E8D7C5] flex items-center justify-center font-medium">
              A
            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navb;