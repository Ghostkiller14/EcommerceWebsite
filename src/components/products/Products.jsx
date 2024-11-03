import { Pagination, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/productContext";
import Product from "./product";

const Products = () => {
  const {
    products,
    fetchProductsData,

    pageNumber,
    setPageNumber,
    fetchSortProductData,

    fetchProductByName,
    totalPages,
  } = useContext(ProductContext);

  const items = products || [];
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const sortProductByPrice = async () => {
    return await fetchSortProductData();
  };

  const handleSearch = async () => {
    await fetchProductByName(searchTerm);
    setSearchTerm("");
  };

  const handleReset = async () => {
    await fetchProductsData();
  };

  if (items.length === 0) {
    return <p>No Product Available</p>;
  }

  return (
    <Box
      sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: 4 }}
    >
      <TextField
        sx={{ marginBottom: "1.5rem" }}
        id="outlined-basic"
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>

      <button onClick={sortProductByPrice}>SortByPrice</button>
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
