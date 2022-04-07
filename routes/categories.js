const express = require("express");
const router = express.Router();
const passport = require("passport");

const CategoriesController = require("../controllers/categories");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  CategoriesController.Index
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  CategoriesController.Create
);

module.exports = router;