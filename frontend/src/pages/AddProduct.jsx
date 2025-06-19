import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialData = location.state || {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  };

  const [product, setProduct] = useState(initialData);
  const [success, setSuccess] = useState(false);

  const API_BASE = process.env.REACT_APP_API_BASE;

  const handleChange = (e) => {
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product.id) {
        await axios.put(`${API_BASE}/api/products/${product.id}`, product);
      } else {
        await axios.post(`${API_BASE}/api/products`, product);
      }

      setSuccess(true);

      // navigate to homepage after success
      navigate("/", { replace: true });
    } catch (error) {
      alert("Error saving product");
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {product.id ? "Update Product" : "Add New Product"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={product.description}
          onChange={handleChange}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit">
          {product.id ? "Update Product" : "Add Product"}
        </Button>
      </Box>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Product {product.id ? "updated" : "added"} successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateProduct;
