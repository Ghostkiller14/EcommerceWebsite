import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React, { useContext, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";

const AdminProduct = ({ product, onEditProduct }) => {
  const { productId, name, price, quantity, description } = product;

  const { deleteProducts } = useContext(ProductContext);

  const [showDetails, setShowDetails] = useState(false);

  const handleDeleteProduct = async (productId) => {
    await deleteProducts(productId);
  };

  const handleUpdateProduct = async (product) => {
    await onEditProduct(product);
  };

  return (
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
          quantity: {quantity} $
        </Typography>

        <Typography gutterBottom component="p" sx={{ color: "green" }}>
          Price: {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleDeleteProduct(productId)}
          variant="contained"
          size="small"
        >
          Delete
        </Button>
        <Button size="small" onClick={() => handleUpdateProduct(product)}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminProduct;
