const mongoose = require("mongoose");
const OrderSchema = require("../schemas/orders.schema");
const OrderModel = new mongoose.model("orders", OrderSchema);
module.exports = OrderModel;