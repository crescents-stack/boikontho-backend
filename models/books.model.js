const mongoose = require("mongoose");
const BookSchema = require("../schemas/books.schema");
const BookModel = new mongoose.model("books", BookSchema);
module.exports = BookModel;
