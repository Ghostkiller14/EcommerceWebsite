import axios from "axios";
import { jwtDecode } from "jwt-decode";
const BaseURL =
  "https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/auth";
export const register = async (formData) => {
  try {
    const res = await axios.post(`${BaseURL}/register`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return null;
  }
};

export const signIn = async (formData) => {
  try {
    let res = await axios.post(`${BaseURL}/login`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = res.data.token;
    const decodedUser = jwtDecode(token);
    localStorage.setItem("token", token);
    localStorage.setItem(
      "user",
      JSON.stringify({ decodedUser, isLoggedIn: true })
    );

    return decodedUser;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};
