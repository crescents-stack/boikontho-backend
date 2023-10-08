const OrderModel = require("../models/orders.model");

exports.CreateOrder = async (req, res) => {
  try {
    const newOrder = await OrderModel.create(req.body);
    if (!newOrder) {
      res.status(500).send({
        message: "Internal server error!",
      });
    }
    res.status(200).send({
      message: "Order Created Successfully!",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error!",
    });
  }
};

exports.GetAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    if (!orders.length) {
      res.status(404).send({
        message: "No product found!",
      });
    }
    res.status(200).send({
      message: "Orders found Successfully!",
      orders,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error!",
    });
  }
};
