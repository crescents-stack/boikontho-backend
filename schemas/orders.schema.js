const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orderItems: { type: [Object], required: true },
  orderDate: { type: Date, default: Date.now },
  totalPrice: { type: Number, required: true },
  shippingAddress: { type: String, required: true },
  paymentMethod: {
    type: String,
    enum: ["Credit Card", "PayPal", "Cash on Delivery"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    default: "Pending",
  },
});

module.exports = OrderSchema;
