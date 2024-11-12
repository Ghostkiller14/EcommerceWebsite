import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";

import AdminProducts from "./adminProducts/AdminProducts";
import { ProductContext } from "../../context/productContext";
import { toast } from "react-toastify";

const ProductManagment = () => {
  const { createProduct, editProduct } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    productId: null,
    name: "",
    price: 0,
    quantity: 0,
    description: "",
    imageIDs: "",
    categoryId: "",
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

    if (formData.productId) {
      const res = await editProduct(formData.productId, formData);
      console.log(res);
    } else {
      const res = await createProduct(formData);
      console.log(res);
    }

    setFormData({
      productId: null,
      name: "",
      price: 0,
      quantity: 0,
      description: "",
      imageIDs: "",
      categoryId: "",
    });
  };

  const setUpdateProduct = (product) => {
    setFormData({
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      description: product.description,
      imageIDs: product.imageIDs,
      categoryId: product.categoryId,
    });
  };

  return (
    <>
      <Accordion sx={{ my: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Add or Edit Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Product Name"
                name="name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                label="Price"
                name="price"
                value={formData.price}
                type="number"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                type="number"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                multiline
                rows={3}
                fullWidth
                onChange={handleChange}
              />
              <TextField
                label="Image ID"
                name="imageIDs"
                fullWidth
                required
                value={formData.imageIDs}
                onChange={handleChange}
              />
              <TextField
                label="Category"
                name="categoryId"
                select
                fullWidth
                required
                value={formData.categoryId}
                onChange={handleChange}
              >
                <MenuItem value="db5eb9c6-c2e3-4348-928a-1732ebe203cb">
                  Electronics
                </MenuItem>
                {/* Add more categories here */}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                {formData.productId ? "Update Product" : "Add Product"}
              </Button>
            </Box>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <AdminProducts onEditProduct={setUpdateProduct} />
    </>
  );
};

export default ProductManagment;
