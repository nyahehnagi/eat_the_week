const User = require("../models/user");
const jwt = require("jsonwebtoken");

const UsersController = {
  
  Index: (req, res) => {
    User.findOne({_id: req.user._id}, function( err, users) {
      if (err) {
        throw err
      } 
       res.json(users)
    })
  },

  Create: (req, res) => {
    const user = new User(req.body.user);

    user.save((err, result) => {
      if (err) {
        res.status(500).send("Error registering new user please try again.");
        throw err;
      }

      const body = { _id: user._id, email: user.email };
      const token = jwt.sign({ user: body }, process.env.AUTH_KEY, {
        expiresIn: "1h",
      });

      const payload = { id: result._id, name: result.name };

      res.cookie("token", token);
      res.json(payload);
    });
  },
};

module.exports = UsersController;
