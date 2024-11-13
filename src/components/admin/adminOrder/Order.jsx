import React from "react";
import { Typography, Card, CardContent, Grid, Box } from "@mui/material";

const Order = ({ order }) => {
  // const { orderId, userId } = order;

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Order ID: {order.orderId}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          User ID: {order.userId}
        </Typography>

        {order.orderItems.map((oItems, index) => (
          <Box
            key={index}
            sx={{ my: 2, p: 1, border: "1px solid #ddd", borderRadius: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  Quantity: <strong>{oItems.quantity}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  Product ID: <strong>{oItems.productId}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="primary">
                  Price: ${oItems.price}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default Order;
