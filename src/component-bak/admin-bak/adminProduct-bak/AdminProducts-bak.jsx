import { Box, Grid, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { ProductContext } from "../../../context-bak/ProductContext";
import AdminProduct from "./AdminProduct-bak";

const AdminProducts = ({ onEditProduct }) => {
  const { products, pageNumber, setPageNumber, totalPages } =
    useContext(ProductContext);

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
          <AdminProduct
            product={product}
            key={product.productId}
            onEditProduct={onEditProduct}
          />
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

export default AdminProducts;
