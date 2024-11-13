import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../context/CartContext";
import { createOrderAPI } from "../../services/OrderService";

const Cart = () => {
  const { cart, removeCart, clearCart, addToCart, decreaseQuantity } =
    useContext(CartContext) || {};
  const [address, setAddress] = useState("");
  const [addressEditing, setAddressEditing] = useState(false);

  const navigate = useNavigate();

  const totalPrice = (cart || []).reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  const checkout = async () => {
    try {
      const getProductlist = JSON.parse(localStorage.getItem("cart")) || [];
      const getUserData = JSON.parse(localStorage.getItem("user")) || {};

      if (getProductlist.length === 0) {
        console.error("No products in cart.");
        return;
      }

      const decodedUser = getUserData?.decodedUser;
      if (!decodedUser || !decodedUser.nameid) {
        console.error("User is not logged in.");
        navigate("/signin");
        return;
      }

      const orderItems = getProductlist.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      }));

      const userId = decodedUser.nameid;
      const data = { userId, orderItems };
      toast.success("Order created successfully!");

      await createOrderAPI(data);
      setTimeout(() => {
        navigate("/HomePage");
      }, 1500);
    } catch (error) {
      console.error("Error in checkout:", error);
      toast.error("Error in creating order. Please try again.");
    }
  };

  const handleAddressChange = (e) => setAddress(e.target.value);

  return (
    <Box padding={3}>
      <ToastContainer />
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cart?.length === 0 ? (
            <Typography variant="h6">Your cart is empty</Typography>
          ) : (
            cart.map((item) => (
              <Card
                sx={{
                  display: "flex",
                  marginBottom: 2,
                  padding: 2,
                  alignItems: "center",
                  borderRadius: 2,
                }}
                key={item.productId}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 140,
                    height: 140,
                    objectFit: "cover",
                    borderRadius: 1,
                    marginRight: 2,
                  }}
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flex: "1" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: 1 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 1 }}
                  >
                    ${(item.price || 0).toFixed(2)} x {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total: ${((item.price || 0) * item.quantity).toFixed(2)}
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                  >
                    <IconButton
                      color="primary"
                      onClick={() => decreaseQuantity(item)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ margin: "0 1rem" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton color="primary" onClick={() => addToCart(item)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => removeCart(item.productId)}
                    sx={{ textTransform: "none", marginTop: 1 }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          {cart?.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                Order Summary
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Total: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={checkout}
                fullWidth
                sx={{ py: 1.5, fontSize: "1rem", mb: 2 }}
              >
                Proceed to Checkout
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={clearCart}
                fullWidth
                sx={{ py: 1.5 }}
              >
                Clear Cart
              </Button>
            </Box>
          )}

          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Shipping Address
            </Typography>
            {addressEditing ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  fullWidth
                  label="Enter your address"
                  value={address}
                  onChange={handleAddressChange}
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setAddressEditing(false)}
                  sx={{ ml: 2 }}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  {address || "No address provided"}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setAddressEditing(true)}
                  sx={{ textTransform: "none" }}
                >
                  Edit
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
