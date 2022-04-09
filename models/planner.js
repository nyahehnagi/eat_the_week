const mongoose = require("mongoose");

const PlannerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  plan: [{
    day: String,
    recipe_id: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }, 
  }],
});

const Planner = mongoose.model("Planner", PlannerSchema);

module.exports = Planner;

