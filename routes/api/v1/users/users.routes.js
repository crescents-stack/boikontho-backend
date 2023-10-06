const express = require("express");
const { GetAllUsers, GetUserData } = require("../../../../controllers/users.controller");
const authenticateToken = require("../../../../middlewares/auth.middleware");
const routerAPI_V1_Users = express.Router();

routerAPI_V1_Users.get("/", GetAllUsers);
routerAPI_V1_Users.get("/individual", authenticateToken, GetUserData);

module.exports = routerAPI_V1_Users;