import React from "react";
import { useNavigate } from "react-router-dom";

const Recommended = ({ products }) => {

  const navigate = useNavigate();

  return (
    <div className="mt-10 overflow-hidden">

      {/* SCROLL WRAPPER */}
      <div className="flex gap-6 animate-scroll">

        {/* DUPLICATE FOR LOOP */}
        {[...products, ...products].map((item, index) => (

          <div
            key={index}
            onClick={() => navigate(`/detail/${item.id}`)}
            className="min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-md cursor-pointer card-hover flex-shrink-0"
          >

            <img
              src={item.image_url}
              className="w-full h-40 object-cover rounded-t-xl"
              alt={item.title}
            />

            <div className="p-3">

              {/* TITLE */}
              <h3 className="text-[#4E2D00] font-semibold truncate">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-[#4E2D00] font-[Bellefair] line-clamp-2">
                {item.description}
              </p>

              {/* PRICE */}
              <div className="mt-2">
                {item.price ? (
                  <>
                    <span className="font-semibold text-[#4E2D00] text-sm sm:text-base">
                      ₹ {item.price}
                    </span>
                    <span className="block text-gray-400 line-through text-xs sm:text-sm font-[Bellefair]">
                      ₹ 3269.00
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-[#4E2D00] text-sm sm:text-base">
                      ₹ TBD
                    </span>
                    <span className="block text-[#7a6756] text-xs sm:text-sm font-[Bellefair]">
                      Dakhshina upon consultation
                    </span>
                  </>
                )}
              </div>

              {/* STARS + REVIEWS */}
              <p className="text-xs sm:text-sm mt-2 font-[Bellefair] text-[#7a6756]">
                <span className="text-[#d08a28]">4.7 ★</span>{" "}
                <span>(1200 Reviews)</span>
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Recommended;