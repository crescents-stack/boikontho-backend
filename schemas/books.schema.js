const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  abstract: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  publication: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = BookSchema;