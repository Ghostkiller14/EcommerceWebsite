import axios from "axios";

const BaseURL =
  "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/categories";

export const getCategories = async () => {
  const res = await axios.get(BaseURL);
  return res.data.data;
};

export const deleteCategoryById = async (id) => {
  const res = await axios.delete(`${BaseURL}/${id}`);

  return res;
};

export const addCategory = async (formData) => {
  const res = await axios.post(BaseURL, formData);
  return res.data.data;
};

export const updateCategory = async (id, formData) => {
  const res = await axios.put(`${BaseURL}/${id}`, formData);
  return res.data.data;
};
