const mongoose = require("mongoose");

const UnitSchema = new mongoose.Schema({
  name: String,
});

const Unit = mongoose.model("Unit", UnitSchema);

module.exports = Unit;
