import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { productById, fetchProductsById, isLoading, error } =
    useContext(ProductContext);

  useEffect(() => {
    fetchProductsById(id);
  }, [id, fetchProductsById]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!productById || !productById.data) {
    return <h2>Product not found</h2>;
  }

  const { name, description, price, quantity } = productById.data;

  return (
    <div>
      <h1>Name: {name || "Product not found"}</h1>
      <p>Description: {description || "No description available."}</p>
      <p>Price: {price} $</p>
      <p>Quantity: {quantity}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
