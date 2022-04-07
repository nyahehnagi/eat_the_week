const Category = require("../models/category");

const CategoriesController = {
  Index: (req, res) => {
    Category.find((err, categories) => {
      if (err) {
        throw err;
      }
      res.json(categories);
    });
  },

  Create: (req, res) => {
    const category = new Category({
      name: req.body.category.name,
    });
    category.save((err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    });
  },
};

module.exports = CategoriesController;
