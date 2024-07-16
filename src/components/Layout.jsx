import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <main className="grid grid-cols-12">
      <div className="sidebar col-span-2">
        <SideBar />
      </div>
      <div className="outlet col-span-10 bg-slate-100">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
