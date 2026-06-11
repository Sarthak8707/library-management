import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../App.css";
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
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <div className="auth-content">
            <h1 className="auth-title">Login</h1>

            <p className="auth-subtitle">
              Enter your details to login into the system.
            </p>

            <div className="auth-form">
              <label className="auth-label">
                <span>Email / Username</span>

                <input
                  type="text"
                  placeholder="Enter your email/username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                />
              </label>

              <label className="auth-label">
                <span>Password</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                />
              </label>

              {errorMessage && (
                <p className="auth-error">
                  {errorMessage}
                </p>
              )}

              <div className="auth-link-row">
                <button
                  type="button"
                  className="auth-link-button"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="auth-button"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </div>

        <div className="auth-right">
          <img
            src={loginImage}
            alt="Library"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
}