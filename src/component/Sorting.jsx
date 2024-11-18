import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const Sorting = () => {
  const [selectedValue, setSelectValue] = useState("");

  const { setSortBy } = useContext(ProductContext);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    setSortBy(event.target.value);
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <InputLabel
        id="sorting-label"
        sx={{ color: "#2C3E50", fontWeight: "bold" }}
      >
        Sort By
      </InputLabel>
      <Select
        labelId="sorting-label"
        id="sort-by-select"
        label="Sort By"
        onChange={handleChange}
        value={selectedValue}
        sx={{
          "& .MuiSelect-select": {
            padding: "0.8rem",
            fontWeight: "bold",
          },
        }}
      >
        <MenuItem value="Name">Name</MenuItem>
        <MenuItem value="Price">Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sorting;
