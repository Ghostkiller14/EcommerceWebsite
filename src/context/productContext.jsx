import React, { createContext, useEffect, useState } from "react";
import {
  getAllProducts,
  getPaginatedProduct,
  getProductById,
  getProductByName,
  getSortProductByPrice,
} from "../services/productsService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productById, setProductById] = useState(null);
  //const [productByName, setProductByName] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

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

  const fetchPaginatedProductData = async (pageNumber, pageSize) => {
    setIsLoading(true); // Start loading
    try {
      const res = await getPaginatedProduct(pageNumber, pageSize);
      console.log(res); // Log the response

      // Update this part to access the correct property
      if (res && Array.isArray(res.items) && res.totalPages !== undefined) {
        setProducts(res.items); // Set products from res.items
        setTotalPages(res.totalPages); // Set total pages
      } else {
        console.error("Unexpected response structure:", res);
        setError("Failed to load products. Please try again later."); // Provide user feedback
      }
    } catch (error) {
      console.error("Failed to fetch paginated products", error);
      setError("An error occurred while fetching products."); // Provide user feedback
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const fetchSortProductData = async () => {
    setIsLoading(true);
    try {
      const res = await getSortProductByPrice();
      console.log(res); 
      setProducts(Array.isArray(res) ? res : res.data || []);
    } catch (error) {
      console.error("Failed to fetch paginated products", error);
      setError("An error occurred while fetching products.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductsById = async (id) => {
    try {
      //console.log("Here we start fetching");
      const res = await getProductById(id);
      // console.log("Here we fetched");
      console.log(res);
      setProductById(res);
    } catch {
      setError(error);
    }
  };

  const fetchProductByName = async (name) => {
    //getProductByName

    try {
      console.log("Here we start fetching");
      const res = await getProductByName(name);
      console.log("Here we fetched");
      console.log(res);
      setProducts(Array.isArray(res) ? res : res.data || []);
    } catch {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPaginatedProductData(pageNumber, pageSize);
  }, [pageNumber, pageSize]);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        error,
        products,
        productById,
        totalPages,
        pageSize,
        pageNumber,

        fetchSortProductData,
        setPageNumber,
        setTotalPages,
        fetchProductByName,
        fetchProductsById,
        fetchProductsData,
        fetchPaginatedProductData,
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
