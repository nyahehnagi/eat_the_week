const Ingredient = require('../models/ingredient')

const IngredientsController = {
  Index: (req, res) => {
    Ingredient.find((err, ingredient) => {
      // console.log(res.body)
      // console.log(res.body.name)
      if (err) {
        throw err
      }
      res.json(ingredient)
    })
  },

};

module.exports = IngredientsController;
