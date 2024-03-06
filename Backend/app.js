var express = require("express");
require("dotenv").config();
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const connectDB = require("./api/helpers/connectDB");

var indexRouter = require("./api/routes/index");
var auth = require("./api/routes/auth");
var orders = require("./api/routes/orders");

var app = express();
// Connect to MongoDB Database
connectDB();

// Setup CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api", indexRouter);
app.use("/api/auth", auth);
app.use("/api/orders", orders);

// Setup Port
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);

module.exports = app;
