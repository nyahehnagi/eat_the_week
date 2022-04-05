const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.post("/", AuthController.Create);

module.exports = router;
