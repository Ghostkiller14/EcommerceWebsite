import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context-bak/ProductContext";

const Search = () => {
  const { setSearchValue } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(searchTerm);
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      <TextField
        id="outlined-basic"
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{ padding: "0.7rem 1.5rem", height: "fit-content" }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
