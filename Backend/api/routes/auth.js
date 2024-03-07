var express = require("express");
var router = express.Router();

const { login, signUp, getCurrent } = require("../controllers/authController");
const { validateLogin, validateSignUp } = require("../middleware/validations");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", validateLogin, login);

router.post("/signup", validateSignUp, signUp);

router.get("/getCurrent", authMiddleware, getCurrent);
module.exports = router;
