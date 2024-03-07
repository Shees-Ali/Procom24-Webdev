const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
    },
    accountNumber: {
      type: String,
      required: true,
      trim: true,
    },
    merchantAccountNumber: {
      type: String,
      required: true,
      trim: true,
    },
    bank: {
      type: String,
      required: true,
      trim: true,
    },
    paymentPurpose: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending"
    },
    createdBy: {
      type: String,
       default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
