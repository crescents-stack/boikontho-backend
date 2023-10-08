const express = require("express");
const routerAPI_V1_Auth = require("./auth/auth.routes");
const routerAPI_V1_Books = require("./books/books.routes");
const routerAPI_V1_Users = require("./users/users.routes");
const routerAPI_V1_Stripe = require("./stripe/routes");
const routerAPI_V1_Orders = require("./orders/orders.routes");
const routerAPI_V1 = express.Router();

routerAPI_V1.get("/", (req, res) => {
  res.status(200).send("Hello api/v1!");
});
routerAPI_V1.use("/auth", routerAPI_V1_Auth);
routerAPI_V1.use("/books", routerAPI_V1_Books);
routerAPI_V1.use("/users", routerAPI_V1_Users);
routerAPI_V1.use("/orders", routerAPI_V1_Orders);
routerAPI_V1.use("/stripe", routerAPI_V1_Stripe);

module.exports = routerAPI_V1;
