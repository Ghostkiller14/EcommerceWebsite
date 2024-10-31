import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Product from "./product";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

const Products = () => {
  const { products } = useContext(ProductContext);

  const items = products || [];
  if (items.length === 0) {
    return <p>No Product Available</p>;
  }

  return (
    <Box
      sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: 4 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((product) => (
          <Product product={product} key={product.productId} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
