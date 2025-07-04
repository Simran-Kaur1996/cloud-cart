import AWS from "aws-sdk";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.DYNAMODB_PRODUCT_NAME;

export { dynamodb, TABLE_NAME };
