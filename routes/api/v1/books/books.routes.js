const express = require("express");
const { GetAllBooks } = require("../../../../controllers/books.controller");
const routerAPI_V1_Books = express.Router();

routerAPI_V1_Books.get("/", GetAllBooks);

module.exports = routerAPI_V1_Books;