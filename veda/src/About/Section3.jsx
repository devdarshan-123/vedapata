import React from "react";

import icon1 from "/src/Images/icon1.png";
import icon2 from "/src/Images/icon2.png";
import icon3 from "/src/Images/icon3.png";
import icon4 from "/src/Images/icon4.png";
import icon5 from "/src/Images/icon5.png";
import icon6 from "/src/Images/icon6.png";
import icon7 from "/src/Images/icon7.png";
import icon8 from "/src/Images/icon8.png";
import icon9 from "/src/Images/icon9.png";
import icon10 from "/src/Images/icon10.png";

const benefits = [
  { icon: icon1, text: "Improves comprehension and analytical ability" },
  { icon: icon2, text: "Enhances memory, recall, and articulation" },
  { icon: icon3, text: "Develops clarity and depth of understanding" },
  { icon: icon4, text: "Reduces confusion and indecisiveness" },
  { icon: icon5, text: "Builds confidence in learning and expression" },
  { icon: icon6, text: "Supports calm, focused mental states" },
  { icon: icon7, text: "Removes intellectual arrogance" },
  { icon: icon8, text: "Prepares the mind for higher knowledge (jñāna-yoga)" },
  { icon: icon9, text: "Strengthens manovaha srotas" },
  { icon: icon10, text: "Useful in learning difficulties and stress-related cognitive fatigue" },
];

const Benefits = () => {
  return (
    <section className="w-full text-[#4E2D00] py-12 px-6 md:px-12 lg:px-16 font-[Bellefair]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-xl md:text-2xl lg:text-3xl font-[Vidaloka] text-[#5a3a1a] mb-8 md:mb-12 text-center md:text-left">
          Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="border border-[#e0c9a6] rounded-xl p-6 flex flex-col items-center text-center bg-white hover:shadow-md transition"
            >
              <img
                src={item.icon}
                alt="benefit icon"
                className="w-10 h-10 md:w-12 md:h-12 mb-4 object-contain"
              />

              
              <p className="text-sm md:text-base text-[#6b4a2b] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;