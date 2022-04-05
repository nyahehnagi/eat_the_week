const User = require("../models/user");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body.user);

    user.save((err, result) => {
      if (err) {
        res.status(500).send("Error registering new user please try again.");
        throw err;
      }

      const payload = { id: result._id, name: result.name };
      res.json(payload);
    });
  },
};

module.exports = UsersController;
