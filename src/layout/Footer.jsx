import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5", // Light background color
        padding: 3,
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
          textAlign="center"
        >
          {/* Links Section */}
          <Box>
            <Link href="/" color="inherit" underline="none" sx={{ mx: 2 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" sx={{ mx: 2 }}>
              About Us
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="none"
              sx={{ mx: 2 }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              underline="none"
              sx={{ mx: 2 }}
            >
              Privacy Policy
            </Link>
          </Box>

          {/* Copyright Section */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: { xs: 2, sm: 0 } }}
          >
            © {new Date().getFullYear()} MyCompany. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
