import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Product = ({ product }) => {
  const { productId, name, price, description, imageIDs } = product;
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!isAdding) {
      setIsAdding(true);
      addToCart(product);
      setTimeout(() => setIsAdding(false), 1000); // Reset button state after 1 second
    }
  };

  const showPageDetails = () => {
    navigate(`/HomePage/${productId}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "1.5rem auto",
        borderRadius: 2,
        border: "1px solid #E0E0E0",
        boxShadow: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt={name}
        image={imageIDs}
        sx={{
          height: 200,
          objectFit: "contain",
          backgroundColor: "#F9F9F9",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#2C3E50" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#666", marginBottom: "0.5rem", minHeight: "48px" }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="p"
            sx={{ color: "#DAA520", fontWeight: "bold", fontSize: "1.1rem" }}
          >
            ${price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: "1rem" }}>
        <Button
          variant="contained"
          size="small"
          onClick={handleAddToCart}
          disabled={isAdding}
          sx={{
            backgroundColor: "#DAA520",
            color: "#1E2A38",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FFC107",
            },
          }}
        >
          {isAdding ? "Adding..." : "Add To Cart"}
        </Button>
        <Button
          size="small"
          onClick={showPageDetails}
          sx={{
            color: "#1976D2",
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
