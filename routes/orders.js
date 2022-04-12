const express = require("express");
const router = express.Router();

const OrdersController = require("../controllers/orders");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  OrdersController.Create
);

module.exports = router;
