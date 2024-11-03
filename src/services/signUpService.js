import axios from "axios";

export const register = async (formData) => {
  try {
    const res = await axios.post(
      `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/auth/register`,
      formData // Pass formData here
    );

    return res.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return null; // or handle the error in an appropriate way
  }
};

export const signIn = async (formData) => {
  try {
    const res = await axios.post(
      `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/auth/login`,
      formData // Sending formData in POST request body
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Sign-in error:", error);
    throw error; // Rethrow the error if you want it to be handled by calling code
  }
};
