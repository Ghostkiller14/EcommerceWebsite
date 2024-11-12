import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { getProductById } from "../services/productsService";

const ProductDetails = () => {
  const { id } = useParams();
  const { isLoading, error } = useContext(ProductContext);
  const [productDetails, setProductDetails] = useState({});

  const fetchProductData = async (id) => {
    const getProductDetail = await getProductById(id);
    console.log(getProductDetail);
    setProductDetails(getProductDetail.data);
  };

  useEffect(() => {
    fetchProductData(id);
  }, [id]);

  if (isLoading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">Error: {error.message}</Alert>
      </Container>
    );
  }

  const {
    name,
    description,
    price,
    originalPrice,
    discount,
    rating,
    reviewsCount,
    salesCount,
    colorOptions,
    imageUrl,
  } = productDetails;

  return (
    <Container sx={{ mt: 4 }}>
      {/* Promotional Banner */}
      <Box
        sx={{
          backgroundColor: red[500],
          color: "#fff",
          p: 1,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">🔥 Sale is coming soon!</Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={imageUrl || "https://via.placeholder.com/300"}
            alt={name || "Product Image"}
            style={{ maxWidth: "100%", height: "auto", borderRadius: 4 }}
          />
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          {/* Price and Discount */}
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant="h4"
              component="span"
              sx={{ fontWeight: "bold", color: red[500], mr: 1 }}
            >
              ${price}
            </Typography>
            {originalPrice && (
              <Typography
                variant="body1"
                component="span"
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                  mr: 1,
                }}
              >
                ${originalPrice}
              </Typography>
            )}
            {discount && (
              <Chip label={`${discount}% OFF`} color="error" size="small" />
            )}
          </Box>
          <Typography variant="caption" color="text.secondary">
            Price VAT included | Extra 1% off with coins
          </Typography>

          {/* Product Title */}
          <Typography
            variant="h5"
            component="h1"
            sx={{ mt: 2, fontWeight: "bold" }}
          >
            {name || "Product not found"}
          </Typography>

          {/* Rating and Reviews */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <Rating value={rating || 0} readOnly precision={0.1} />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {rating || "N/A"} • {reviewsCount || 0} Reviews •{" "}
              {salesCount || 0}+ sold
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, mb: 3 }}
          >
            {description || "No description available."}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Color Options */}
          {colorOptions && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Color: {colorOptions[0]?.name || "Select an option"}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {colorOptions.map((color, index) => (
                  <img
                    key={index}
                    src={color.imageUrl}
                    alt={color.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #ddd",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ py: 1.5, mt: 3, fontSize: "1.1rem" }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
