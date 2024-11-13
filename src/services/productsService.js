import axios from "axios";

const baseURL = `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products`;


export const getAllProducts = async (
  pageNumber = 1,
  pageSize = 5,
  searchValue = "",
  sortBy = "Price",
  sortOrder = "desc"
) => {
  const res = await axios.get(
    `${baseURL}?pageNumber=${pageNumber}&pageSize=${pageSize}&searchTerm=${searchValue}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );

  return res.data.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${baseURL}/${id}`);
  return res.data;
};

export const deleteProductById = async (id) => {
  const res = await axios.delete(`${baseURL}/${id}`);
  return res.data;
};

export const addProduct = async (formData) => {
  const res = await axios.post(`${baseURL}`, formData);
  return res.data.data;
};

export const updateProduct = async (id, formData) => {
  const res = await axios.put(`${baseURL}/${id}`, formData);

  return res.data.data;
};
