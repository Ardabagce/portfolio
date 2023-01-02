import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "../Components/Dashboard/Navbars/AdminNavbar.js";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar.js";
import HeaderStats from "../Components/Dashboard/Headers/HeaderStats.js";
import FooterAdmin from "../Components/Dashboard/Footers/FooterAdmin";

// views

import Dashboard from "../views/admin/Dashboard.js";
import Settings from "../views/admin/Settings.js";
import Tables from "../views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Navigate from="/admin" to="/admin/dashboard" />
          </Routes>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
