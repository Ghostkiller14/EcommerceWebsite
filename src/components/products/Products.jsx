import { Pagination } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Product from "./product";

const Products = () => {
  const { error, isLoading, products, pageNumber, setPageNumber, totalPages } =
    useContext(ProductContext);

  if (isLoading) {
    return <h2>Products are Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

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

      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={(event, page) => setPageNumber(page)}
        sx={{ marginTop: "1.5rem" }} // Add some spacing
      />
    </Box>
  );
};

export default Products;
