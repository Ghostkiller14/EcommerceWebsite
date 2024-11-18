import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

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
        sx={{
          "& .MuiInputLabel-root": { color: "#2C3E50" },
          "& .MuiOutlinedInput-root": { borderRadius: "8px" },
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          backgroundColor: "#DAA520",
          color: "#1E2A38",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#FFC107",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
