var express = require("express");
var router = express.Router();

const {
  login,
  signUp,
  getCurrent,
  signUpAsMerchant,
  getAllCustomers,
} = require("../controllers/authController");
const { validateLogin, validateSignUp } = require("../middleware/validations");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", validateLogin, login);

router.post("/signup", validateSignUp, signUp);

router.post("/signUpAsMerchant", validateSignUp, signUpAsMerchant);

router.get("/getCurrent", authMiddleware, getCurrent);

router.get("/getAllCustomers", authMiddleware, getAllCustomers);

module.exports = router;
