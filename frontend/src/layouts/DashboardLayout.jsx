import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f7f7fb] p-2">
      <div className="flex min-h-[calc(100vh-1rem)]">
        <Sidebar />

        <div className="flex-1 ml-2">
          <Header />

          <div className="mt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}