import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { productById, fetchProductsById, isLoading, error } =
    useContext(ProductContext);

  useEffect(() => {
    fetchProductsById(id); // Call the function here without invoking it in the dependency array
  }, [id, fetchProductsById]); // Only pass `id` and `fetchProductsById` as dependencies

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!productById) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>Name: {productById.data.name}</h1>
      <p>Description: {productById.data.description}</p>
      <p>Price: {productById.data.price} $</p>
      <p>Quantity: {productById.data.quantity}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
