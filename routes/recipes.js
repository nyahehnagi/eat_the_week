const express = require("express");
const router = express.Router();
const passport = require("passport");

const RecipesController = require("../controllers/recipes");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  RecipesController.Index
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  RecipesController.Show
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  RecipesController.Create
);

router.delete(
  "/:id", 
  passport.authenticate("jwt", { session: false }),
  RecipesController.Delete
);

router.put(
  "/:id", 
  passport.authenticate("jwt", { session: false }),
  RecipesController.Update
);


module.exports = router;
