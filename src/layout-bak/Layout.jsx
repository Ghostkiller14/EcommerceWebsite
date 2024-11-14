import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarLayout from "./NavbarLayout";

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <header>
        <NavbarLayout />
      </header>

      <Box component="main" flexGrow={1}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
