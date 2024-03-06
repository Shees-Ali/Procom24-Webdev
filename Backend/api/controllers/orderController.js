const { validationResult } = require("express-validator");

const Order = require("../models/Order");

module.exports = {
  get: async (req, res) => {
    try {
      const orders = await Order.find();

      res.status(200).json({
        message: "Orders Fetched Successfully",
        data: orders,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({
        message: "Order fetched successfully",
        data: order,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },

  create: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();

      res.status(200).json({
        message: "Added Order successfully",
        data: savedOrder,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  update: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      
      const { id } = req.params;
      const updates = req.body;
      const options = { new: true };

      const updatedOrder = await Order.findByIdAndUpdate(id, updates, options);

      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({
        message: "Updated Order successfully",
        data: updatedOrder,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};