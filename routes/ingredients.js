const express = require("express");
const router = express.Router();
const passport = require("passport");

const IngredientsController = require("../controllers/ingredients");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  IngredientsController.Index
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  IngredientsController.Create
);

module.exports = router;
