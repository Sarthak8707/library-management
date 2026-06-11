import { NavLink } from "react-router-dom";

function BookLogoIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 5.5A2.5 2.5 0 0 1 9 3h8.5a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1.48.88L14 18.5l-3.02 1.88A1 1 0 0 1 9.5 19.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GridIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" />
    </svg>
  );
}

function BookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 4.5h10A2.5 2.5 0 0 1 19 7v10a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 17V7a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[204px] shrink-0 rounded-[18px] bg-[#4f46e5] px-4 py-4 text-white shadow-[0_16px_50px_rgba(79,70,229,0.25)]">
      <div className="flex items-center gap-2.5 px-1 pt-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15">
          <BookLogoIcon className="h-6 w-6 text-white" />
        </div>

        <div className="text-[30px] font-semibold leading-none tracking-[-0.04em]">
          Logo
        </div>
      </div>

      <div className="mt-12 px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
        Main Menu
      </div>

      <nav className="mt-3 space-y-3 px-1 text-[14px]">
        <NavLink
          to="/add-books"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 rounded-[4px] bg-white px-3 py-2 text-[#4f46e5] shadow-sm"
              : "flex items-center gap-3 rounded-[4px] px-3 py-2 text-white/92"
          }
        >
          <GridIcon className="h-4 w-4" />
          <span className="font-medium">Add Book</span>
        </NavLink>

        <NavLink
          to="/books-list"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 rounded-[4px] bg-white px-3 py-2 text-[#4f46e5] shadow-sm"
              : "flex items-center gap-3 rounded-[4px] px-3 py-2 text-white/92"
          }
        >
          <BookIcon className="h-4 w-4" />
          <span className="font-medium">Books Details</span>
        </NavLink>
      </nav>
    </aside>
  );
}