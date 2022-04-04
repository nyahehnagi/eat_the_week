const User = require('../models/user')
const bcrypt = require("bcrypt")

const SessionsController = {

  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then((user) => {
      if (!user) {
        // return something to say not logged in
        res.json('{"loggedin": "false"}')
      } else if (bcrypt.compareSync(password, user.password) == false) {
        // password fail, cannot login 
        res.json('{"loggedin": "false"}')
      } else {
        req.session.user = user;
        // return good
        res.json('{"loggedin": "true"}')
      }
    });
  },

  Destroy: (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    // return good
  },
};

module.exports = SessionsController;
