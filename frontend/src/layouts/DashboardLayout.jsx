import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import "../App.css";

export default function DashboardLayout() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <Sidebar />

        <main className="dashboard-main">
          <Header
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <div className="dashboard-content">
            <Outlet
              context={{
                searchTerm,
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}