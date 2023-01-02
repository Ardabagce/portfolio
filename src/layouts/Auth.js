import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import Navbar from "../Components/Dashboard/Navbars/AuthNavbar";
import FooterSmall from "../Components/Dashboard/Footers/FooterSmall.js";

// views

import Login from "../views/auth/Login"
import Register from "../views/auth/Register"

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../Assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Routes>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Navigate from="/auth" to="/auth/login" />
          </Routes>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
