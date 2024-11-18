import { Box, Typography } from "@mui/material";
import React from "react";
import Products from "../component/products/Products";
import Search from "../component/Search";
import Sorting from "../component/Sorting";

const ProductPage = () => {
  return (
    <div
      style={{
        marginTop: "128px",
        padding: "2rem",
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#2C3E50", mb: 2 }}
        >
          Explore Our Products
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", fontSize: "1.1rem" }}>
          Browse through our curated collection of electronic accessories.
        </Typography>
      </Box>

      {/* Search and Sorting Section */}
      <Box
        sx={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          maxWidth: "800px", // Fixed width
          margin: "0 auto", // Center align
          backgroundColor: "#FFFFFF",
          padding: "1rem",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          <Search />
        </Box>
        <Box sx={{ flex: 1, minWidth: "200px" }}>
          <Sorting />
        </Box>
      </Box>

      {/* Product List Section */}
      <Products />
    </div>
  );
};

export default ProductPage;
