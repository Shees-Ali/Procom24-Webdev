const { validationResult } = require("express-validator");

const Order = require("../models/Order");

module.exports = {
  get: async (req, res) => {
    try {
      console.log("KJHASEDJKHASDJKHASJKDH", req.user);
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Access denied" });
      }
      let orders = [];
      if (req.user.userRole !== "customer") {
        orders = await Order.find();
      } else {
        orders = await Order.find({ createdBy: req.user.userId });
      }

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
      const user = req.user;
      const body = req.body;
      body["createdBy"] = user.userId ?? "";
      const newOrder = new Order(body);
      const savedOrder = await newOrder.save();

      res.status(200).json({
        message: "Added Order successfully",
        data: savedOrder,
      });
    } catch (error) {
      console.log(error);
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

  getReporting: async (req, res) => {
    try {
      let allCount = 0;
      let pendingCount = 0;
      let acceptedCount = 0;
      let rejectedCount = 0;

      if (req.user.userRole !== "customer") {
        allCount = (await Order.find()).length;
        pendingCount = (await Order.find({ status: "Pending" })).length;
        acceptedCount = (await Order.find({ status: "Succeeded" })).length;
        rejectedCount = (await Order.find({ status: "Rejected" })).length;
      } else {
        allCount = (await Order.find()).length;
        pendingCount = (
          await Order.find({ status: "Pending" })
        ).length;
        acceptedCount = (
          await Order.find({ status: "Succeeded" })
        ).length;
        rejectedCount = (
          await Order.find({ status: "Rejected" })
        ).length;
      }

      res.status(200).json({
        message: "Orders Fetched Successfully",
        data: {
          allCount,
          pendingCount,
          acceptedCount,
          rejectedCount,
        },
      });
    } catch (error) {
      console.log(error)
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
