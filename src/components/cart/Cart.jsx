import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { createOrderAPI } from "../../services/OrderService";

const Cart = () => {
  const { cart, removeCart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [addressEditing, setAddressEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout = async () => {
    try {
      const getProductlist = JSON.parse(localStorage.getItem("cart"));
      const getUserData = JSON.parse(localStorage.getItem("user"));

      if (!getProductlist || getProductlist.length === 0) {
        console.error("No products in cart.");
        return;
      }
      if (
        !getUserData ||
        !getUserData.decodedUser ||
        !getUserData.decodedUser.nameid
      ) {
        console.error("User is not logged in.");

        navigate("/signin");
        return;
      }

      const orderItems = getProductlist.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
      }));

      const userId = getUserData.decodedUser.nameid;
      const data = { userId, orderItems };

      console.log("Order Data:", data);

      const res = await createOrderAPI(data);
      console.log("Order Response:", res);
    } catch (error) {
      console.error("Error in checkout:", error);
    }
  };

  const handleAddressChange = (e) => setAddress(e.target.value);

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
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
            {/* Product Image */}
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
            {/* Product Details */}
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
                ${item.price.toFixed(2)} x {item.quantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </Typography>
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

      {cart.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={checkout}
            fullWidth
            sx={{ py: 1.5, fontSize: "1rem" }}
          >
            Proceed to Checkout
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={clearCart}
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            Clear Cart
          </Button>
        </Box>
      )}

      {/* Address Update Section */}
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
    </Box>
  );
};

export default Cart;
