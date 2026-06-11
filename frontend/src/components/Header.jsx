import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
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

function BellIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 4a5 5 0 0 0-5 5v3.2c0 .8-.3 1.6-.8 2.2L5 16.2h14l-1.2-1.8c-.5-.6-.8-1.4-.8-2.2V9a5 5 0 0 0-5-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="flex h-[54px] items-center justify-between rounded-[10px] bg-white px-5 shadow-[0_8px_30px_rgba(16,24,40,0.06)]">
      <div>
        <div className="text-[29px] font-semibold leading-none tracking-[-0.05em] text-slate-800">
          Welcome!
        </div>

        <div className="mt-1 text-[8px] leading-none text-slate-500">
          Lorem ipsum dolor sit amet consectetur nec faucibus.
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-9 w-[228px] items-center gap-2 rounded-[4px] bg-[#f4f4f6] px-3 text-[13px] text-slate-400">
          <SearchIcon className="h-4 w-4 text-slate-500" />
          <span>Search anything here...</span>
        </div>

        <button className="flex h-9 w-9 items-center justify-center rounded-full">
          <BellIcon className="h-4.5 w-4.5 text-slate-500" />
        </button>

        <div className="h-8 w-px bg-slate-200" />

        <div className="relative">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 rounded-full px-1 py-0.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f08a24] text-[14px] font-semibold text-white">
              A
            </div>

            <ChevronDownIcon className="h-4 w-4 text-slate-500" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-11 z-50 w-36 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
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