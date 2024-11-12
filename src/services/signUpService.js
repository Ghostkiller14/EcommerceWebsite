import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const register = async (formData) => {
  try {
    const res = await axios.post(
      `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/auth/register`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Error during registration:", error);
    return null; // or handle the error in an appropriate way
  }
};

export const signIn = async (formData) => {
  try {
    let res = await axios.post(
      `https://sda-3-onsite-backend-teamwork-z6h7.onrender.com/api/v1/auth/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    const token = res.data.token;
    const decodedUser = jwtDecode(token);
    console.log(decodedUser);
    localStorage.setItem("token", token);
    localStorage.setItem(
      "user",
      JSON.stringify({ decodedUser, isLoggedIn: true })
    );

    console.log(decodedUser.role);

    return decodedUser;
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};
