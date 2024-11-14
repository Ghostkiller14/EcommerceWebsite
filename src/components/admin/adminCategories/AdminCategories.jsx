import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";

import { CategoryContext } from "../../../context-bak/CategoryContext";
import AdminCategory from "./AdminCategory";

const AdminCategories = ({ onEditCategory }) => {
  const { categories } = useContext(CategoryContext);

  const items = categories || [];

  if (items.length === 0) {
    return <p>No Category Available</p>;
  }

  return (
    <Box
      sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: 4 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((category) => (
          <AdminCategory
            category={category}
            key={category.categoryId}
            onEditCategory={onEditCategory}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AdminCategories;
