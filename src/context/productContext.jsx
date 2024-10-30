import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productsService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getAllProducts();
      console.log(res);
      setProducts(res); // Ensure it's an array
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        error,
        products,
        setProducts,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
