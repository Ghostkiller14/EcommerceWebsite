import { Add } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import AdminCategories from "./adminCategories/AdminCategories";

const CategoryManagment = () => {
  const { addCategoryByName, updateCategoryName } = useContext(CategoryContext);
  const [formData, setFormData] = useState({
    categoryId: null,
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.categoryId) {
      await updateCategoryName(formData.categoryId, formData);
    } else {
      await addCategoryByName(formData);
    }

    setFormData({ categoryId: null, name: "" });
  };

  const setUpdateCategory = (category) => {
    setFormData({
      categoryId: category.categoryId,
      name: category.name,
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Category List</Typography>

        <TextField onChange={handleChange} name="name" value={formData.name} />

        <Button
          type="submit"
          variant="contained"
          startIcon={<Add />}
          sx={{ mb: 2 }}
        >
          {formData.categoryId ? "Update Category" : "Add Category"}
        </Button>
      </Box>
      <AdminCategories onEditCategory={setUpdateCategory} />
    </>
  );
};

export default CategoryManagment;
