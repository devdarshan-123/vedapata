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
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>

              {/* PRICE */}
              <p className="mt-2 text-[#4E2D00] font-semibold">
                ₹{item.price || 500}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Recommended;