const express = require("express");
const {
  CreateOrder,
  GetAllOrders,
} = require("../../../../controllers/orders.controller");
const authenticateToken = require("../../../../middlewares/auth.middleware");
const routerAPI_V1_Orders = express.Router();
routerAPI_V1_Orders.post("/create", authenticateToken, CreateOrder);
routerAPI_V1_Orders.post("/get-all", authenticateToken, GetAllOrders);
module.exports = routerAPI_V1_Orders;
