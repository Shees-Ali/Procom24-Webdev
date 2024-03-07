const { validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const { username, password } = req.body;

      const userDetails = await User.findOne({
        username: username,
      });

      if (!userDetails) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      const isMatch = await bcrypt.compare(password, userDetails.password);

      if (!isMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign(
        { userId: userDetails._id.toString(), userRole: userDetails.userRole },
        process.env.JWT_SecretKey,
        { expiresIn: "24h" }
      );

      res.status(200).json({
        message: "Login successful",
        userDetails,
        userId: userDetails._id.toString(),
        token: token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  signUp: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { username, email, password, phoneNumber, accountNumber } =
        req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        phoneNumber,
        accountNumber,
        userRole: "customer",
      });
      const result = await newUser.save();

      res.status(200).json({
        message: "User created successfully",
        user: result,
      });
    } catch (error) {
      res.status(400).json({
        message: error._message,
      });
    }
  },

  getCurrent: async (req, res) => {
    try {
      // Ensure user is authenticated using middleware before this function
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized: Access denied" });
      }

      const user = await User.findById(req.user.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Optionally exclude sensitive fields like password before sending response
      const sanitizedUser = { ...user._doc }; // Create a copy excluding password
      delete sanitizedUser.password;

      res.status(200).json({
        user: sanitizedUser
      });
    } catch (error) {
      console.error("Error fetching current user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
