const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    serves: Number,
    prep_time: Number,
    description: String,
    method: String,
    // ingredient: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
    ingredient: String,
    image: String,
    // category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    category: { 
    type: String,
    default: "Vegan", 
    },
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},

  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
