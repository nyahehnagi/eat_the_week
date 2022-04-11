const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.get("/", OrdersController.Create);

module.exports = router;