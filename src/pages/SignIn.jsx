import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "../service/AuthService";

const SignIn = () => {
  const [SignInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...SignInData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await signIn(SignInData);

      if (token.role === "Admin") {
        toast.success("Welcome back, Admin! Redirecting to dashboard...");
        setTimeout(() => {
          window.location.href = "dashboard/admin";
        }, 1500);
      } else {
        toast.success("Login successful! Redirecting to homepage...");
        setTimeout(() => {
          window.location.href = "/HomePage";
        }, 1500);
      }

      setSignInData({
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
       // background: "linear-gradient(to right, #f3f4f6, #e5e7eb)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#DAA520" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={SignInData.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={SignInData.password}
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
            Sign In
          </Button>
          <ToastContainer position="top-center" />
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#1976D2",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="/signup"
                variant="body2"
                sx={{
                  color: "#1976D2",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
