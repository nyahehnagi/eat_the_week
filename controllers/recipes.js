const Recipe = require('../models/recipe')

const RecipesController = {
  Index: (req, res) => {
    Recipe.find((err, recipes) => {
      if (err) {
        throw err
      }

      res.json(recipes)
    })
  },

  Create: (req, res) => {
    console.log(req.body.recipe.name)

    const recipe = new Recipe({ name: req.body.recipe.name })
    recipe.save((err, result) => {
      if (err) {
        throw err
      }

      res.json(result)
    });
  },


};

module.exports = RecipesController;
