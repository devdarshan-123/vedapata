import { useState } from "react";
import { getCart, clearCart } from "./cartUtils";
import { useNavigate } from "react-router-dom";

function PaymentPage() {

  const navigate = useNavigate();
  const cart = getCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [method, setMethod] = useState("card");

  const total = cart.length * 500;

  const handlePayment = () => {

    if (!name || !email || !address) {
      alert("Please fill all details");
      return;
    }

    alert("Payment Successful ✅");

    clearCart();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] px-4 sm:px-6 md:px-12 py-10 font-[Vidaloka]">

      <h1 className="text-2xl md:text-3xl text-[#4E2D00] mb-8">
        Checkout
      </h1>

      {/* GRID MADE MORE SPACED */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* CUSTOMER DETAILS */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h2 className="text-lg text-[#4E2D00] mb-4">
              Billing Details
            </h2>

            <div className="space-y-4 font-[Bellefair]">

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#d6ccc2] rounded-md px-3 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#d6ccc2] rounded-md px-3 py-3"
              />

              <textarea
                placeholder="Full Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-[#d6ccc2] rounded-md px-3 py-3"
              />

            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h2 className="text-lg text-[#4E2D00] mb-4">
              Payment Method
            </h2>

            <div className="space-y-3 font-[Bellefair] text-[#4E2D00]">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "card"}
                  onChange={() => setMethod("card")}
                />
                Credit / Debit Card
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "upi"}
                  onChange={() => setMethod("upi")}
                />
                UPI Payment
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
                />
                Cash on Delivery
              </label>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE — BIGGER */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">

          <h2 className="text-xl text-[#4E2D00] mb-6">
            Order Summary
          </h2>

          {/* PRODUCTS */}
          <div className="space-y-5 mb-6">

            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

                {/* ✅ BIGGER IMAGE */}
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full sm:w-24 h-40 sm:h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <p className="text-base text-[#4E2D00]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6b5e55] font-[Bellefair]">
                    ₹500
                  </p>
                </div>

              </div>
            ))}

          </div>

          <hr className="mb-5" />

          {/* TOTAL */}
          <div className="flex justify-between text-lg text-[#4E2D00] mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* PAY BUTTON */}
          <button
            onClick={handlePayment}
            className="w-full bg-[#E6891A] text-white py-3 rounded-full text-lg"
          >
            Pay Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default PaymentPage;