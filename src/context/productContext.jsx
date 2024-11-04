import React, { createContext, useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../services/productsService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productById, setProductById] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState("Price");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProductsData = async (pageNumber, pageSize, searchValue) => {
    try {
      setIsLoading(true);
      const res = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sortBy,
        sortOrder
      );
      console.log(res);
      setProducts(Array.isArray(res) ? res : res.items || []);
      setTotalPages(res.totalPages);

      setIsLoading(false);
    } catch (error) {
      setError(error);
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

  useEffect(() => {
    fetchProductsData(pageNumber, pageSize, searchValue, sortBy, sortOrder);
  }, [pageNumber, pageSize, searchValue, sortBy, sortOrder]);

  console.log(searchValue);

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
        searchValue,
        sortBy,
        setSortBy,

        setSearchValue,
        setPageNumber,
        setTotalPages,
        fetchProductsById,
        fetchProductsData,
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
