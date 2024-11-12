import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const DashboardContent = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Card 1</Typography>
            <Typography>Some content for card 1.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Card 2</Typography>
            <Typography>Some content for card 2.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Card 3</Typography>
            <Typography>Some content for card 3.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
