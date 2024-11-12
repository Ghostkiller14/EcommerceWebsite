import axios from "axios";

export const createOrderAPI = async (data) => {
  try {
    const res = await axios.post(
      "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/orders",
      data
    );
    return res;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
