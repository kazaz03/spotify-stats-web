import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
