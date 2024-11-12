import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu"; // Import the MenuIcon for mobile view
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer"; // Import Drawer for mobile menu
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Cart", path: "/cart" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavbarLayout() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false); // State for Drawer
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData && storedData.isLoggedIn) {
      setIsAuthenticated(true);
      setUserRole(storedData.Status);
    }
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");

    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserRole(null);
    handleCloseUserMenu();
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

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
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "white",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
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

          {/* Desktop view - Main Nav Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, mr: 2 }}>
            <Button
              component={Link}
              to="/HomePage"
              sx={{
                color: "white",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              HomePage
            </Button>
            {isAuthenticated &&
              pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          {/* Mobile view - Menu Icon */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton color="inherit" onClick={toggleMobileMenu}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* User Menu */}
          {isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, border: "2px solid #fff" }}
                >
                  <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting === "Logout" ? (
                        <span onClick={handleSignOut}>{setting}</span>
                      ) : (
                        setting
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
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

          {/* Drawer for Mobile View */}
          <Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                padding: 2,
              }}
              role="presentation"
              onClick={toggleMobileMenu}
              onKeyDown={toggleMobileMenu}
            >
              <Button component={Link} to="/HomePage" sx={{ mb: 2 }}>
                HomePage
              </Button>
              {isAuthenticated &&
                pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    sx={{ mb: 2 }}
                  >
                    {page.name}
                  </Button>
                ))}
              {!isAuthenticated && (
                <>
                  <Button component={Link} to="/signin" sx={{ mb: 2 }}>
                    Sign In
                  </Button>
                  <Button component={Link} to="/signup" sx={{ mb: 2 }}>
                    Sign Up
                  </Button>
                  <Button component={Link} to="/cart" sx={{ mb: 2 }}>
                    Cart
                  </Button>
                </>
              )}
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarLayout;
