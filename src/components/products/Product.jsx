import React, { useContext } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const Product = ({ product }) => {
  const { productId, name, price, quantity, description } = product;

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
          borderColor: "grey.300", // Set border color
          transition: "0.3s", // Smooth transition for hover effect
          "&:hover": {
            boxShadow: 6, // Apply shadow on hover
            transform: "scale(1.02)", // Slightly enlarge on hover
          },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
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
            show Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
