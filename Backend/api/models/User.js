const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); // For unique email validation

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure unique email addresses
      trim: true,
      lowercase: true, // Convert email to lowercase for case-insensitive comparisons
    },
    password: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
