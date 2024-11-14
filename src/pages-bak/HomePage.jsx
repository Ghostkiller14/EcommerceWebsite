import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import Products from "../component-bak/products/Products";
import Search from "../component-bak/Search";
import Sorting from "../component-bak/Sorting";

const HomePage = () => {
  return (
    <div style={{ marginTop: "128px", padding: "2rem" }}>
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#333", mb: 2 }}
        >
          Explore Our Products
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", marginBottom: "1.5rem" }}
        >
          Find the perfect item for your needs and sort them to discover the
          best options.
        </Typography>


        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <Search />
          </Grid>
          <Grid item xs={12} md={5}>
            <Sorting />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Products />
      </Box>
    </div>
  );
};

export default HomePage;
