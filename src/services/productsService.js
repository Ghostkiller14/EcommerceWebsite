import axios from "axios";

const baseURL = `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products`;

//https://sda-3-oansite-backend-teamwork-z6h7.onrender.com/api/v1/products?pageNumber=1&pageSize=10&searchTerm=www&sortBy=Price&sortOrder=desc
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
  const res = await axios.get(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/${id}`
  );
  return res.data;
};

export const deleteProductById = async (id) => {
  const res = await axios.delete(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/${id}`
  );
  return res.data;
};

export const addProduct = async (formData) => {
  const res = await axios.post(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products`,
    formData
  );
  console.log(res);
  return res.data.data;
};

export const updateProduct  = async (id , formData) =>{
  const res = await axios.put(
    `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/products/${id}`,
    formData
  );

  return res.data.data
}
