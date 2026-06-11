import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "../App.css";
import loginImage from "../assets/login-library.jpg";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setErrorMessage("");
      setLoading(true);

      await axios.post(
        "http://localhost:3000/auth/register",
        {
          email,
          password,
          role,
          phoneNumber: Number(phoneNumber),
        }
      );

      navigate("/login");
    } catch (error) {
      if (error.response?.status === 409) {
        setErrorMessage(
          "Email already exists. Choose a different email."
        );
      } else {
        setErrorMessage(
          "Something went wrong. Please try again."
        );
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
            <h1 className="auth-title">Register</h1>

            <p className="auth-subtitle">
              Enter your details to create an account.
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
                <span>Phone Number</span>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="auth-input"
                />
              </label>

              <label className="auth-label">
                <span>Role</span>

                <input
                  type="text"
                  placeholder="Enter your role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
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
                <div className="register-login-text">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="auth-link"
                  >
                    Login
                  </Link>
                </div>
              </div>

              <button
                onClick={handleRegister}
                disabled={loading}
                className="auth-button"
              >
                {loading ? "Registering..." : "Register"}
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