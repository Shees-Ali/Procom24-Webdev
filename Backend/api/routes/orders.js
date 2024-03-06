var express = require("express");
var router = express.Router();

const {
  create,
  get,
  getOne,
  update,
} = require("../controllers/orderController");

const { validateCreate } = require("../helpers/validations");

router.get("/", get);

router.get("/:id", getOne);

router.post("/create", validateCreate, create);

router.put("/:id/update", validateCreate, update);

module.exports = router;
