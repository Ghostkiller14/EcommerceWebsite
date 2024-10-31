import React, { useContext } from "react";
import Products from "../components/products/Products";
import { ProductContext } from "../context/productContext";

const HomePage = () => {
  const { products, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <h2>Products are Loading...</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default HomePage;
