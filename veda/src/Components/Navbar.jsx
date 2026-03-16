import React, { useState } from "react";
import logo from "/src/Images/Logo.png";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-10  md:text-[15px]  py-5 shadow-md text-[#4E2D00] text-xs">

      <div className="flex justify-between items-center">

        <img src={logo} alt="Logo" className="h-15" />

        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className="hidden md:flex items-center gap-10 font-lg font-[vidaloka] text-[#4E2D00] mr-5">
          <li className="cursor-pointer hover:text-orange-600 transition">Home</li>
          <li className="cursor-pointer hover:text-orange-600 transition">About Us</li>
          <li className="cursor-pointer hover:text-orange-600 transition">Resources</li>
          <li className="cursor-pointer hover:text-orange-600 transition">
            Courses & Certifications
          </li>
          <li className="cursor-pointer hover:text-orange-600 transition">Contact Us</li>
        </ul>

      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden  font-[Vidaloka] text-[#4E2D00]">
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

export default Navbar;