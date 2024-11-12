import { Category, ExitToApp, People, Store } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import { Link, Outlet } from "react-router-dom";

// Sidebar items
const sidebarItems = [
  { text: "Users", icon: <People />, route: "users" },
  { text: "Products", icon: <Store />, route: "products" },
  { text: "Categories", icon: <Category />, route: "categories" },
];

// Custom theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

export default function AdminDashboard() {
  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem("user");

    localStorage.removeItem("token");

    setTimeout(() => {
      window.location.href = "/signin";
    }, 1500);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* App Bar */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
              backgroundColor: "#424242",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {sidebarItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.route}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Sign Out Button */}
          <Box sx={{ padding: 2 }}>
            <Button
              startIcon={<ExitToApp />}
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleSignOut}
              sx={{
                textTransform: "none",
                color: "#ffffff",
                backgroundColor: "#d32f2f",
              }}
            >
              Sign Out
            </Button>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet /> {/* Renders nested routes here */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
