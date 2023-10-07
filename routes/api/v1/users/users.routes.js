const express = require("express");
const { GetAllUsers, GetUserData, DeleteUserData } = require("../../../../controllers/users.controller");
const authenticateToken = require("../../../../middlewares/auth.middleware");
const routerAPI_V1_Users = express.Router();

routerAPI_V1_Users.get("/", GetAllUsers);
routerAPI_V1_Users.get("/individual", authenticateToken, GetUserData);
routerAPI_V1_Users.delete("/:_id", authenticateToken, DeleteUserData);

module.exports = routerAPI_V1_Users;