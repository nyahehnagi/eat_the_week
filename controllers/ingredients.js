const Ingredient = require('../models/ingredient')

const IngredientsController = {
  Index: (req, res) => {
    Ingredient.find((err, ingredients) => {
      if (err) {
        throw err
      }
       res.json(ingredients)
    })
  },

};

module.exports = IngredientsController;
