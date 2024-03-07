const { validationResult } = require("express-validator");

const Order = require("../models/Order");

module.exports = {
  get: async (req, res) => {
    try {
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
      let all = 0;
      let pending = 0;
      let accepted = 0;
      let rejected = 0;

      if (req.user.userRole !== "customer") {
        all = (await Order.find());
        pending = await Order.find({ status: "Pending" });
        accepted = await Order.find({ status: "Succeeded" });
        rejected = await Order.find({ status: "Rejected" });
      } else {
        all = await Order.find({ createdBy: req.user.userId });
        pending = await Order.find({
          createdBy: req.user.userId,
          status: "Pending",
        });
        accepted = await Order.find({
          createdBy: req.user.userId,
          status: "Succeeded",
        });
        rejected = await Order.find({
          createdBy: req.user.userId,
          status: "Rejected",
        });
      }
      const data = {
        allCount: all.length,
        pendingCount: pending.length,
        acceptedCount: accepted.length,
        rejectedCount: rejected.length,
      };

      if (req.user.userRole !== "customer") {
        let pendingAmount = 0;
        let acceptedAmount = 0;
        let rejectedAmount = 0;
        let allAmount = 0;

        for (const order of all) {
          switch (order.status) {
            case "Pending":
              pendingAmount += order.amount; // Assuming 'amount' is a property with the order value
              break;
            case "Succeeded":
              acceptedAmount += order.amount;
              break;
            case "Rejected":
              rejectedAmount += order.amount;
              break;
          }
          allAmount += order.amount;
        }
        data["pendingAmount"] = pendingAmount;
        data["acceptedAmount"] = acceptedAmount;
        data["rejectedAmount"] = rejectedAmount;
        data["allAmount"] = allAmount;
      }

      res.status(200).json({
        message: "Orders Fetched Successfully",
        data: data,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
};
