const Recipe = require("../models/recipe");

const RecipesController = {
  Index: (req, res) => {

    userId = req.user._id

    Recipe.
      find({
        user_id: userId
      }).
      exec((err, recipes) => {
        if (err) throw err;

        res.json(recipes)
      }) 
  },

  Create: (req, res) => {

    console.log("User Info", req.user)
    console.log("User Info", req.user._id)

    const recipe = new Recipe({ 
      name: req.body.recipe.name, 
      serves: req.body.recipe.serves,
      prep_time: req.body.recipe.prep_time,
      description: req.body.recipe.description,
      method: req.body.recipe.method,
      ingredient: req.body.recipe.ingredient,
      image: req.body.recipe.image,
      category: req.body.recipe.category,
      user_id: req.user._id
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
