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
  { name: "Home", path: "/" },
  { name: "About Us", path: "/aboutus" },
  { name: "Contact", path: "/contact" },
  { name: "Cart", path: "/cart" },
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
      sx={{ width: 250, padding: 2, backgroundColor: "#F5F5F5" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem button component={Link} to={page.path} key={page.name}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
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
        backgroundColor: "#1E2A38",
        color: "white",
        boxShadow: "none",
        borderBottom: "2px solid #DAA520",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Left Aligned Navigation Links */}
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1, gap: 3 }}
          >
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "#DAA520",
                mr: 3,
              }}
            >
              EliahTech
            </Typography>

            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": { color: "#DAA520" },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Right Aligned Authentication Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {isAuthenticated ? (
              <Button
                onClick={handleSignOut}
                sx={{
                  color: "white",
                  fontSize: "1rem",
                  textTransform: "none",
                  "&:hover": { color: "#DAA520" },
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/signin"
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": { color: "#DAA520" },
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    color: "#DAA520",
                    fontSize: "1rem",
                    textTransform: "none",
                    border: "1px solid #DAA520",
                    "&:hover": {
                      backgroundColor: "#FFC107",
                      color: "#1E2A38",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Navigation */}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarLayout;
