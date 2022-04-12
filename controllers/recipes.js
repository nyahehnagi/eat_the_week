const Recipe = require("../models/recipe");

const RecipesController = {
  Index: (req, res) => {
    userId = req.user._id;

    Recipe.find({user_id: userId,})
    .populate("ingredients")
    .exec((err, recipes) => {
      if (err) throw err;

      res.json(recipes);
    });
  },

  Show: (req, res) => {
    Recipe.findOne({ _id: req.params.id })
    .populate("ingredients")
    .exec((err, recipe) => {
      if (err) throw err;
      res.json(recipe);
    });
  },

  Create: (req, res) => {
    const recipe = new Recipe({
      name: req.body.recipe.name,
      serves: req.body.recipe.serves,
      prep_time: req.body.recipe.prep_time,
      description: req.body.recipe.description,
      method: req.body.recipe.method,
      ingredient: req.body.recipe.ingredient,
      recipe_ingredients: req.body.recipe.recipe_ingredients,
      image: req.body.recipe.image,
      category: req.body.recipe.category,
      user_id: req.user._id,
    });
    recipe.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  },

  Delete: (req, res) => {
    Recipe.deleteOne({
      _id: req.params.id,
    }).exec((err, _) => {
      if (err) throw err;

      res.status(204);
      res.send();
    });
  },

  Update: (req, res) => {
    console.log("Inside Update Recipe Id", req.params.id);
    console.log("Inside Update Body", req.body.recipe);
    Recipe.findOneAndUpdate({ _id: req.params.id }, req.body.recipe).exec(
      (err, recipe) => {
        if (err) throw err;
        res.json(recipe);
      }
    );
  },
};

module.exports = RecipesController;
