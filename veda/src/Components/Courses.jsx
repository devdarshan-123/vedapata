import React from "react";
import object from "../Images/Obj.png";

const Courses = () => {
  return (
    <section className="w-full mt-10 md:mt-14 lg:mt-16 flex flex-col items-center px-4 ">

      <h1 className=" sm:text-2xl md:text-3xl lg:text-4xl  mb-6 text-center text-[#4E2D00] font-[vidaloka]">
        Our Courses
      </h1>

      <img
        src={object}
        alt="Courses"
        className=" sm:w-[200px] md:w-[300px] lg:w-[450px] h-auto object-contain mb-[1.5%]"
      />

    </section>
  );
};

export default Courses;