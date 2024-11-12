import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";

const Sorting = () => {
  const [selectedValue, setSelectValue] = useState("");

  const { setSortBy } = useContext(ProductContext);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="sorting-label">Sort By</InputLabel>
      <Select
        labelId="sorting-label"
        id="sort-by-select"
        label="Sort By"
        onChange={handleChange}
        value={selectedValue}
      >
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Price">Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sorting;
