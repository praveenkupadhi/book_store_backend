const express = require("express");
var cors = require("cors");
const app = express();

const bookController = require("./controllers/bookController");
const { login, register } = require("./controllers/userController");
const cartFindController = require("./controllers/cartFindController");
const cartUpdateController = require("./controllers/cartUpdateController");
const checkoutController = require("./controllers/checkoutController");

const user = require("./models/userModel");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", bookController);
app.use("/login", login(user));
app.use("/signup", register(user));
app.use("/cartFind", cartFindController);
app.use("/cartUpdate", cartUpdateController);
app.use("/checkout", checkoutController);

module.exports = app;
