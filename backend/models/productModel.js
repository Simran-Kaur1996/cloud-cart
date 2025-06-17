// Responsible for all database interactions related to products

import { dynamodb, TABLE_NAME } from "../config/dynamodb.js";
import { v4 as uuidv4 } from "uuid";

// Get all products
export const getAllProducts = async () => {
  const params = { TableName: TABLE_NAME };
  const data = await dynamodb.scan(params).promise();
  return data.Items;
};

// Get a single product by ID
export const getProductById = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };
  const data = await dynamodb.get(params).promise();
  return data.Item;
};

// Create a new product
export const createProduct = async (productData) => {
  const product = {
    id: uuidv4(),
    name: productData.name,
    price: productData.price,
    description: productData.description || "",
    createdAt: new Date().toISOString(),
  };

  const params = {
    TableName: TABLE_NAME,
    Item: product,
  };

  await dynamodb.put(params).promise();
  return product;
};

// Update product
export const updateProduct = async (id, updateData) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
    UpdateExpression:
      "set #name = :name, #price = :price, #description = :description",
    ExpressionAttributeNames: {
      "#name": "name",
      "#price": "price",
      "#description": "description",
    },
    ExpressionAttributeValues: {
      ":name": updateData.name,
      ":price": updateData.price,
      ":description": updateData.description || "",
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await dynamodb.update(params).promise();
  return result.Attributes;
};

// Delete product
export const deleteProduct = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id },
  };

  await dynamodb.delete(params).promise();
};
