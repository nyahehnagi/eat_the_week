const Ingredient = require("../models/ingredient");

const IngredientsController = {
  Index: (req, res) => {
    Ingredient.find((err, ingredients) => {
      if (err) {
        throw err;
      }
      res.json(ingredients);
    });
  },

  Create: (req, res) => {
    const ingredient = new Ingredient({
      name: req.body.ingredient.name,
      unit: req.body.ingredient.unit,
      image: req.body.ingredient.image,
    });
    ingredient.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  },
};

module.exports = IngredientsController;
