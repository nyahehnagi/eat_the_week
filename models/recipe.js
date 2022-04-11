const mongoose = require("mongoose");

const RecipeIngredientSchema = new mongoose.Schema(
  {
    rep_ingredient: String,
    rep_unit: String,
    rep_qty: Number, 
  }
);

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    serves: Number,
    prep_time: Number,
    description: String,
    method: String,
    // ingredient: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}],
    ingredient: String,
    recipe_ingredients: [RecipeIngredientSchema],
    image: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
    },
    // category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    category: {
      type: String,
      default: "Vegan",
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
