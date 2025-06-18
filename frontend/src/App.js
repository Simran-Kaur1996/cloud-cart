import logo from "./logo.svg";
import "./App.css";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/update-product/:id" element={<AddProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
