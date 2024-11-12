import { AppBar, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>

        <Typography variant="h6">Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
