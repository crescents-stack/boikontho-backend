const express = require("express");
const { GetSecret } = require("../../../../controllers/stripe.controller");
const authenticateToken = require("../../../../middlewares/auth.middleware");
const routerAPI_V1_Stripe = express.Router();

routerAPI_V1_Stripe.post("/secret", authenticateToken, GetSecret);

module.exports = routerAPI_V1_Stripe;