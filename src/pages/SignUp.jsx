import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../service/AuthService";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(formData);

      navigate("/signin");
      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        //backgroundColor: "#F5F5F5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ToastContainer />
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="UserName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#DAA520",
              "&:hover": { backgroundColor: "#FFC107" },
            }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" align="center">
            Already have an account?{" "}
            <a
              href="/signin"
              style={{ color: "#1976D2", textDecoration: "none" }}
            >
              Sign in
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
