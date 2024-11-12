import { Box, Grid } from "@mui/material";
import React from "react";
import Products from "../components/products/Products";
import Search from "../components/Search";
import Sorting from "../components/Sorting";

const HomePage = () => {
  return (
    <div style={{ marginTop: "128px", padding: "1rem" }}>
      <Box sx={{ marginBottom: "1.5rem" }}>
        {/* Flex container for Search and Sorting */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Search />
          </Grid>
          <Grid item xs={12} md={4}>
            <Sorting />
          </Grid>
        </Grid>
      </Box>
      <Products />
    </div>
  );
};

export default HomePage;
