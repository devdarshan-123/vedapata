import Navbar from "../Components/Navbar";

function Section() {
  return (
    <div>
      <Navbar />

      <section className="w-full bg-gradient-to-r from-[#3a2a1f] to-[#2b1f17] py-10 px-6 md:px-12 lg:px-16 font-[Vidaloka] text-[#FFFFFF]">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">

            <img
              src="./src/Images/Card1.png"
              alt="course"
              className="w-full max-w-[300px] h-auto object-cover rounded-xl border border-[#e2d3b5]"
            />

            <div className="text-[#FFFFFF]">
              <p className="text-sm text-[#c9bfa8] font-[Bellefair] mb-2">
                Courses & Certifications <span className="mx-1">›</span> Business
              </p>

              <h1 className="text-2xl md:text-3xl font-[Vidaloka] mb-2">
                Medha Suktam
              </h1>

              <p className="text-sm md:text-base mb-4 font-[Bellefair]">
                Learn rhythm, flow, depth by observing expert Vedic chanting.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <span className="text-lg md:text-xl font-[Bellefair]">₹500.00</span>
                <span className="line-through text-[#b9ad95]">₹3269.00</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-[#c9bfa8]">
                <span className="text-yellow-400">★</span>
                <span className="text-white">4.7</span>
                <span>(1200 Reviews)</span>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <button className="bg-white text-black px-8 py-2 rounded-full font-medium hover:opacity-90 font-[Vidaloka]">
              Add to Cart
            </button>

            <button className="border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition font-[Vidaloka]">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
