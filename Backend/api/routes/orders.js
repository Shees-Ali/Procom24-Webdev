var express = require("express");
var router = express.Router();

const {
  create,
  get,
  getOne,
  update,
  getReporting,
} = require("../controllers/orderController");

const { validateCreate } = require("../middleware/validations");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, get);

router.get("/:id", authMiddleware, getOne);

router.post("/create", [validateCreate, authMiddleware], create);

router.put("/:id/update", [authMiddleware], update);

router.get("/reportingCount", [authMiddleware], getReporting);

module.exports = router;
