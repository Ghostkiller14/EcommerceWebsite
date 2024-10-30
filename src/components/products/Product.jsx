import React from "react";

const Product = ({ product }) => {
  const { name, price, quantity, description } = product;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <h3>{quantity}</h3>
      <h4>{description}</h4>

      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
