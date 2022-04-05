const User = require('../models/user')
const jwt = require('jsonwebtoken');

const AuthController = {

  Create: (req, res, next) => {

    const email = req.body.session.email;
    const password = req.body.session.password;

    let payload = ""
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        payload = {message: 'No user found'}
        res.json(payload)
      } else if (!user.isValidPassword(password)) {
        payload = {message: 'Incorrect Password'}
        res.json(payload)
      } else {
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.AUTH_KEY, { expiresIn: '1h' });
        const payload = {id: user._id, token: token}
        res.cookie('token', token)
        res.json(payload)
      }
    });
  },

};

module.exports = AuthController;
