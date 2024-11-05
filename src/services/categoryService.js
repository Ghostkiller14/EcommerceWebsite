import axios from "axios";

const BaseURL =
  "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/categories";

export const getCategories = async () => {
  const res = await axios.get(BaseURL);
  console.log(res.data.data);
  return res.data.data;
};
