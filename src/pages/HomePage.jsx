import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        marginTop: "128px",
        padding: "2rem",
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: 3,
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#2C3E50", mb: 2 }}
        >
          Welcome to EliahTech
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", marginBottom: "1.5rem", fontSize: "1.1rem" }}
        >
          Your one-stop shop for premium electronic accessories. Explore our
          wide range of products to enhance your tech experience.
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to="/ProductPage"
          sx={{
            backgroundColor: "#DAA520",
            color: "#1E2A38",
            fontSize: "1rem",
            textTransform: "none",
            padding: "0.75rem 2rem",
            "&:hover": {
              backgroundColor: "#FFC107",
            },
          }}
        >
          Explore Products
        </Button>
      </Box>

      {/* About Us Section */}
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: 2,
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#2C3E50", mb: 2 }}
        >
          About EliahTech
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.8 }}>
          At EliahTech, we specialize in providing high-quality electronic
          accessories to enhance your daily life. From durable headphone covers
          to sleek device cases, our products are designed to offer the perfect
          blend of style and functionality.
          <br />
          <br />
          Our mission is to bring the latest and most reliable tech accessories
          to our customers, ensuring they stay connected and protected. Whether
          you're a tech enthusiast or a casual user, we've got something for
          everyone.
        </Typography>
      </Box>

      {/* Product Highlights Section */}
      <Box sx={{ marginBottom: "3rem" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#2C3E50",
            mb: 3,
            textAlign: "center",
          }}
        >
          Explore Our Categories
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
                padding: "1.5rem",
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Headphones"
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
              <Typography variant="h6" sx={{ color: "#2C3E50", mb: 1 }}>
                Headphones
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Discover premium headphones for a superior audio experience.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
                padding: "1.5rem",
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Covers"
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
              <Typography variant="h6" sx={{ color: "#2C3E50", mb: 1 }}>
                Device Covers
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Protect your devices with our stylish and durable covers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
                padding: "1.5rem",
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Chargers"
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
              <Typography variant="h6" sx={{ color: "#2C3E50", mb: 1 }}>
                Chargers
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Fast and reliable chargers to keep your devices powered.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Customer Testimonials Section */}
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: 2,
          marginBottom: "3rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#2C3E50", mb: 2 }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", fontStyle: "italic", mb: 1 }}
        >
          "EliahTech offers the best accessories I've ever used. Highly
          recommend their products!"
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", fontStyle: "italic" }}>
          "Great quality and amazing customer service. I'll definitely be back
          for more!"
        </Typography>
      </Box>

      {/* Newsletter Subscription Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#2C3E50", mb: 2 }}
        >
          Stay Updated
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#666", marginBottom: "1.5rem" }}
        >
          Subscribe to our newsletter for the latest updates and exclusive
          deals.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DAA520",
                color: "#1E2A38",
                "&:hover": { backgroundColor: "#FFC107" },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
