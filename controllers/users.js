const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UsersController = {

  Create: (req, res) => {

    const hash = bcrypt.hashSync(req.body.user.password, saltRounds);
    req.body.user.password = hash

    const user = new User(req.body.user);

    user.save((err, result) => {
      if (err) {
        throw err;
      }

      // TODO Make this return a user json object
      res.json(result.name)

    });
  }
}


module.exports = UsersController;