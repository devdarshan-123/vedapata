import React, { useState } from "react";
import logo from "/src/Images/Logo.png";
import { Heart, Bell } from "lucide-react";

const Nav= () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-10 md:text-[15px] py-5 shadow-md text-[#4E2D00] text-xs">

      {/* Main Container */}
      <div className="flex justify-between items-center">

        {/* LEFT — Logo */}
        <img src={logo} alt="Logo" className="h-14" />

        {/* Hamburger Icon (Mobile Only) */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* RIGHT SIDE (Desktop) */}
        <div className="hidden md:flex items-center gap-8">

          {/* Navigation */}
          <ul className="flex items-center gap-8 font-medium font-[vidaloka]">
            <li className="cursor-pointer hover:text-orange-600 transition">Home</li>
            <li className="cursor-pointer hover:text-orange-600 transition">About Us</li>
            <li className="cursor-pointer hover:text-orange-600 transition">Resources</li>
            <li className="cursor-pointer hover:text-orange-600 transition">
              Courses & Certifications
            </li>
            <li className="cursor-pointer hover:text-orange-600 transition">Contact Us</li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">

            <Heart size={18} className="cursor-pointer" />

            <Bell size={18} className="cursor-pointer" />

            {/* Profile Circle */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#E6DCCB] text-[#4E2D00] font-semibold">
              A
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden font-medium">
          <li className="cursor-pointer hover:text-orange-600 transition">Home</li>
          <li className="cursor-pointer hover:text-orange-600 transition">About Us</li>
          <li className="cursor-pointer hover:text-orange-600 transition">Resources</li>
          <li className="cursor-pointer hover:text-orange-600 transition">
            Courses & Certifications
          </li>
          <li className="cursor-pointer hover:text-orange-600 transition">Contact Us</li>
        </ul>
      )}

    </nav>
  );
};

export default Nav;