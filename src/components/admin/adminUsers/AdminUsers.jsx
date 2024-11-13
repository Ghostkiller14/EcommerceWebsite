import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import AdminUser from "./AdminUser";

const AdminUsers = () => {
  const { users } = useContext(UserContext);

  const userInfo = users || [];

  if (userInfo.length === 0) {
    return <p>No Product Available</p>;
  }

  return (
    <Box
      sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: 4 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {userInfo.map((user) => (
          <AdminUser user={user} key={user.userId} />
        ))}
      </Grid>
    </Box>
  );
};

export default AdminUsers;
