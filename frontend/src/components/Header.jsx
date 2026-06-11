import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="icon-small">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 16l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="icon-small">
      <path
        d="M12 4a5 5 0 0 0-5 5v3.2c0 .8-.3 1.6-.8 2.2L5 16.2h14l-1.2-1.8c-.5-.6-.8-1.4-.8-2.2V9a5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="icon-small">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({
  searchTerm,
  setSearchTerm,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <div>
        <div className="header-title">Welcome!</div>

        <div className="header-subtitle">
          Lorem ipsum dolor sit amet consectetur nec faucibus.
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <SearchIcon />

          <input
            type="text"
            placeholder="Search anything here..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="search-input"
          />
        </div>

        <button className="icon-button">
          <BellIcon />
        </button>

        <div className="header-divider"></div>

        <div className="header-profile">
          <button
            onClick={() =>
              setShowDropdown((prev) => !prev)
            }
            className="profile-button"
          >
            <div className="avatar-circle">A</div>
            <ChevronDownIcon />
          </button>

          {showDropdown && (
            <div className="dropdown-menu">
              <button
                onClick={handleLogout}
                className="dropdown-item"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}