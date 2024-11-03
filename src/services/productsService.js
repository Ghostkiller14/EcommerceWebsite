import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get(
    "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products"
  );

  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/${id}`
  );
  return res.data;
};

export const getPaginatedProduct = async (pageNumber, pageSize) => {
  const res = await axios.get(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/paginated?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return res.data;
};

export const getProductByName = async (name) => {
  const res = await axios.get(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/product-name/${name}`
  );
  return res.data;
};

export const getSortProductByPrice = async () => {
  const res = await axios.get(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/sort?SortBy=Price&SortOrder=asc`
  );
  return res.data;
};
