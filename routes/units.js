const express = require("express");
const router = express.Router();
const passport = require("passport");

const UnitsController = require("../controllers/units");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UnitsController.Index
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  UnitsController.Create
);

module.exports = router;
