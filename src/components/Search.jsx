import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";

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
    <>
      <TextField
        sx={{ marginBottom: "1.5rem" }}
        id="outlined-basic"
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
    </>
  );
};

export default Search;
