import card1 from "../Images/Card1.png";
import card2 from "../Images/Card2.png";
import card3 from "../Images/Card3.png";
import card4 from "../Images/Card4.png";

const Similar = () => {

  const cards = [card1, card2, card3, card4];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 mt-12 py-6">

      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4E2D00] mb-8 font-[Vidaloka] text-center sm:text-left">
        Similar Courses
      </h2>

      {/* Grid */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
        place-items-center
      "
      >

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col max-w-[320px] w-full"
          >

            <img
              src={card}
              alt={`similar course ${index + 1}`}
              className="w-full h-40 sm:h-40 md:h-44 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">

              <h3 className="text-[#4E2D00] text-sm sm:text-base md:text-lg font-[Vidaloka]">
                Observe Masters Chant
              </h3>

              <p className="text-xs sm:text-sm mt-2 text-[#4E2D00] font-[Bellefair] flex-grow">
                Learn rhythm, flow, depth by observing expert Vedic chanting.
              </p>

              <div className="flex gap-2 mt-3 items-center">
                <span className="font-semibold text-[#4E2D00] text-sm sm:text-base">
                  ₹ TBD
                </span>

                <span className="text-gray-400 line-through text-xs sm:text-sm">
                  ₹ 2000.00
                </span>
              </div>

              <p className="text-xs sm:text-sm text-orange-500 mt-2">
                4.7 ★{" "}
                <span className="text-[#4E2D00] font-[Bellefair]">
                  (1200 Reviews)
                </span>
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Similar;