const express = require("express");
const router = express.Router();
const passport = require("passport");

const UsersController = require("../controllers/users");

router.post("/", UsersController.Create);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UsersController.Index
);

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  UsersController.Update
);

module.exports = router;
