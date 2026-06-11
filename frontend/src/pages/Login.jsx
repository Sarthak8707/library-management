import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import loginImage from "../assets/login-library.jpg";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setErrorMessage("");
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token;

      localStorage.setItem("token", token);

      navigate("/books-list");
    } catch (error) {
      if (error.response?.status === 401) {
        setErrorMessage("Username or password is incorrect");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-white">
      <div className="flex h-full">
        {/* Left Side */}

        <div className="flex w-[40%] items-center justify-center bg-[#fafafa] px-10">
          <div className="w-full max-w-[430px]">
            <h1 className="text-[42px] font-semibold text-slate-700">
              Login
            </h1>

            <p className="mt-2 text-[14px] text-slate-500">
              Enter your details to login into the system.
            </p>

            <div className="mt-12">
              <label className="block">
                <span className="mb-3 block text-[14px] font-medium text-slate-800">
                  Email / Username
                </span>

                <input
                  type="text"
                  placeholder="Enter your email/username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[52px] w-full rounded-lg border border-slate-300 px-4 text-[14px] outline-none focus:border-[#4f46e5]"
                />
              </label>

              <label className="mt-7 block">
                <span className="mb-3 block text-[14px] font-medium text-slate-800">
                  Password
                </span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-[52px] w-full rounded-lg border border-slate-300 px-4 text-[14px] outline-none focus:border-[#4f46e5]"
                />
              </label>

              {errorMessage && (
                <p className="mt-3 text-sm text-red-600">
                  {errorMessage}
                </p>
              )}

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="text-[14px] font-medium text-[#2563eb]"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="mt-12 h-[52px] w-full rounded-lg bg-[#4f46e5] text-[14px] font-medium text-white transition hover:bg-[#4338ca] disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="h-full w-[60%]">
          <img
            src={loginImage}
            alt="Library"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}