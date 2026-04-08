import React, { useEffect, useState } from "react";
import Sec from "../Images/Sec1.png";

const Section1 = () => {
  const images = [Sec, "/stoned.jpeg"];
  const [activeImage, setActiveImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 350);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex justify-center mt-8 md:mt-12 lg:mt-16 w-full px-4">
      <img
        src={images[activeImage]}
        alt="Section 1"
        className={`w-full max-w-[1200px] h-auto object-contain transition-all duration-500 ease-in-out ${
          isFading ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"
        } ${activeImage === 1 ? "rounded-2xl shadow-lg" : ""}`}
      />
    </div>
  );
};

export default Section1;