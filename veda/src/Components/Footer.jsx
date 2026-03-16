import React from "react";

import foot from "../Images/Foot.png";
import facebook from "../Images/Facebook.png";
import instagram from "../Images/Instagram.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#e6dccb] px-6 md:px-10 py-6 mt-10 bg-[url(/src/Images/Bg.png)] font-[vidaloka]">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center ml-8">
          <img src={foot} alt="logo" className="h-17" />
        </div>

        <p className="text-sm text-[#4E2D00] text-center ml-5 ">
          Copyright © 2018, Sri Shankara Veda Patha Shale.
          All Rights Reserved.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-lg font-[Vidaloka] text-[#4E2D00]">
            Social Media
          </span>

          <img src={facebook} alt="facebook" className="h-11 w-11" />
          <img src={instagram} alt="instagram" className="h-11 w-11" />
        </div>

      </div>

    </footer>
  );
};

export default Footer;