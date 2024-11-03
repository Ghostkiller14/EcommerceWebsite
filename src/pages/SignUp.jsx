import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { register } from "../services/signUpService";

const SignUp = () => {
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

    const postdata = await register(formData);

    console.log("Sign Up Data:", postdata);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 8,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "white",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="UserName"
            name="UserName"
            value={formData.name}
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
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" align="center">
            Already have an account? <a href="/signin">sign in</a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
