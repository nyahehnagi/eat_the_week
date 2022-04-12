const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: Date,
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", CategorySchema);

module.exports = Category;