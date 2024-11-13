import React, { createContext, useEffect, useState } from "react";
import {
  addProduct,
  deleteProductById,
  getAllProducts,
  updateProduct,
} from "../services/ProductsService";

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
    setIsLoading(true);
    try {
      const res = await getAllProducts(
        pageNumber,
        pageSize,
        searchValue,
        sortBy,
        sortOrder
      );
      setProducts(Array.isArray(res) ? res : res.items || []);
      setTotalPages(res.totalPages);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const deleteProducts = async (id) => {
    try {
      await deleteProductById(id);

      setProducts((prevProduct) =>
        prevProduct.filter((product) => product.productId !== id)
      );
    } catch {
      setError(error);
    }
  };

  const createProduct = async (fromData) => {
    try {
      const res = await addProduct(fromData);
      setProducts((prevProduct) => [...prevProduct, res]);
    } catch {
      setError(error);
    }
  };

  const editProduct = async (id, formData) => {
    try {
      const res = await updateProduct(id, formData);
      setProducts((prevProduct) =>
        prevProduct.map((product) =>
          product.productId === id ? { ...product, ...res } : product
        )
      );
      console.log(res);
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
        editProduct,
        createProduct,
        setSortBy,
        deleteProducts,
        setSearchValue,
        setPageNumber,
        setTotalPages,
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
