const Order = require("../models/order")

const OrdersController = {
  Create: (req, res) => {
    const order = new Order({
      user_id: req.user._id,
      date: req.orderDate
    });
    order.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result)
    });
  },
};

module.exports = OrdersController;