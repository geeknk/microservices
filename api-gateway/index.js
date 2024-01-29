import express from "express";
import * as config from "../config/constant.js";
import {microservices} from "./config/routes.js"
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const PORT = 3000;

// Basic route to check if the API Gateway is working
app.get("/", (req, res) => {
  res.send("API Gateway is up and running!");
});
app.use(express.json());

// Configure proxy for each microservice dynamically
microservices.forEach(({ path, target }) => {
  app.use(path, createProxyMiddleware({ target, changeOrigin: true }));
});

app.listen(config.GATEWAY_PORT, () => {
  console.log(`API Gateway running on port ${config.GATEWAY_PORT}`);
});