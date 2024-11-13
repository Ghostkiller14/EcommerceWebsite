import axios from "axios";

const BaseURL =
  "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/users";

export const getAllUsers = async () => {
  const res = await axios.get(BaseURL);

  return res.data.data;
};

export const deleteUserById = async (id) => {
  const res = await axios.delete(`${BaseURL}/${id}`);
  return res.data;
};

export const getUserInfo = async (id) => {
  const res = await axios.get(`${BaseURL}/${id}`);

  return res.data.data;
};

export const updateUserInfo = async (id, formData) => {
  const res = await axios.put(`${BaseURL}/${id}`, formData);

  return res.data.data;
};
