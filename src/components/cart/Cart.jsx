import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { cart, decreaseQuantity, addToCart, removeCart, clearCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: Cart Items */}
        <Grid item xs={12} md={8}>
          {cart.length === 0 ? (
            <Typography variant="h6">Your cart is empty</Typography>
          ) : (
            cart.map((item) => (
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: 3,
                  marginBottom: 3,
                }}
                key={item.productId}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 2,
                    marginRight: { sm: 2 },
                  }}
                  image={item.image} // assuming item.image contains the image URL
                  alt={item.name}
                />
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingLeft: 2,
                  }}
                >
                  {/* Product Details */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item.quantity}
                    </Typography>
                  </Box>

                  {/* Quantity Controls and Remove Button */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        color="primary"
                        onClick={() => decreaseQuantity(item)}
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="body2" sx={{ paddingX: 2 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        color="primary"
                        onClick={() => addToCart(item)}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => removeCart(item.productId)}
                      sx={{
                        marginTop: 1,
                        borderRadius: 3,
                        textTransform: "none",
                      }}
                    >
                      Remove Item
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>

        {/* Right Column: Summary and Address */}
        <Grid item xs={12} md={4}>
          {cart.length > 0 && (
            <Card
              sx={{
                padding: 3,
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                Order Summary
              </Typography>

              {/* Total Price */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  marginTop: 3,
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={clearCart}
                  sx={{
                    flex: 1,
                    borderRadius: 2,
                    paddingX: 2,
                    textTransform: "none",
                  }}
                >
                  Clear Cart
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    flex: 1,
                    borderRadius: 2,
                    paddingX: 2,
                    textTransform: "none",
                  }}
                >
                  Proceed to Payment
                </Button>
              </Box>

              {/* Address Section */}
              <Box mt={4}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Shipping Address
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {/* Check if address exists or display placeholder */}
                  No address provided yet
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    marginTop: 1,
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                  onClick={() => {
                    /* Function to handle editing address */
                  }}
                >
                  Edit Address
                </Button>
              </Box>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
