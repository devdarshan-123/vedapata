import logo from "../Images/Logo.png";
import bg from "../Images/login-bg.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert(data.error);
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">

      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-[60%] lg:w-[65%]">
        <img src={bg} className="w-full h-screen object-cover" />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-[40%] lg:w-[35%] flex items-center justify-center px-4 sm:px-6">

        <form onSubmit={handleRegister} className="w-full max-w-sm py-10">

          {/* LOGO */}
          <div className="flex justify-center md:justify-start mb-5">
            <img src={logo} className="w-16 sm:w-20" />
          </div>

          {/* TITLE */}
          <h2 className="text-lg sm:text-xl text-[#4E2D00] font-[Vidaloka] mb-4">
            Register
          </h2>

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-xl px-3 py-2 mb-3 outline-none text-sm"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-xl px-3 py-2 mb-3 outline-none text-sm"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-xl px-3 py-2 mb-3 outline-none text-sm"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-xl px-3 py-2 mb-8 outline-none text-sm"
          />

          {/* BUTTON */}
          <button className="w-full bg-[#E6891A] text-white py-2 sm:py-3 rounded-full text-sm sm:text-base">
            Register
          </button>

          {/* LOGIN LINK */}
          <p className="mt-5 text-center text-xs sm:text-sm text-[#61554C] font-[Vidaloka]">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#E6891A] cursor-pointer"
            >
              Login
            </span>
          </p>

          {/* FOOTER */}
          <p className="text-xs text-center text-gray-500 mt-15 sm:mt-19">
            Privacy Policy | Terms of Use
          </p>

        </form>

      </div>

    </div>
  );
}

export default RegisterPage;