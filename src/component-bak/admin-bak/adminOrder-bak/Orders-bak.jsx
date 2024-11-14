import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { OrderContext } from "../../../context-bak/OrderContext";
import Order from "./Order-bak";

const Orders = () => {
  const { orders } = useContext(OrderContext);

  const items = orders || [];

  if (items.length === 0) {
    return <p>No Product Available</p>;
  }
  return (
    <Box
      sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: 4 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((order) => (
          <Order order={order} key={order.orderId} />
        ))}
      </Grid>
    </Box>
  );
};

export default Orders;
