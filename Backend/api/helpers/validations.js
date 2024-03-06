const { body } = require("express-validator");

module.exports = {
  // Validation middleware for login
  validateLogin: [
    body("email", "Invalid email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false }),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  // Validation middleware for signup
  validateSignUp: [
    body("username").notEmpty().withMessage("User name is required"),
    body("email")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: false })
      .withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("phoneNumber")
      .notEmpty()
      .withMessage("Phone number is required")
      .isLength({ min: 12, max: 12 })
      .withMessage("Phone number should be 12 digits long"),
    body("accountNumber").notEmpty().withMessage("Account Number is required"),
  ],
};
