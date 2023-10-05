const express = require("express");
const { register, login } = require("../../../../controllers/auth.controller");
const routerAPI_V1_Auth = express.Router();

routerAPI_V1_Auth.post("/register", register);
routerAPI_V1_Auth.post("/login", login);

module.exports = routerAPI_V1_Auth;
