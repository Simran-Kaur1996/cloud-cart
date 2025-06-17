// Responsible for handling HTTP requests/responses

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/productModel.js";

// GET /api/products
export const fetchAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch products" });
  }
};

// GET /api/products/:id
export const fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch product" });
  }
};

// POST /api/products
export const createNewProduct = async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || price === undefined)
    return res.status(400).json({ error: "Name and price are required" });

  try {
    const newProduct = await createProduct({ name, price, description });
    res.status(201).json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Product creation failed" });
  }
};

// PUT /api/products/:id
export const updateExistingProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  if (!name || price === undefined)
    return res.status(400).json({ error: "Name and price are required" });

  try {
    const updated = await updateProduct(id, { name, price, description });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Product update failed" });
  }
};

// DELETE /api/products/:id
export const removeProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteProduct(id);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Product deletion failed" });
  }
};
