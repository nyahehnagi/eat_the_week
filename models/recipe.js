const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    name: String,
    serves: Number,
    prep_time: Number,
    description: String,
    method: String,
    ingredient: String,
    ingredients: [
      {
        ingredient_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ingredient",
        },
      },
    ],

    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
    },
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
