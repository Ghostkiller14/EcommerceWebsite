import AdbIcon from "@mui/icons-material/Adb";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  //{ name: "s", path: "/blog" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavbarLayout() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
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

          {/* HomePage link always displayed */}
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
          </Box>

          {/* Conditionally render based on authentication status */}
          {isAuthenticated ? (
            <>
              {/* Regular Navbar for Authenticated Users */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
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

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, border: "2px solid #fff" }}
                  >
                    <Avatar
                      alt="User Avatar"
                      src="/static/images/avatar/2.jpg"
                    />
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
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              {/* Navbar for Unauthenticated Users */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  component={Link}
                  to="/signin"
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarLayout;
