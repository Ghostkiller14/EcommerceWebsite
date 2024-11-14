import React, { useContext } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context-bak/CartContext";

const Product = ({ product }) => {
  const { productId, name, price, description, imageIDs } = product;

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const showPageDetails = async (productId) => {
    navigate(`/HomePage/${productId}`);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          marginBottom: 1.5,
          border: 1,
          borderColor: "grey.300",
          transition: "0.3s",
          "&:hover": {
            boxShadow: 6,
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          image={imageIDs}
          sx={{
            height: 140,
            objectFit: "contain", // Change from "cover" to "contain" to fit the image inside the card
            width: "100%",
            backgroundSize: "contain", // Ensure the image scales down to fit within the card
            backgroundRepeat: "no-repeat", // Prevent background repeat
            backgroundPosition: "center", // Center the image
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>

          <Typography gutterBottom component="p" sx={{ color: "green" }}>
            Price: {price} $
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </Button>
          <Button size="small" onClick={() => showPageDetails(productId)}>
            Show Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
