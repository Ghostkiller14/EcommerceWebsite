import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import Product from "./product";

const Products = () => {
  const { products } = useContext(ProductContext);

  // Check if products exists and has items
  const items = products.items || []; // Default to an empty array if items is undefined

  if (items.length === 0) {
    return <p>No Product Available</p>;
  }

  return (
    <div>
      {items.map((product) => (

        <Product product = {product}/>


      ))}
    </div>
  );
};

export default Products;
