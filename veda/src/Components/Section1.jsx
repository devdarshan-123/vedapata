import React from "react";
import Sec from "../Images/Sec1.png";

const Section1 = () => {
  return (
    <div className="flex justify-center mt-8 md:mt-12 lg:mt-16 w-full px-4">
      
      <img
        src={Sec}
        alt="Section 1"
        className="w-full max-w-[1200px] h-auto object-contain"
      />

    </div>
  );
};

export default Section1;