import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const pages = [
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
];

function NavbarLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData && storedData.isLoggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/HomePage">
          <ListItemText primary="Home" />
        </ListItem>
        {pages.map((page) => (
          <ListItem button component={Link} to={page.path} key={page.name}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
        {isAuthenticated && (
          <ListItem button component={Link} to="/userDashboard">
            <ListItemText primary="User Dashboard" />
          </ListItem>
        )}
        <ListItem button component={Link} to="/cart">
          <ListItemText primary="Cart" />
        </ListItem>
        {isAuthenticated ? (
          <ListItem button onClick={handleSignOut}>
            <ListItemText primary="Logout" />
          </ListItem>
        ) : (
          <>
            <ListItem button component={Link} to="/signin">
              <ListItemText primary="Sign In" />
            </ListItem>
            <ListItem button component={Link} to="/signup">
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(90deg, #1976d2, #2196f3)",
        padding: "0.5rem 0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ mr: 1, color: "white" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                mr: 2,
              }}
            >
              LOGO
            </Typography>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
              aria-label="open drawer"
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
            <Button
              component={Link}
              to="/HomePage"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Home
            </Button>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                {page.name}
              </Button>
            ))}
            {isAuthenticated && (
              <Button
                component={Link}
                to="/userDashboard"
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
              >
                User Dashboard
              </Button>
            )}
            {/* Cart button is always accessible */}
            <Button
              component={Link}
              to="/cart"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Cart
            </Button>
          </Box>

          {/* Authentication Links */}
          {isAuthenticated ? (
            <Button onClick={handleSignOut} sx={{ color: "white" }}>
              Logout
            </Button>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button component={Link} to="/signin" sx={{ color: "white" }}>
                Sign In
              </Button>
              <Button component={Link} to="/signup" sx={{ color: "white" }}>
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarLayout;
