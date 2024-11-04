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

  const option1 = "Name";
  const option2 = "Price";

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onChange={handleChange}
        value={selectedValue}
      >
        <MenuItem value={option1}>Name</MenuItem>
        <MenuItem value={option2}>Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sorting;
