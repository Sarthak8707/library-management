import { NavLink } from "react-router-dom";
import "../App.css";

function BookLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="logo-icon">
      <path
        d="M6.5 5.5A2.5 2.5 0 0 1 9 3h8.5a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1.48.88L14 18.5l-3.02 1.88A1 1 0 0 1 9.5 19.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
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
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">
          <BookLogoIcon />
        </div>

        <div className="sidebar-title">
          Logo
        </div>
      </div>

      <div className="sidebar-heading">
        Main Menu
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/add-books"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <GridIcon />
          <span>Add Book</span>
        </NavLink>

        <NavLink
          to="/books-list"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <BookIcon />
          <span>Books Details</span>
        </NavLink>
      </nav>
    </aside>
  );
}

