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
   user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  //  user_id: { 
  //   type: String,
  //   default: "12345678", 
  // },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
