import logo from "../Images/Logo.png";
import bg from "../Images/login-bg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }

    } catch (err) {
      console.log(err);
      alert("Error logging in");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-[60%] lg:w-[65%]">
        <img
          src={bg}
          alt="bg"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-[40%] lg:w-[35%] flex items-center justify-center px-4 sm:px-6">

        <form onSubmit={handleLogin} className="w-full max-w-sm py-10">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start mb-6">
            <img src={logo} className="w-16 sm:w-20" />
          </div>

          {/* TITLE */}
          <h2 className="text-lg sm:text-xl text-[#4E2D00] font-[Vidaloka]">
            Login
          </h2>

          <p className="text-sm text-[#61554C] mb-5 font-[Vidaloka]">
            Please login to continue
          </p>

          {/* EMAIL */}
          <label className="text-[#4E2D00] font-[Vidaloka] text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            placeholder="raman@vedapatha.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-md px-3 py-2 mt-1 mb-4 outline-none text-sm"
          />

          {/* PASSWORD */}
          <label className="text-[#4E2D00] font-[Vidaloka] text-sm sm:text-base">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-md px-3 py-2 mt-1 mb-3 outline-none text-sm"
          />

          {/* REMEMBER + FORGOT */}
          <div className="flex justify-between items-center text-xs sm:text-sm mb-6">

            <label className="flex items-center gap-2 text-[#61554C] font-[Vidaloka]">
              <input type="checkbox" />
              Remember password
            </label>

            <span className="text-[#61554C] cursor-pointer font-[Vidaloka]">
              Forgot password?
            </span>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#E6891A] text-white py-2 sm:py-3 rounded-full text-sm sm:text-base"
          >
            Login
          </button>

          {/* REGISTER LINK */}
          <p className="text-xs sm:text-sm text-center mt-5 text-[#61554C] font-[Vidaloka]">
            Don’t have an account?{" "}
            <span
              className="text-[#E6891A] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Register
            </span>
          </p>

          {/* FOOTER */}
          <p className="text-xs text-center text-gray-500 mt-12 sm:mt-16">
            Privacy Policy | Terms of Use
          </p>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;