import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "./cartUtils";
import { useNavigate } from "react-router-dom";

function CartPage() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.length * 500;

  return (
    <div className="min-h-screen bg-[#faf7f2] px-4 sm:px-6 md:px-12 py-10 font-[Vidaloka]">

      <h1 className="text-2xl md:text-3xl text-[#4E2D00] mb-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-[#6b5e55]">No items in cart</p>
      ) : (
        <div className="space-y-6">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-6"
            >

              {/* IMAGE */}
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full md:w-[200px] h-[150px] object-cover rounded-lg"
              />

              {/* CONTENT */}
              <div className="flex-1 flex flex-col justify-between">

                <div>
                  <h2 className="text-lg text-[#4E2D00] mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-[#6b5e55] mb-3 font-[Bellefair]">
                    {item.description}
                  </p>

                  <p className="text-[#4E2D00] font-semibold">
                    ₹500.00
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4">

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="border border-red-400 text-red-500 px-4 py-1 rounded-full text-sm w-full sm:w-auto"
                  >
                    Remove
                  </button>

                  <button
                    onClick={() => {
                      localStorage.setItem("cart", JSON.stringify([item]));
                      navigate("/payment");
                    }}
                    className="bg-[#E6891A] text-white px-4 py-1 rounded-full text-sm w-full sm:w-auto"
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </div>
          ))}

          {/* TOTAL */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <h2 className="text-xl text-[#4E2D00]">
              Total: ₹{total}
            </h2>

            <button
              onClick={() => navigate("/payment")}
              className="bg-[#E6891A] text-white px-6 py-2 rounded-full w-full sm:w-auto"
            >
              Proceed to Payment
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default CartPage;