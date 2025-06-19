import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to update CloudCart
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Your one-stop shop for everything!
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <ProductList />
      </Grid>
    </Container>
  );
};

export default HomePage;
