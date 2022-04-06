const Recipe = require("../models/recipe");

const RecipesController = {
  Index: (req, res) => {
    Recipe.find((err, recipes) => {
      if (err) {
        throw err;
      }

      res.json(recipes)
    })
  },

  Create: (req, res) => {
    console.log(req.body)
    console.log(req.body.recipe.name)

    const recipe = new Recipe({ name: req.body.recipe.name, 
      serves: req.body.recipe.serves,
      prep_time: req.body.recipe.prep_time,
      description: req.body.recipe.description,
      method: req.body.recipe.method,
      ingredient: req.body.recipe.ingredient,
      image: req.body.recipe.image,
      category: req.body.recipe.category,
      user_id: req.body.recipe.user_id
     })
    recipe.save((err, result) => {
      if (err) {
        throw err
      }
      res.json(result)
    });
  },
};

module.exports = RecipesController;
