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
