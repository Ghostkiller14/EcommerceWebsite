import React from "react";
import { Outlet } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";

const Layout = () => {
  return (
    <div>
      <header>
        <NavbarLayout />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
