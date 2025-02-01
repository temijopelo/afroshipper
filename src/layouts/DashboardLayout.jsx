import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import { RiHome6Line } from "react-icons/ri";

export default function DashboardLayout({ children }) {
  const path = [
    <RiHome6Line
      className="inline-flex justify-center items-center"
      size={20}
    />,
    "User Management",
    "Users",
    "Abdullah Nasir",
  ];

  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <div className="bg-[#0B0E54] p-4 h-full w-[312px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>
        <div className="px-9">
          <div className="py-6">
            <Breadcrumbs path={path} />
          </div>
          {/* Page Content */}
          <main className="overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
