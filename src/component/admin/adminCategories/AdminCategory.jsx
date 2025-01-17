import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

import { CategoryContext } from "../../../context/CategoryContext";

const AdminCategory = ({ category, onEditCategory }) => {
  const { categoryId, name } = category;

  const { deleteCategory } = useContext(CategoryContext);

  const handleDeleteCategory = async (categoryId) => {
    await deleteCategory(categoryId);
  };

  const handleUpdateCategory = async (category) => {
    await onEditCategory(category);
  };

  return (
    <>
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleDeleteCategory(categoryId)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleUpdateCategory(category)}
          >
            Update
          </Button>{" "}
        </CardActions>
      </Card>
    </>
  );
};

export default AdminCategory;
