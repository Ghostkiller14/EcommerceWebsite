import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2e3b4e", // Darker background for contrast
        color: "#ffffff", // White text for readability
        paddingY: 4, // More vertical padding
        paddingX: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Content */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Subtle divider line
            pb: 3,
            mb: 3,
          }}
        >
          {/* Links Section */}
          <Box>
            <Link href="/" color="inherit" underline="hover" sx={{ mx: 2 }}>
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ mx: 2 }}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ mx: 2 }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="hover"
              sx={{ mx: 2 }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>

        {/* Copyright and Social Media Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.7)", mb: { xs: 2, sm: 0 } }}
          >
            © {new Date().getFullYear()} MyCompany. All rights reserved.
          </Typography>

          {/* Social Media Links */}
          <Box>
            <Link href="#" color="inherit" sx={{ mx: 1 }} aria-label="Facebook">
              <i
                className="fab fa-facebook-f"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }} aria-label="Twitter">
              <i className="fab fa-twitter" style={{ fontSize: "1.2rem" }}></i>
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ mx: 1 }}
              aria-label="Instagram"
            >
              <i
                className="fab fa-instagram"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }} aria-label="LinkedIn">
              <i
                className="fab fa-linkedin-in"
                style={{ fontSize: "1.2rem" }}
              ></i>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
