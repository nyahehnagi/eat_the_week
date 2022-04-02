const express = require("express");
const router = express.Router();

const RecipesController = require("../controllers/recipes");

router.get("/", RecipesController.Index);
router.post("/", RecipesController.Create);

module.exports = router;


