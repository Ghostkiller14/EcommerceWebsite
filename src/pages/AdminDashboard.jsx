import { Add, Category, People, Store } from "@mui/icons-material";
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
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useContext, useState } from "react";
import AdminCategories from "../components/admin/adminCategories/AdminCategories";
import { CategoryContext } from "../context/categoryContext";

// Sidebar items
const sidebarItems = [
  { text: "Users", icon: <People />, route: "/users" },
  { text: "Products", icon: <Store />, route: "/products" },
  { text: "Categories", icon: <Category />, route: "/categories" },
];

// Create a custom theme for the overall application
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
  const [selectedSection, setSelectedSection] = React.useState("Users");

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

        {/* Sidebar Navigation */}
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
              backgroundColor: "#424242", // Darker background for the sidebar
              color: "#ffffff", // White text color
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
                  onClick={() => setSelectedSection(item.text)}
                >
                  <ListItemIcon sx={{ color: "#ffffff" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            {selectedSection} Management
          </Typography>

          {/* Render the CRUD Table */}
          <Box>
            {selectedSection === "Users" && <UserManagement />}
            {selectedSection === "Products" && <ProductManagement />}
            {selectedSection === "Categories" && <CategoryManagement />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// User Management Component
function UserManagement() {
  return (
    <Box>
      <Typography variant="h6">User List</Typography>
      <Button variant="contained" startIcon={<Add />} sx={{ mb: 2 }}>
        Add User
      </Button>
      {/* Table or Grid with Users */}
      {/* Each row will have Edit and Delete buttons */}
    </Box>
  );
}

// Product Management Component
function ProductManagement() {
  return (
    <Box>
      <Typography variant="h6">Product List</Typography>
      <Button variant="contained" startIcon={<Add />} sx={{ mb: 2 }}>
        Add Product
      </Button>
      {/* Table or Grid with Products */}
      {/* Each row will have Edit and Delete buttons */}
    </Box>
  );
}

// Category Management Component
function CategoryManagement() {
  const { addCategoryByName, updateCategoryName, updateCategory } =
    useContext(CategoryContext);
  const [formData, setFormData] = useState({
    categoryId: null,
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.categoryId) {
      const res = await updateCategoryName(formData.categoryId, formData);
      console.log(res);
    } else {
      const postCategory = await addCategoryByName(formData);
      console.log("Category Name :", postCategory);
    }

    setFormData({ categoryId: null, name: "" });
  };

  const setUpdateCategory = async (category) => {
    setFormData({
      categoryId: category.categoryId,
      name: category.name,
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Category List</Typography>

        <TextField onChange={handleChange} name="name" value={formData.name} />

        <Button
          type="submit"
          variant="contained"
          startIcon={<Add />}
          sx={{ mb: 2 }}
        >
          {formData.categoryId ? "Update Category" : "Add Category"}
        </Button>
      </Box>
      <AdminCategories onEditCategory={setUpdateCategory} />
    </>
  );
}
