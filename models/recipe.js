const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
