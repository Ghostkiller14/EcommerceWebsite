import axios from "axios";

const BaseURL =
  "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/orders";

export const createOrderAPI = async (data) => {
  try {
    const res = await axios.post(BaseURL, data);
    return res;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const GetAllOrders = async () => {
  const res = await axios.get(BaseURL);
  return res.data.data;
};
