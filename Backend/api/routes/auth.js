var express = require('express');
var router = express.Router();

const { login, signUp } = require("../controllers/authController");
const {validateLogin, validateSignUp } = require("../helpers/validations")

router.post("/login", validateLogin, login);

router.post("/signup", validateSignUp, signUp);

module.exports = router;