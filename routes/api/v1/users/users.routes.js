const express = require("express");
const { GetAllUsers } = require("../../../../controllers/users.controller");
const routerAPI_V1_Users = express.Router();

routerAPI_V1_Users.get("/", GetAllUsers);

module.exports = routerAPI_V1_Users;