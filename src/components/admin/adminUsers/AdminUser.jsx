import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../../context-bak/UserContext";

const AdminUser = ({ user }) => {
  const { userId, userName, email, address, age } = user;

  const { deleteUser } = useContext(UserContext);

  const onDelete = async (id) => {
    await deleteUser(id);
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        mt: 3,
        padding: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          User ID: {userId}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {userName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {email}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Address: {address}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Age: {age}
        </Typography>
      </CardContent>

      <CardActions>
        <Box sx={{ ml: "auto" }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(userId)}
            sx={{ textTransform: "none" }}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default AdminUser;
