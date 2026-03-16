
import card1 from "../Images/Card1.png";
import card2 from "../Images/Card2.png";
import card3 from "../Images/Card3.png";
import card4 from "../Images/Card4.png";
import card5 from "../Images/Card5.png";
import { useNavigate } from "react-router-dom";


const Recommended = () => {
  const navigate = useNavigate();
  const det= () => {navigate("/detail")};

  return (
    <section className="px-4 sm:px-10 mt-8 font-[vidaloka]  ">

      
      <h2 className="text-xl md:text-2xl  mb-6 text-[#4E2D00] font-[Bellefair]">
        Recommended for you
      </h2>

      
      <div className="flex gap-6 overflow-x-auto pb-4">

      
        <div className="min-w-[260px] bg-white rounded-xl shadow-sm" onClick={det}>
          <img src={card1} className="w-full h-40 object-cover rounded-t-xl" />

          <div className="p-4">
            <h3 className="font-[Vidaloka] text-[#4E2D00] text-lg">Observe Masters Chant</h3>

            <p className="text-sm mt-1 text-[#4E2D00] font-[Bellefair] ">
              Learn rhythm, flow, depth by observing expert Vedic chanting.
            </p>

            <p className="mt-3 font-semibold text-[#4E2D00]">₹ TBD</p>

            <p className="text-sm text-orange-500 mt-2">
              4.7 ★ <span className="text-[#4E2D00] font-[Bellefair]">(1200 Reviews)</span>
            </p>
          </div>
        </div>

    
        <div className="min-w-[260px] bg-white rounded-xl shadow-lg" onClick={det}>
          <img src={card2} className="w-full h-40 object-cover rounded-t-xl" />

          <div className="p-4">
            <h3 className="font-[Vidaloka] text-[#4E2D00] text-lg">Observe Masters Chant</h3>

            <p className="text-sm text-[#4E2D00] mt-1 font-[Bellefair]">
              Learn rhythm, flow, depth by observing expert Vedic chanting.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="font-semibold text-[#4E2D00]">₹  TBD</span>
              <span className="text-gray-400 line-through text-sm">
                ₹ 2000.00
              </span>
            </div>

            <p className="text-sm text-orange-500 mt-2">
              4.7 ★ <span className="text-[#4E2D00] font-[Bellefair]">(1200 Reviews)</span>
            </p>
          </div>
        </div>

      
        <div className="min-w-[260px] bg-white rounded-xl shadow-lg" onClick={det}>
          <img src={card3} className="w-full h-40 object-cover rounded-t-xl" />

          <div className="p-4">
            <h3 className="font-[Vidaloka] text-[#4E2D00] text-lg">Observe Masters Chant</h3>

            <p className="text-sm text-[#4E2D00] mt-1 font-[Bellefair]">
              Learn rhythm, flow, depth by observing expert Vedic chanting.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="font-semibold text-[#4E2D00]">₹ TBD</span>
              <span className="text-gray-400 line-through text-sm">
                ₹ 2000.00
              </span>
            </div>

            <p className="text-sm text-orange-500 mt-2">
              4.7 ★ <span className="text-[#4E2D00] font-[Bellefair]">(1200 Reviews)</span>
            </p>
          </div>
        </div>

        
        <div className="min-w-[260px] bg-white rounded-xl shadow-lg" onClick={det}>
          <img src={card4} className="w-full h-40 object-cover rounded-t-xl" />

          <div className="p-4">
            <h3 className="font-[Vidaloka] text-[#4E2D00] text-lg">Observe Masters Chant</h3>

            <p className="text-sm text-[#4E2D00] mt-1 font-[Bellefair]">
              Learn rhythm, flow, depth by observing expert Vedic chanting.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="font-semibold text-[#4E2D00]">₹ TBD</span>
              <span className="text-gray-400 line-through text-sm">
                ₹ 2000.00
              </span>
            </div>

            <p className="text-sm text-orange-500 mt-2">
              4.7 ★ <span className="text-[#4E2D00] font-[Bellefair]">(1200 Reviews)</span>
            </p>
          </div>
        </div>

        
        <div className="min-w-[260px] bg-white rounded-xl shadow-lg" onClick={det}>
          <img src={card5} className="w-full h-40 object-cover rounded-t-xl" />

          <div className="p-4">
            <h3 className="font-[Vidaloka] text-[#4E2D00] text-lg">Observe Masters Chant</h3>

            <p className="text-sm  mt-1 text-[#4E2D00] font-[Bellefair]">
              Learn rhythm, flow, depth by observing expert Vedic chanting.
            </p>

            <div className="flex gap-2 mt-3">
              <span className="font-semibold text-[#4E2D00]">₹ TBD</span>
              <span className="text-gray-400 line-through text-sm">
                ₹ 2000.00
              </span>
            </div>

            <p className="text-sm text-orange-500 mt-2">
              4.7 ★ <span className="text-[#4E2D00] font-[Bellefair]">(1200 Reviews)</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recommended;