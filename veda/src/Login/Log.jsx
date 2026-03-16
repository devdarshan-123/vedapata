import logo from "../Images/Logo.png";
import bg from "../Images/login-bg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "1234") {

      const user = {
        email: email,
        authenticated: true
      };

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="w-full min-h-screen flex ">

      <div className="hidden md:block md:w-[75%]">
        <img
          src={bg}
          alt="vedic learning"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-start px-6">

        <form onSubmit={handleLogin} className="w-full max-w-sm">

          <div className="flex flex-col mb-3 mt-5">
            <img src={logo} alt="logo" className="w-20 h-20 mb-2" />
          </div>

          <h2 className="text-lg text-[#4E2D00] mb-1 font-[Vidaloka]">
            Login
          </h2>

          <p className="text-sm text-[#61554C] mb-5 font-[Vidaloka]">
            Please login to continue
          </p>

          <label className="text-md text-[#4E2D00] font-[Vidaloka]">
            Email
          </label>

          <input
            type="email"
            placeholder="raman@vedapatha.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-md px-3 py-2 mt-1 mb-4 outline-none"
          />

          <label className="text-md text-[#4E2D00] font-[Vidaloka]">
            Password
          </label>

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-md px-3 py-2 mt-1 mb-3 outline-none"
          />

          <div className="flex justify-between items-center text-sm mb-6">

            <label className="flex items-center gap-2 text-[#61554C] font-[Vidaloka]">
              <input type="checkbox" />
              Remember password
            </label>

            <span className="text-[#61554C] cursor-pointer font-[Vidaloka]">
              Forgot password?
            </span>

          </div>

          <button
            type="submit"
            className="w-full bg-[#E6891A] text-white py-2 rounded-full"
          >
            Login
          </button>

          <p className="text-sm text-center mt-5 text-[#61554C] font-[Vidaloka]">
            Don't have an account?{" "}
            <span className="text-[#E6891A] cursor-pointer">
              Login
            </span>
          </p>

          <p className="text-xs text-center text-gray-500 mt-16">
            Privacy Policy | Terms of Use
          </p>

        </form>

      </div>

    </div>
  );
}

export default LoginPage;