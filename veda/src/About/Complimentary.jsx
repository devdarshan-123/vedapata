import React from "react";

const Complimentary = () => {

  // ✅ Use public folder paths (NO import)
  const cards = [
    { img: "/Card1.png", title: "Swargnana Patha" },
    { img: "/Card2.png", title: "Ganapati Mantram" },
    { img: "/Card3.png", title: "Saraswati Mantram" },
    { img: "/Card4.png", title: "Kshama Yachana Mantra" },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-16 mt-12">

      <h2 className="text-lg sm:text-xl md:text-2xl text-[#4E2D00] mb-8 font-[Vidaloka] text-center sm:text-left">
        Complimentary Learnings - Free with this course
      </h2>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-3
        place-items-center
      ">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm overflow-hidden max-w-[300px] w-full flex flex-col"
          >

            <img
              src={card.img}
              alt={`complimentary card ${index + 1}`}
              className="w-full h-36 sm:h-40 md:h-44 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">

              <h3 className="text-[#4E2D00] text-sm sm:text-base md:text-lg font-[Vidaloka]">
                {card.title}
              </h3>

              <p className="text-xs sm:text-sm mt-2 text-[#4E2D00] font-[Bellefair] flex-grow">
                Learn rhythm, flow, depth by observing expert Vedic chanting.
              </p>

              {/* PRICE + TEXT (matches uploaded screenshot) */}
              <div className="flex gap-2 mt-3 items-center">
                <span className="font-semibold text-[#4E2D00] text-sm sm:text-base">
                  ₹ TBD
                </span>
                <span className="text-[#7a6756] text-xs sm:text-sm font-[Bellefair]">
                  Dakhshina upon consultation
                </span>
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
    </section>
  );
};

export default Complimentary;