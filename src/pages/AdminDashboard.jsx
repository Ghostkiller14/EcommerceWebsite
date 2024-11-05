import {
  Add,
  Category,
  ExpandLess,
  ExpandMore,
  People,
  Store,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CategoryPage from "./CategoryPage";

// Sidebar items with actions
const sidebarItems = [
  {
    text: "Users",
    icon: <People />,
    actions: ["Add", "Update", "Delete", "Find"],
  },
  {
    text: "Products",
    icon: <Store />,
    actions: ["Add", "Update", "Delete", "Find"],
  },
  {
    text: "Categories",
    icon: <Category />,
    actions: ["Add", "Update", "Delete", "Find"],
  },
];

const drawerWidth = 240;

export default function AdminDashboard() {
  const [selectedSection, setSelectedSection] = useState("Users");
  const [openSections, setOpenSections] = useState({});
  const [selectedAction, setSelectedAction] = useState(null);

  // Toggle action visibility
  const handleToggleSection = (text) => {
    setOpenSections((prev) => ({
      ...prev,
      [text]: !prev[text],
    }));
    setSelectedSection(text);
    setSelectedAction(null); // Reset selected action when switching sections
  };

  // Handle action selection
  const handleActionClick = (action) => {
    setSelectedAction(action); // Set selected action
  };

  // Render the appropriate form based on selected action
  const renderActionForm = () => {
    switch (selectedAction) {
      case "Add":
        return <AddCategoryForm />;
      case "Update":
        return <UpdateCategoryForm />;
      case "Delete":
        return <DeleteCategoryForm />;
      case "Find":
        return <CategoryPage />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(90deg, #1976d2, #2196f3)",
          padding: "0.5rem 0",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1e2a38",
            color: "#ffffff",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", pt: 2 }}>
          <List>
            {sidebarItems.map((item) => (
              <div key={item.text}>
                <ListItemButton
                  onClick={() => handleToggleSection(item.text)}
                  sx={{
                    "&:hover": { backgroundColor: "#2e3b4e" },
                    color: "#b0bec5",
                    paddingLeft: "20px",
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                  {openSections[item.text] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* Actions for the selected section */}
                <Collapse
                  in={openSections[item.text]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.actions.map((action) => (
                      <ListItemButton
                        key={action}
                        onClick={() => handleActionClick(action)} // Set selected action
                        sx={{ paddingLeft: "40px", color: "#b0bec5" }}
                      >
                        <ListItemText primary={action} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          {selectedSection} Management
        </Typography>

        {selectedAction && renderActionForm()}
      </Box>
    </Box>
  );
}

// Action Forms
function AddCategoryForm() {
  return (
    <Box>
      <Typography variant="h6">Add Category</Typography>
      <form>
        <input type="text" placeholder="Category Name" />
        <Button variant="contained" startIcon={<Add />} sx={{ mb: 2, ml: 2 }}>
          Add Category
        </Button>
      </form>
    </Box>
  );
}

function UpdateCategoryForm() {
  return (
    <Box>
      <Typography variant="h6">Update Category</Typography>
      <form>
        <input type="text" placeholder="Category Name" />
        <Button variant="contained" sx={{ mb: 2, ml: 2 }}>
          Update Category
        </Button>
      </form>
    </Box>
  );
}

function DeleteCategoryForm() {
  return (
    <Box>
      <Typography variant="h6">Delete Category</Typography>
      <form>
        <input type="text" placeholder="Category ID" />
        <Button variant="contained" sx={{ mb: 2, ml: 2 }}>
          Delete Category
        </Button>
      </form>
    </Box>
  );
}

function GetCategories() {
  return <Box></Box>;
}

{
  /* <Typography variant="h6">Categories</Typography>
      <form>
        <input type="text" placeholder="Category ID" />
        <Button variant="contained" sx={{ mb: 2, ml: 2 }}>
          Find Category
        </Button>
      </form> */
}
