import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";

const SearchLayout = () => {
  const { Name } = useParams();

  const { fetchProductByName, productByName, isLoading } =
    useContext(ProductContext);

  useEffect(() => {
    if (Name) {
      setSearchTerm(Name);
      fetchProductByName(Name);
    }
  }, [Name, fetchProductByName]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (search) => {
    setSearchTerm(search);
    //fetchProductByName(search);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  const items = productByName || [];

  //const { name, description, price, quantity } = productByName.data;

  return (
    <div>
      <TextField
        sx={{ marginBottom: "1rem" }}
        id="outlined-basic"
        label="Search Products"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />

      <button
        onClick={() => {
          if (searchTerm != null) {
            fetchProductByName(searchTerm);
          }
        }}
      >
        Search
      </button>
      {items.map((productName) => {
        return (
          <>
            <h1>Name:{productName.name} </h1>;
          </>
        );
      })}
    </div>
  );
};

export default SearchLayout;
