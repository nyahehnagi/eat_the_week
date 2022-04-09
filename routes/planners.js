const express = require("express");
const router = express.Router();
const passport = require("passport");

const PlannerController = require("../controllers/planners");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  PlannerController.Show
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  PlannerController.Create
);

module.exports = router;
