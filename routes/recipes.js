const express = require("express");
const router = express.Router();
const passport = require('passport');

const RecipesController = require("../controllers/recipes");

router.get("/", passport.authenticate('jwt', { session: false }), RecipesController.Index);
router.post("/",passport.authenticate('jwt', { session: false }),  RecipesController.Create);

module.exports = router;


