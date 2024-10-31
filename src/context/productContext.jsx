import React, { createContext, useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../services/productsService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [productById, setProductById] = useState({});

  const fetchProductsData = async () => {
    try {
      setIsLoading(true);
      const res = await getAllProducts();
      console.log(res);
      setProducts(Array.isArray(res) ? res : res.data || []); // Ensure it's an array

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const fetchProductsById = async (id) => {
    try {
      const res = await getProductById(id);
      setProductById(res || null);
    } catch {
      setError(error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        error,
        products,
        productById,
        fetchProductsById,
        setProducts,
        setIsLoading,
        setError,
        setProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
